import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WeightPage = () => {
  return (
    <>
      <MetaTags title="Gewicht" description="Weight page" />

      <h1>Gewicht</h1>
      <p>
        Find me in <code>./web/src/pages/WeightPage/WeightPage.tsx</code>
      </p>
      <p>
        My default route is named <code>weight</code>, link to me with `
        <Link to={routes.weight()}>Weight</Link>`
      </p>
    </>
  )
}

export default WeightPage
