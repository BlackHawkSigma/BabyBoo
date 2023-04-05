import type { FeedingsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Feedings from '../Feedings/Feedings'

export const QUERY = gql`
  query FeedingsQuery {
    feedings {
      id
      side
      startTime
      endTime
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'no-cache', pollInterval: 30_000 }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ feedings }: CellSuccessProps<FeedingsQuery>) => {
  return <Feedings feedings={feedings} />
}
