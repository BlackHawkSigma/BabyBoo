import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/dist/toast'

type FeedingLayoutProps = {
  children?: React.ReactNode
}

const FeedingLayout = ({ children }: FeedingLayoutProps) => {
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6_000 }} />
      <div className="mb-4 flex items-baseline justify-between">
        <h1 className="text-center text-xl">Stillen</h1>
        <Link
          className="rounded-full bg-emerald-600 py-2 px-4 font-bold text-white"
          to={routes.startFeeding()}
        >
          +
        </Link>
      </div>
      {children}
    </>
  )
}

export default FeedingLayout
