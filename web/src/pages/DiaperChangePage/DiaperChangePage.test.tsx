import { render } from '@redwoodjs/testing/web'

import DiaperChangePage from './DiaperChangePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DiaperChangePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DiaperChangePage />)
    }).not.toThrow()
  })
})
