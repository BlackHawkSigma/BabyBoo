import { useEffect, useState } from 'react'

import {
  formatDistance,
  formatDuration,
  intervalToDuration,
  parseISO,
} from 'date-fns'
import deLocale from 'date-fns/locale/de'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

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
      })
    }

    return () => {
      clearInterval(interval)
      wakeLockObject && wakeLockObject.release()
    }
  }, [])

  const { startTime, endTime, side } = feeding
  const startDate = new Date(startTime)

  const clickHandler = () => {
    const input = {
      endTime: new Date().toISOString(),
    }
    endFeeding({ variables: { id: feeding.id, input } })
  }

  const Side = ({ side }: { side?: string }) => {
    if (side === 'LEFT') return <span>L</span>
    if (side === 'RIGHT') return <span>R</span>

    return <span></span>
  }

  const Ongoing = () => (
    <div className="flex flex-col rounded-lg bg-stone-100 p-6">
      <div className="flex items-center justify-around">
        <h3 className="pr-4 text-3xl font-bold">
          <Side side={side} />
        </h3>
        <h2 className="flex-grow">
          <div className="font-semibold">
            {formatDistance(startDate, now, {
              locale: deLocale,
            })}
          </div>
          <div>
            seit <time>{startDate.toLocaleString('de-DE')}</time>
          </div>
        </h2>
      </div>

      <button
        className="mt-4 rounded-full bg-sky-300 px-4 py-2 disabled:animate-pulse disabled:bg-sky-100 disabled:text-slate-400"
        disabled={loading}
        onClick={clickHandler}
      >
        🍼 fertig 😋
      </button>
    </div>
  )

  const Finished = () => {
    const endDate = new Date(endTime)

    return (
      <div className="rounded-lg bg-stone-100 p-6">
        <div className="flex items-center justify-around">
          <h3 className="pr-4 text-3xl font-bold">
            <Side side={side} />
          </h3>
          <h2 className="flex-grow">
            <div className="font-semibold">
              {formatDistance(endDate, now, {
                locale: deLocale,
                addSuffix: true,
              })}
            </div>
            <div className="font-semibold">
              {formatDuration(
                intervalToDuration({
                  start: parseISO(feeding.startTime),
                  end: parseISO(feeding.endTime),
                }),
                { locale: deLocale, format: ['minutes'] }
              )}
            </div>
            <div>
              von <time>{startDate.toLocaleString('de-DE')}</time> bis{' '}
              <time>{endDate.toLocaleTimeString('de-DE')}</time>
            </div>
          </h2>
        </div>
      </div>
    )
  }

  return feeding.endTime ? <Finished /> : <Ongoing />
}

export default Feeding
