import { render } from '@redwoodjs/testing/web'

import WeightPage from './WeightPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WeightPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeightPage />)
    }).not.toThrow()
  })
})
