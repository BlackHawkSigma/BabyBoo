import { render } from '@redwoodjs/testing/web'

import NewFeedingForm from './NewFeedingForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewFeedingForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewFeedingForm />)
    }).not.toThrow()
  })
})
