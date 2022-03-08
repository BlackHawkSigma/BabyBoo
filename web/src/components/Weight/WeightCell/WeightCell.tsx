import type { FindWeightById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Weight from 'src/components/Weight/Weight'

export const QUERY = gql`
  query FindWeightById($id: Int!) {
    weight: weight(id: $id) {
      id
      value
      recordedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Weight not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ weight }: CellSuccessProps<FindWeightById>) => {
  return <Weight weight={weight} />
}
