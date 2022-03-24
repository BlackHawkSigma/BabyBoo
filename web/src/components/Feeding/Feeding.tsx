import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { deltaMinutesNow } from 'src/utils/time'

const END_FEEDING_MUTATION = gql`
  mutation EndFeeding($id: Int!, $input: EndFeedingInput!) {
    endFeeding(id: $id, input: $input) {
      id
    }
  }
`

type FeedingProps = {
  feeding: {
    id: number
    side?: string
    startTime: string
  }
}

const Feeding = ({ feeding }: FeedingProps) => {
  const [endFeeding, { loading }] = useMutation(END_FEEDING_MUTATION, {
    onCompleted: () => {
      toast.success('beendet')
      navigate(routes.feedings())
    },
  })

  const { startTime, side } = feeding
  const startDate = new Date(startTime)

  const clickHandler = () => {
    const input = {
      endTime: new Date().toISOString(),
    }
    endFeeding({ variables: { id: feeding.id, input } })
  }

  return (
    <div>
      <span>{side}</span> <time>{startDate.toLocaleDateString('de-DE')}</time> (
      {deltaMinutesNow(startDate)})
      <button
        className="rounded-full bg-sky-300 px-4 py-2"
        disabled={loading}
        onClick={clickHandler}
      >
        beenden
      </button>
    </div>
  )
}

export default Feeding
