import { MetaTags } from '@redwoodjs/web'
import NewFeedingForm from 'src/components/NewFeedingForm/NewFeedingForm'

const StartFeedingPage = () => {
  return (
    <>
      <MetaTags title="StartFeeding" description="StartFeeding page" />

      <h1>Stillen starten</h1>
      <NewFeedingForm />
    </>
  )
}

export default StartFeedingPage
