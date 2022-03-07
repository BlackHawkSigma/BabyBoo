import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="flex items-center justify-between bg-purple-400 py-4 px-8 text-white">
        <h1 className="text-2xl tracking-tight">
          <Link
            className="text-purple-900 transition duration-100 hover:text-purple-200"
            to={routes.home()}
          >
            Home
          </Link>
        </h1>
        <nav>
          <ul className="flex items-center font-light">
            <li>
              <Link
                className="rounded py-2 px-4 transition duration-100 hover:bg-purple-600"
                to={routes.weight()}
              >
                Gewicht
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button type="button" onClick={logOut} className="py-2 px-4">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()} className="py-2 px-4">
                  Login
                </Link>
              )}
            </li>
            <li>
              {isAuthenticated && (
                <div className="text-xs text-purple-300">
                  {currentUser.name}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl rounded-b bg-white p-12 shadow">
        {children}
      </main>
    </>
  )
}

export default MainLayout
