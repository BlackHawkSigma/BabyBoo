import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import {
  Form,
  FormError,
  Label,
  SelectField,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'

const START_FEEDING_MUTATION = gql`
  mutation StartFeeding($input: StartFeedingInput!) {
    startFeeding(input: $input) {
      id
    }
  }
`

const NewFeedingForm = () => {
  const [startFeeding, { loading, error }] = useMutation(
    START_FEEDING_MUTATION,
    {
      onCompleted: (data) => {
        toast.success('Stillen gestartet')
        navigate(routes.feeding({ id: data.startFeeding.id }))
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  type FormValues = {
    side: 'LEFT' | 'RIGHT'
  }

  const onSubmit: SubmitHandler<FormValues> = ({ side }) => {
    const startTime = new Date().toISOString()
    const input = { type: 'BREAST', startTime, side }

    startFeeding({ variables: { input } })
  }

  return (
    <div>
      <div className="rw-form-wraper">
        <Form onSubmit={onSubmit} error={error}>
          <FormError
            error={error}
            wrapperClassName="rw-form-error-wrapper"
            titleClassName="rw-form-error-title"
            listClassName="rw-form-error-list"
          />

          <Label
            name="side"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Seite
          </Label>
          <SelectField name="side" validation={{ required: true }}>
            <option value="LEFT">Links</option>
            <option value="RIGHT">Rechts</option>
          </SelectField>

          <Submit disabled={loading} className="rw-button rw-button-green">
            Start
          </Submit>
        </Form>
      </div>
    </div>
  )
}

export default NewFeedingForm
