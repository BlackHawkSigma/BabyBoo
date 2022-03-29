import { useAuth } from '@redwoodjs/auth'
import { Link, NavLink, routes } from '@redwoodjs/router'
import BabyCell from 'src/components/BabyCell'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header className="flex items-center justify-between bg-purple-900 py-4 px-8 text-white">
        <h1 className="text-2xl tracking-tight">
          <NavLink
            className="text-purple-200 transition duration-100 hover:text-purple-200"
            activeClassName="text-purple-600"
            to={routes.home()}
          >
            <BabyCell />
          </NavLink>
        </h1>
        <nav>
          <ul className="flex items-center font-light">
            <li>
              <NavLink
                className="rounded py-2 px-4 transition duration-100 hover:bg-purple-600"
                activeClassName="text-purple-100 underline"
                to={routes.feedings()}
              >
                Stillen
              </NavLink>
            </li>
            <li>
              <NavLink
                className="rounded py-2 px-4 transition duration-100 hover:bg-purple-600"
                activeClassName="text-purple-100 underline"
                to={routes.weights()}
              >
                Gewicht
              </NavLink>
            </li>
            <li>
              {isAuthenticated && (
                <Link to={routes.user()} className="py-2 px-4 text-purple-300">
                  {currentUser.name}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl rounded-b bg-white p-2 shadow md:p-12">
        {children}
      </main>
    </>
  )
}

export default MainLayout
