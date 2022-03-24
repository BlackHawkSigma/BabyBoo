import { render } from '@redwoodjs/testing/web'

import Feeding from './Feeding'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Feeding', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Feeding />)
    }).not.toThrow()
  })
})
