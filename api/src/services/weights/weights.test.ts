import {
  weights,
  weight,
  createWeight,
  updateWeight,
  deleteWeight,
} from './weights'
import type { StandardScenario } from './weights.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('weights', () => {
  scenario('returns all weights', async (scenario: StandardScenario) => {
    const result = await weights()

    expect(result.length).toEqual(Object.keys(scenario.weight).length)
  })

  scenario('returns a single weight', async (scenario: StandardScenario) => {
    const result = await weight({ id: scenario.weight.one.id })

    expect(result).toEqual(scenario.weight.one)
  })

  scenario('creates a weight', async () => {
    const result = await createWeight({
      input: { value: 1752835.4142598412 },
    })

    expect(result.value).toEqual(1752835.4142598412)
  })

  scenario('updates a weight', async (scenario: StandardScenario) => {
    const original = await weight({ id: scenario.weight.one.id })
    const result = await updateWeight({
      id: original.id,
      input: { value: 272834.0031014498 },
    })

    expect(result.value).toEqual(272834.0031014498)
  })

  scenario('deletes a weight', async (scenario: StandardScenario) => {
    const original = await deleteWeight({ id: scenario.weight.one.id })
    const result = await weight({ id: original.id })

    expect(result).toEqual(null)
  })
})
