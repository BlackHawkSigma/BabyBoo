import { MetaTags } from '@redwoodjs/web'

import FeedingCell from 'src/components/FeedingCell'

type FeedingPageProps = {
  id: number
}

const FeedingPage = ({ id }: FeedingPageProps) => {
  return (
    <>
      <MetaTags title="Feeding" description="Feeding page" />
      <FeedingCell id={id} />
    </>
  )
}

export default FeedingPage
