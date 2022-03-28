import type { FindLatestFeedingQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import LatestFeeding from '../LatestFeeding/LatestFeeding'

export const QUERY = gql`
  query FindLatestFeedingQuery {
    latestFeeding: latestFeeding {
      id
      side
      startTime
      endTime
    }

    baby {
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  latestFeeding,
  baby,
}: CellSuccessProps<FindLatestFeedingQuery>) => {
  return <LatestFeeding feeding={latestFeeding} baby={baby} />
}
