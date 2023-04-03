import { useEffect, useState } from 'react'

import {
  formatDuration,
  // formatDistanceToNowStrict,
  intervalToDuration,
  parseISO,
  formatDistanceToNow,
} from 'date-fns'
import deLocale from 'date-fns/locale/de'

import { routes, Link } from '@redwoodjs/router'

type LatestFeedingProps = {
  feeding: {
    id: number
    side?: string
    startTime: string
    endTime?: string
  }
  baby: {
    name: string
  }
}

const Side = ({ side }: { side?: string }) => {
  if (side === 'LEFT') return <span>L</span>
  if (side === 'RIGHT') return <span>R</span>

  return <span></span>
}

const LatestFeeding = ({ feeding, baby }: LatestFeedingProps) => {
  const [distanceToNow, setDistanceToNow] = useState<string>(
    formatDistanceToNow(parseISO(feeding.startTime), {
      locale: deLocale,
    })
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setDistanceToNow(
        formatDistanceToNow(parseISO(feeding.startTime), {
          locale: deLocale,
        })
      )
    }, 1_000)
    return () => clearInterval(interval)
  }, [feeding.startTime])

  return feeding.endTime ? (
    // finished

    <div className="rounded-lg bg-stone-100 p-6">
      <Link to={routes.feeding({ id: feeding.id })}>
        <header className="pb-2 text-center text-2xl">Stillen</header>
        <div className="flex items-center justify-around">
          <h3 className="pr-4 text-3xl font-bold">
            <Side side={feeding.side} />
          </h3>
          <h2 className="flex-grow">
            <div>
              {baby.name} hat vor{' '}
              <span className="font-semibold">{distanceToNow}</span>
            </div>
            <div>
              <span className="font-semibold">
                {formatDuration(
                  intervalToDuration({
                    start: parseISO(feeding.startTime),
                    end: parseISO(feeding.endTime),
                  }),
                  { locale: deLocale, format: ['minutes'] }
                )}
              </span>{' '}
              lang getrunken.
            </div>
          </h2>
        </div>
      </Link>
    </div>
  ) : (
    // ongoing

    <div className="rounded-lg bg-stone-100 p-6">
      <Link to={routes.feeding({ id: feeding.id })}>
        <header className="pb-2 text-center text-2xl">Stillen</header>
        <div className="flex items-center justify-around">
          <h3 className="pr-4 text-3xl font-bold">
            <Side side={feeding.side} />
          </h3>
          <h2 className="flex-grow">
            {baby.name} trinkt seit{' '}
            <span className="font-semibold">{distanceToNow}</span>
          </h2>
        </div>
      </Link>
    </div>
  )
}

export default LatestFeeding

// <header className="flex justify-between">
//   <h2 className="font-semibold text-gray-700">{comment.name}</h2>
//   <time className="text-xs text-gray-500" dateTime={comment.createdAt}>
//     {formattedDate(comment.createdAt)}
//   </time>
// </header>
// <p className="text-sm mt-2">{comment.body}</p>
