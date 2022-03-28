import { render } from '@redwoodjs/testing/web'

import LatestFeeding from './LatestFeeding'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LatestFeeding', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LatestFeeding />)
    }).not.toThrow()
  })
})
