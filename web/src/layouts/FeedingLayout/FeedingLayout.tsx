import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

import { Breast } from 'src/components/Icons'

type FeedingLayoutProps = {
  children?: React.ReactNode
}

const FeedingLayout = ({ children }: FeedingLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 3_000 }} />
      <div className="mb-4 flex items-baseline justify-between">
        <h1 className="flex-grow text-center text-2xl">Stillen</h1>
        <Link
          className="rounded-full bg-emerald-600 p-2"
          to={routes.startFeeding()}
        >
          <Breast inverted />
        </Link>
      </div>
      {children}
    </>
  )
}

export default FeedingLayout
