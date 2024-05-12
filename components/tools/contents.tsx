'use client'

import { useActions, useUIState } from 'ai/rsc'
import { Chapter, chapters, videos } from 'data/data'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

export const Contents = ({ tags }: { tags: string[] }) => {
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()

  console.log('tags', tags)

  const chapters = filterChapters(tags)

  return (
    <div className="mx-auto sm:max-w-2xl px-4 flex flex-col sm:flex-row items-start gap-2">
      {chapters.map(chapter => (
        <ChapterEmbed key={chapter.videoId} {...chapter} />
      ))}
    </div>
  )
}

// @ts-ignore
const compare = (a1, a2) => a1.reduce((a, c) => a + a2.includes(c), 0)

const filterChapters = (tags: string[]) => {
  const matchingChapters = {}

  for (const chapter of chapters) {
    const score = compare(chapter.tags, tags)
    if (score > 0) {
      if (matchingChapters.hasOwnProperty(score) === false) {
        // @ts-ignore
        matchingChapters[score] = [chapter]
      } else {
        // @ts-ignore
        matchingChapters[score].push(chapter)
      }
    }
  }

  // return top 5 chapters with the most matching tags
  // randomly shuffle the chapters with same score
  const results = []
  for (let i = tags.length; i > 0; i--) {
    // @ts-ignore
    const shuffled = matchingChapters[i]
      // @ts-ignore
      .map(value => ({ value, sort: Math.random() }))
      // @ts-ignore
      .sort((a, b) => a.sort - b.sort)
      // @ts-ignore
      .map(({ value }) => value)

    results.push(...shuffled)
  }

  console.log('results', results)

  return results.slice(0, 3)
}

const ChapterEmbed = (chapter: Chapter) => {
  try {
    const start = getSeconds(chapter.timestamp)
    const video = videos[chapter.videoId]

    return (
      <div className="w-full">
        <LiteYouTubeEmbed
          id={chapter.videoId} // Default none, id of the video or playlist
          adNetwork={false} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
          params={`start=${start}`} // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
          playlist={false} // Use true when your ID be from a playlist
          title="YouTube Video Embed" // a11y, always provide a title for iFrames
          noCookie={true} // Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
        />
      </div>
    )
  } catch (error) {
    console.error('error', error)
    return null
  }
}

const getSeconds = (timestamp: string) => {
  timestamp = timestamp.split(',')[0] // Remove milliseconds
  const [hours, minutes, seconds] = timestamp.split(':').map(Number)
  return hours * 3600 + minutes * 60 + seconds
}
