import { render } from '@redwoodjs/testing/web'

import StartFeedingPage from './StartFeedingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StartFeedingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartFeedingPage />)
    }).not.toThrow()
  })
})
