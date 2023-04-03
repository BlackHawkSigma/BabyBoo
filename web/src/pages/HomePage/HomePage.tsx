import { useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import LatestFeedingCell from 'src/components/LatestFeedingCell'

const HomePage = () => {
  useEffect(() => {
    const onVis = () => console.log(document.visibilityState)
    const onFocus = () => console.log('focus')

    document.addEventListener('visibilitychange', onVis)
    window.addEventListener('focus', onFocus)

    return () => {
      document.removeEventListener('visibilitychange', onVis)
      window.removeEventListener('focus', onFocus)
    }
  }, [])
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="card">
        <LatestFeedingCell />
      </div>
    </>
  )
}

export default HomePage
