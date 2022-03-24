import { deltaMinutesNow } from 'src/utils/time'

type FeedingsProps = {
  feedings: {
    id: number
    side?: string
    startTime: string
    endTime?: string
  }[]
}

const Feedings = ({ feedings }: FeedingsProps) => {
  return (
    <ol>
      {feedings.map(({ id, startTime, endTime, side }) => {
        const startDate = new Date(startTime)
        const endDate = endTime !== null ? new Date(endTime) : null

        return (
          <li key={id}>
            <span>{side}</span>{' '}
            <time>{startDate.toLocaleDateString('de-DE')}</time> bis{' '}
            <time>
              {endDate ? endDate.toLocaleTimeString('de-DE') : 'läuft'}
            </time>{' '}
            ({deltaMinutesNow(startDate)})
          </li>
        )
      })}
    </ol>
  )
}

export default Feedings
