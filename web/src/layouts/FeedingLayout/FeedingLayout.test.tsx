import { render } from '@redwoodjs/testing/web'

import FeedingLayout from './FeedingLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FeedingLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedingLayout />)
    }).not.toThrow()
  })
})
