import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WeightForm from 'src/components/Weight/WeightForm'

const CREATE_WEIGHT_MUTATION = gql`
  mutation CreateWeightMutation($input: CreateWeightInput!) {
    createWeight(input: $input) {
      id
    }
  }
`

const NewWeight = () => {
  const [createWeight, { loading, error }] = useMutation(
    CREATE_WEIGHT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Weight created')
        navigate(routes.weights())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createWeight({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Neue Messung</h2>
      </header>
      <div className="rw-segment-main">
        <WeightForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWeight
