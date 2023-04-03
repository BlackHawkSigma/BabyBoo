import { formatDistanceStrict } from 'date-fns'
import { de } from 'date-fns/locale'

import { Link, routes } from '@redwoodjs/router'

type FeedingsProps = {
  feedings: {
    id: number
    side?: string
    startTime: string
    endTime?: string
  }[]
}

const Side = ({ side }: { side?: string }) => {
  if (side === 'LEFT') return <span>L</span>
  if (side === 'RIGHT') return <span>R</span>

  return <span></span>
}

const Feedings = ({ feedings }: FeedingsProps) => {
  return (
    <ol>
      {feedings.map(({ id, startTime, endTime, side }) => {
        const startDate = new Date(startTime)
        const endDate = endTime !== null ? new Date(endTime) : null

        return (
          <li
            key={id}
            className="my-1 rounded px-1 odd:bg-stone-100 even:bg-stone-50"
          >
            <Link to={routes.feeding({ id })}>
              <div className="flex justify-start gap-2">
                <Side side={side} />
                <time>{startDate.toLocaleString('de-DE')}</time>
                <time>
                  {endDate
                    ? `bis ${endDate.toLocaleTimeString('de-DE')}`
                    : 'läuft'}
                </time>
                {endDate && (
                  <span className="flex-grow text-right">
                    {formatDistanceStrict(startDate, endDate, { locale: de })}
                  </span>
                )}
              </div>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default Feedings
