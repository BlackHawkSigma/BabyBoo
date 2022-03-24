import { render } from '@redwoodjs/testing/web'

import FeedingsPage from './FeedingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FeedingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedingsPage />)
    }).not.toThrow()
  })
})
