import { differenceInMinutes, parseISO } from 'date-fns'

export const deltaMinutes = (
  first: Date | string,
  second: Date | string
): string => {
  const delta = differenceInMinutes(
    typeof first === 'string' ? parseISO(first) : first,
    typeof second === 'string' ? parseISO(second) : second,
    {
      roundingMethod: 'round',
    }
  )

  return new Intl.RelativeTimeFormat('de-DE', { numeric: 'auto' }).format(
    delta,
    'minute'
  )
}
