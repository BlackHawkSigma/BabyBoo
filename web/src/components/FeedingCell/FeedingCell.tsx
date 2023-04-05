import type { FindFeedingQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Feeding from '../Feeding/Feeding'

export const QUERY = gql`
  query FindFeedingQuery($id: Int!) {
    feeding: feeding(id: $id) {
      id
      side
      startTime
      endTime
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ feeding }: CellSuccessProps<FindFeedingQuery>) => {
  return <Feeding feeding={feeding} />
}
