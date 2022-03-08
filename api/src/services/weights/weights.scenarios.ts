import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WeightCreateArgs>({
  weight: {
    one: { data: { value: 9487346.23809267 } },
    two: { data: { value: 627260.0626041936 } },
  },
})

export type StandardScenario = typeof standard
