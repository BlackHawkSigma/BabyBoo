import type { EditWeightById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WeightForm from 'src/components/Weight/WeightForm'

export const QUERY = gql`
  query EditWeightById($id: Int!) {
    weight: weight(id: $id) {
      id
      value
      recordedAt
      createdAt
    }
  }
`
const UPDATE_WEIGHT_MUTATION = gql`
  mutation UpdateWeightMutation($id: Int!, $input: UpdateWeightInput!) {
    updateWeight(id: $id, input: $input) {
      id
      value
      recordedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ weight }: CellSuccessProps<EditWeightById>) => {
  const [updateWeight, { loading, error }] = useMutation(
    UPDATE_WEIGHT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Weight updated')
        navigate(routes.weights())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateWeight({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Weight {weight.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WeightForm
          weight={weight}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
