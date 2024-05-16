/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useActions, useUIState } from 'ai/rsc'
import { memo, useState } from 'react'
import { nanoid } from 'nanoid'
import { UserMessage } from '@/components/stocks/message'
import { AI } from '@/lib/chat/actions'
import { toast } from 'sonner'

const defaultQuestions = [
  'How do I network with no background in the US?',
  'How can I find a cofounder that understands my culture?',
  'How do I overcome the language barrier when pitching to investors?',
  'What are some success stories of immigrant founders?',
  'How do I fit in with the startup culture without feeling like an outsider?'
]

// Randomly choose N elements from an array
const chooseN = (arr: string[], n: number) => {
  const shuffled = arr.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, n)
}

export const DifferentQuestions = memo(
  function DifferentQuestions({
    questions = chooseN(defaultQuestions, 2)
  }: {
    questions?: string[]
  }) {
    const [suggestedQuestions, setSuggestedQuestions] = useState(questions)
    const [_, setMessages] = useUIState<typeof AI>()
    const { submitUserMessage } = useActions()

    return (
      <div className="grid gap-4">
        <p>
          Sorry, I couldn&apos;t find any relevant contents for your question.
          How about asking one of these questions instead?
        </p>
        <div className="flex flex-col sm:flex-wrap items-start gap-2">
          {suggestedQuestions.map(question => (
            <button
              key={question}
              className="text-start px-3 py-2 text-sm transition-colors bg-zinc-50 hover:bg-zinc-100 rounded-xl cursor-pointer"
              onClick={async () => {
                setMessages(currentMessages => [
                  ...currentMessages,
                  {
                    id: nanoid(),
                    display: <UserMessage>{question}</UserMessage>
                  }
                ])

                try {
                  const responseMessage = await submitUserMessage(question)

                  setMessages(currentMessages => [
                    ...currentMessages,
                    responseMessage
                  ])
                } catch {
                  toast(
                    <div className="text-red-600">
                      You have reached your message limit! Please try again
                      later.
                    </div>
                  )
                }
              }}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    )
  },
  () => true
)
