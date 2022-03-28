import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useEffect, useState } from 'react'
import { deltaMinutes } from 'src/utils/time'

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
    endTime?: string
  }
}

const Feeding = ({ feeding }: FeedingProps) => {
  const [now, setNow] = useState<Date>(new Date())
  const [endFeeding, { loading }] = useMutation(END_FEEDING_MUTATION, {
    onCompleted: () => {
      toast.success('beendet')
      navigate(routes.feedings())
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1_000)

    let wakeLockObject = null

    if ('wakeLock' in navigator) {
      navigator.wakeLock.request('screen').then((wakeLock) => {
        wakeLockObject = wakeLock
        window.alert('wakelock acquired')
      })
    }

    return () => {
      clearInterval(interval)
      wakeLockObject && wakeLockObject.release()
    }
  }, [])

  const { startTime, side } = feeding
  const startDate = new Date(startTime)

  const clickHandler = () => {
    const input = {
      endTime: new Date().toISOString(),
    }
    endFeeding({ variables: { id: feeding.id, input } })
  }

  return (
    <div className="flex flex-col justify-evenly text-xl">
      <span>{side}</span>
      <time>{startDate.toLocaleDateString('de-DE')}</time>
      <time>{startDate.toLocaleTimeString('de-DE')}</time>
      <span>({deltaMinutes(startDate, now)})</span>
      {!feeding.endTime && (
        <button
          className="rounded-full bg-sky-300 px-4 py-2 disabled:animate-pulse disabled:bg-sky-100 disabled:text-slate-400"
          disabled={loading}
          onClick={clickHandler}
        >
          beenden
        </button>
      )}
    </div>
  )
}

export default Feeding
