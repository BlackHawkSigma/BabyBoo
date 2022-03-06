import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WeightPage = () => {
  return (
    <>
      <MetaTags title="Weight" description="Weight page" />

      <h1>WeightPage</h1>
      <p>
        Find me in <code>./web/src/pages/WeightPage/WeightPage.js</code>
      </p>
      <p>
        My default route is named <code>weight</code>, link to me with `
        <Link to={routes.weight()}>Weight</Link>`
      </p>
    </>
  )
}

export default WeightPage
