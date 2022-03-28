import type { FindBabyQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindBabyQuery {
    baby {
      name
    }
  }
`

export const Loading = () => <div>...</div>

export const Empty = () => <div className="italic">no Baby yet...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ baby }: CellSuccessProps<FindBabyQuery>) => {
  return <span>{baby.name}</span>
}
