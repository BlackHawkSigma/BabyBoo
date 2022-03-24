import { MetaTags } from '@redwoodjs/web'

import FeedingsCell from 'src/components/FeedingsCell'

const FeedingsPage = () => {
  return (
    <>
      <MetaTags title="Füttern" description="Feeding page" />

      <FeedingsCell />
    </>
  )
}

export default FeedingsPage
