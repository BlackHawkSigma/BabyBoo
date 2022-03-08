import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type WeightLayoutProps = {
  children: React.ReactNode
}

const WeightsLayout = ({ children }: WeightLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.weights()}
            className="rw-link"
          >
            Weights
          </Link>
        </h1>
        <Link
          to={routes.newWeight()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Weight
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default WeightsLayout
