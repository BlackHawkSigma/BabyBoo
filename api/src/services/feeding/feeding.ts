import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const feedings = () => {
  return db.feeding.findMany({
    orderBy: {
      startTime: 'desc',
    },
  })
}

export const feeding = ({ id }: Prisma.FeedingWhereUniqueInput) => {
  return db.feeding.findUnique({
    where: { id },
  })
}

interface StartFeedingArgs {
  input: Prisma.FeedingCreateInput
}

export const startFeeding = ({ input }: StartFeedingArgs) => {
  return db.feeding.create({
    data: input,
  })
}

interface EndFeedingArgs extends Prisma.FeedingWhereUniqueInput {
  input: Prisma.FeedingUpdateInput
}

export const endFeeding = ({ id, input }: EndFeedingArgs) => {
  return db.feeding.update({
    data: input,
    where: { id },
  })
}

export const deleteFeeding = ({ id }: Prisma.FeedingWhereUniqueInput) => {
  return db.feeding.delete({
    where: { id },
  })
}
