import LatestFeeding from './LatestFeeding'

export const ongoing = () => {
  return (
    <LatestFeeding
      feeding={{
        id: 1,
        side: 'LEFT',
        startTime: new Date('2022-03-28T20:01:00+02:00').toISOString(),
      }}
      baby={{ name: 'Baby' }}
    />
  )
}

export const finished = () => {
  return (
    <LatestFeeding
      feeding={{
        id: 1,
        side: 'RIGHT',
        startTime: new Date('2022-03-28T20:01:00+02:00').toISOString(),
        endTime: new Date('2022-03-28T20:16:00+02:00').toISOString(),
      }}
      baby={{ name: 'Baby' }}
    />
  )
}

export default { title: 'Components/LatestFeeding' }
