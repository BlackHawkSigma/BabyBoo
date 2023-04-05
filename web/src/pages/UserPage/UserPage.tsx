import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const UserPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags title="User" description="User page" />

      <h1>Hallo {currentUser?.name}</h1>

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
    </>
  )
}

export default UserPage
