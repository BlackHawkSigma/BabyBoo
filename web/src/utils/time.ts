import { differenceInMinutes, parseISO } from 'date-fns'

export const deltaMinutesNow = (time: Date | string): string => {
  const delta = differenceInMinutes(
    typeof time === 'string' ? parseISO(time) : time,
    new Date(),
    {
      roundingMethod: 'round',
    }
  )

  return new Intl.RelativeTimeFormat('de-DE', { numeric: 'auto' }).format(
    delta,
    'minute'
  )
}
