'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

// import { useActions, useUIState } from 'ai/rsc'
import { Chapter, chapters, videos } from 'data/data'
import { memo } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { Badge } from '../ui/badge'

export const Contents = memo(
  function Contents({ tags }: { tags: string[] }) {
    // const { submitUserMessage } = useActions()
    // const [_, setMessages] = useUIState()

    console.log('tags', tags)

    const chapters = filterChapters(tags)

    return (
      <Carousel
        opts={{
          align: 'center'
        }}
        className="w-full mx-auto sm:max-w-2xl"
      >
        <CarouselContent>
          {chapters.map(chapter => (
            <CarouselItem key={chapter.videoId} className="md:basis-1/2">
              <ChapterCard chapter={chapter} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  },
  (prev, next) => prev.tags.join() === next.tags.join()
)

// @ts-ignore
const compare = (a1, a2) => a1.reduce((a, c) => a + a2.includes(c), 0)

const filterChapters = (tags: string[]): Chapter[] => {
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

  return results.slice(0, 4)
}

const ChapterCard = ({ chapter }: { chapter: Chapter }) => {
  try {
    const video = videos[chapter.videoId]

    const embedParams: Record<string, any> = {
      start: getSeconds(chapter.timestamp),
      cc_lang_pref: video.lang, // Set the default language for the player
      cc_load_policy: 1, // Show closed captions
      color: 'white', // Set the color of video progress bar
      iv_load_policy: 3 // Hide the video annotations
    }

    // Convert the video parameters to a query string
    const embedParamsString = Object.keys(embedParams)
      .map(key => `${key}=${embedParams[key]}`)
      .join('&')

    return (
      <Card>
        <CardContent className="flex-col">
          <div className="w-full">
            <LiteYouTubeEmbed
              id={chapter.videoId} // Default none, id of the video or playlist
              adNetwork={false} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
              params={embedParamsString} // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
              playlist={false} // Use true when your ID be from a playlist
              title="YouTube Video Embed" // a11y, always provide a title for iFrames
              noCookie={true} // Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
            />
          </div>
          <hr />
          <div className="pt-3 pb-4 px-6">
            <div className="text-sm leading-tight line-clamp-3">
              {chapter.summary}
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${chapter.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs opacity-50"
            >
              Watch <b>{video.publisher}</b> on YouTube
            </a>
            <div className="flex flex-wrap gap-1 mt-2">
              {chapter.tags.map(tag => (
                <Badge key={tag} className="rounded-full" variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  } catch (error) {
    console.error('error', error)
    return null
  }
}

const getSeconds = (timestamp: string) => {
  try {
    timestamp = timestamp.split(',')[0] // Remove milliseconds
    const [hours, minutes, seconds] = timestamp.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
  } catch (error) {
    console.error('error', error)
    return 0
  }
}
