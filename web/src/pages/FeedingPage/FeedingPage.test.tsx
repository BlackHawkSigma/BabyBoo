import { render } from '@redwoodjs/testing/web'

import FeedingPage from './FeedingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FeedingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedingPage id={42} />)
    }).not.toThrow()
  })
})
