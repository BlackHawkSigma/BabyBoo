import type { FindWeights } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Weights from 'src/components/Weight/Weights'

export const QUERY = gql`
  query FindWeights {
    weights {
      id
      value
      recordedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No weights yet. '}
      <Link
        to={routes.newWeight()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ weights }: CellSuccessProps<FindWeights>) => {
  return <Weights weights={weights} />
}
