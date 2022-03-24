import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DiaperChangePage = () => {
  return (
    <>
      <MetaTags title="DiaperChange" description="DiaperChange page" />

      <h1>DiaperChangePage</h1>
      <p>
        Find me in <code>./web/src/pages/DiaperChangePage/DiaperChangePage.tsx</code>
      </p>
      <p>
        My default route is named <code>diaperChange</code>, link to me with `
        <Link to={routes.diaperChange()}>DiaperChange</Link>`
      </p>
    </>
  )
}

export default DiaperChangePage
