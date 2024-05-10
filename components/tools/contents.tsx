'use client'

import { useActions, useUIState } from 'ai/rsc'

export const Contents = ({ tags }: { tags: string[] }) => {
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()

  return (
    <div className="grid gap-4">
      <p>Here is a list of tags. {tags ? tags.length : 'NULL'}</p>
      <div className="flex flex-col sm:flex-row items-start gap-2">
        {tags.map(tag => (
          // <button
          //   className="flex items-center gap-2 px-3 py-2 text-sm transition-colors bg-zinc-50 hover:bg-zinc-100 rounded-xl cursor-pointer"
          //   key={tag}
          //   onClick={async () => {
          //     const response = await submitUserMessage(
          //       `I would like to fly to ${tag}, proceed to choose flights.`
          //     )
          //     setMessages((currentMessages: any[]) => [
          //       ...currentMessages,
          //       response
          //     ])
          //   }}
          // >
          //   {tag}
          // </button>
          <b key={tag}>{tag}</b>
        ))}
      </div>
    </div>
  )
}
