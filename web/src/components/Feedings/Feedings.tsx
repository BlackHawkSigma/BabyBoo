import { Link, routes } from '@redwoodjs/router'
import { useEffect, useState } from 'react'
import { deltaMinutes } from 'src/utils/time'

type FeedingsProps = {
  feedings: {
    id: number
    side?: string
    startTime: string
    endTime?: string
  }[]
}

const Feedings = ({ feedings }: FeedingsProps) => {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ol>
      {feedings.map(({ id, startTime, endTime, side }) => {
        const startDate = new Date(startTime)
        const endDate = endTime !== null ? new Date(endTime) : null

        return (
          <li key={id}>
            <Link to={routes.feeding({ id })}>
              <span>{side}</span>{' '}
              <time>{startDate.toLocaleString('de-DE')}</time> bis{' '}
              <time>
                {endDate ? endDate.toLocaleTimeString('de-DE') : 'läuft'}
              </time>{' '}
              ({deltaMinutes(startDate, now)})
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default Feedings
