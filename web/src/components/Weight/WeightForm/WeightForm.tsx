import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const WeightForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.weight?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Gewicht [g]
        </Label>

        <NumberField
          name="value"
          defaultValue={props.weight?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          step={10}
          autoComplete="off"
          inputMode="numeric"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="value" className="rw-field-error" />

        <Label
          name="recordedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Zeitpunkt
        </Label>

        <DatetimeLocalField
          name="recordedAt"
          defaultValue={formatDatetime(props.weight?.recordedAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="recordedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Speichern
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WeightForm
