// @ts-nocheck

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import 'server-only'

import {
  createAI,
  createStreamableUI,
  createStreamableValue,
  getAIState,
  getMutableAIState
} from 'ai/rsc'

import { BotCard, BotMessage } from '@/components/stocks'

import { saveChat } from '@/app/actions'
import { auth } from '@/auth'
import { SpinnerMessage, UserMessage } from '@/components/stocks/message'
import { RelatedContents } from '@/components/tools/related-contents'
import { nanoid } from '@/lib/utils'
import { google } from '@ai-sdk/google'
import { streamText } from 'ai'
import { z } from 'zod'
import { Chat } from '../types'
import { rateLimit } from './ratelimit'
import { DifferentQuestions } from '@/components/tools/different-questions'

const systemPrompt = `\
You are a friendly assistant that suggests related contents about first-generation Korean immigrant startup founders, based on the user question. The following are the list of topic tags that you can use to suggest related contents:

- fundraising (Finding investors and getting investments)
- networking (Building a network as an immigrant)
- team (Finding cofounders and hiring employees)
- growth (Growing the business and the team)
- culture (Cultural identity as an immigrant)
- language (Language barrier as an immigrant)
- immigration (Visa and immigration process)
- resilience (Overcoming self-doubt of being an outsider)
- advice (Advice and tips for other entrepreneurs)
- success (Successes of startup journey)

If the question is related to the tags, you can show related contents based on the tags. If the question is not related, you can suggest a different question related to the tags.

The following are some examples of user queries and the related tags:

Example query:
"How do I overcome the language barrier when pitching to investors?"
Tool call: showRelatedContents
Args:
language, fundraising

Example query:
"How do I find a cofounder who understands my culture?"
Tool call: showRelatedContents
Args:
team, culture

Example query:
"What are some success stories of immigrant founders?"
Tool call: showRelatedContents
Args:
success

Example query:
"How do I fit in with the startup culture without feeling like an outsider?"
Tool call: showRelatedContents
Args:
resilience, culture

Example query:
"What are the best Korean restaurants in Silicon Valley?"
Tool call: suggestDifferentQuestions
Args:
- "What are some success stories of founders in Silicon Valley?"
- "How do I find a community in Silicon Valley as a Korean?"

Example query:
"What's the best way to learn English?"
Tool call: suggestDifferentQuestions
Args:
- "How do I overcome the language barrier when pitching to investors?"
- "Does language barrier affect the success of fundraising?"
`

async function submitUserMessage(content: string) {
  'use server'

  await rateLimit()

  const aiState = getMutableAIState()

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: 'user',
        content: `${aiState.get().interactions.join('\n\n')}\n\n${content}`
      }
    ]
  })

  const history = aiState.get().messages.map(message => ({
    role: message.role,
    content: message.content
  }))
  // console.log(history)

  const textStream = createStreamableValue('')
  const spinnerStream = createStreamableUI(<SpinnerMessage />)
  const messageStream = createStreamableUI(null)
  const uiStream = createStreamableUI()

  ;(async () => {
    try {
      const result = await streamText({
        model: google('models/gemini-pro'),
        temperature: 0.2,
        tools: {
          showRelatedContents: {
            description: 'Show related contents based on the user query.',
            parameters: z.object({
              tags: z.array(
                z
                  .string()
                  .describe(
                    `List of topic tags related to the query. Must be from the list of topic tags shown above.`
                  )
              )
            })
          },
          suggestDifferentQuestions: {
            description:
              'Suggest a different question related to the topic tags.',
            parameters: z.object({
              questions: z.array(
                z
                  .string()
                  .describe(
                    `List of alternative questions. Must be related to the topic tags shown above.`
                  )
              )
            })
          }
        },
        system: systemPrompt,
        messages: [...history]
      })

      let textContent = ''
      spinnerStream.done(null)

      for await (const delta of result.fullStream) {
        const { type } = delta

        console.log(delta)

        if (type === 'text-delta') {
          const { textDelta } = delta

          textContent += textDelta
          messageStream.update(<BotMessage content={textContent} />)

          aiState.update({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: 'assistant',
                content: textContent
              }
            ]
          })
        } else if (type === 'tool-call') {
          const { toolName, args } = delta

          if (toolName === 'showRelatedContents') {
            const { tags } = args

            uiStream.update(
              <BotCard>
                <RelatedContents tags={tags} />
              </BotCard>
            )

            aiState.done({
              ...aiState.get(),
              interactions: [],
              messages: [
                ...aiState.get().messages,
                {
                  id: nanoid(),
                  role: 'assistant',
                  content: `Here's a list of related tags.`,
                  display: {
                    name: 'showRelatedContents',
                    props: {
                      tags: tags
                    }
                  }
                }
              ]
            })
          } else if (toolName === 'suggestDifferentQuestions') {
            const { questions } = args

            uiStream.update(
              <BotCard>
                <DifferentQuestions />
              </BotCard>
            )

            aiState.done({
              ...aiState.get(),
              interactions: [],
              messages: [
                ...aiState.get().messages,
                {
                  id: nanoid(),
                  role: 'assistant',
                  content: `Here's a list of different questions.`,
                  display: {
                    name: 'suggestDifferentQuestions',
                    props: {
                      questions: questions
                    }
                  }
                }
              ]
            })
          }
        }
      }

      uiStream.done()
      textStream.done()
      messageStream.done()
    } catch (e) {
      console.error(e)

      const error = new Error(
        'The AI got rate limited, please try again later.'
      )
      uiStream.error(error)
      textStream.error(error)
      messageStream.error(error)
      aiState.done()
    }
  })()

  return {
    id: nanoid(),
    attachments: uiStream.value,
    spinner: spinnerStream.value,
    display: messageStream.value
  }
}

export type Message = {
  role: 'user' | 'assistant' | 'system' | 'function' | 'data' | 'tool'
  content: string
  id?: string
  name?: string
  display?: {
    name: string
    props: Record<string, any>
  }
}

export type AIState = {
  chatId: string
  interactions?: string[]
  messages: Message[]
}

export type UIState = {
  id: string
  display: React.ReactNode
  spinner?: React.ReactNode
  attachments?: React.ReactNode
}[]

export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage
  },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), interactions: [], messages: [] },
  unstable_onGetUIState: async () => {
    'use server'

    const session = await auth()

    if (session && session.user) {
      const aiState = getAIState()

      if (aiState) {
        const uiState = getUIStateFromAIState(aiState)
        return uiState
      }
    } else {
      return
    }
  },
  unstable_onSetAIState: async ({ state }) => {
    'use server'

    const session = await auth()

    if (session && session.user) {
      const { chatId, messages } = state

      const createdAt = new Date()
      const userId = session.user.id as string
      const path = `/chat/${chatId}`
      const title = messages[0].content.substring(0, 100)

      const chat: Chat = {
        id: chatId,
        title,
        userId,
        createdAt,
        messages,
        path
      }

      await saveChat(chat)
    } else {
      return
    }
  }
})

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter(message => message.role !== 'system')
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === 'assistant' ? (
          message.display?.name === 'showRelatedContents' ? (
            <BotCard>
              <RelatedContents tags={message.display.props.tags} />
            </BotCard>
          ) : message.display?.name === 'suggestDifferentQuestions' ? (
            <BotCard>
              <DifferentQuestions />
            </BotCard>
          ) : (
            <BotCard>
              <DifferentQuestions />
            </BotCard>
          )
        ) : message.role === 'user' ? (
          <UserMessage showAvatar>{message.content}</UserMessage>
        ) : (
          <BotCard>
            <DifferentQuestions />
          </BotCard>
        )
    }))
}
