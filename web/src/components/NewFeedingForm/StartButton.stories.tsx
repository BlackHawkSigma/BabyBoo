import StartButton from './StartButton'

export const standart = () => {
  return <StartButton />
}

export const loading = () => {
  return <StartButton loading={true} />
}

export default { title: 'Components/NewFeedingForm/StartButton' }
