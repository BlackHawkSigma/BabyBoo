import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const weights = () => {
  return db.weight.findMany()
}

export const weight = ({ id }: Prisma.WeightWhereUniqueInput) => {
  return db.weight.findUnique({
    where: { id },
  })
}

interface CreateWeightArgs {
  input: Prisma.WeightCreateInput
}

export const createWeight = ({ input }: CreateWeightArgs) => {
  return db.weight.create({
    data: input,
  })
}

interface UpdateWeightArgs extends Prisma.WeightWhereUniqueInput {
  input: Prisma.WeightUpdateInput
}

export const updateWeight = ({ id, input }: UpdateWeightArgs) => {
  return db.weight.update({
    data: input,
    where: { id },
  })
}

export const deleteWeight = ({ id }: Prisma.WeightWhereUniqueInput) => {
  return db.weight.delete({
    where: { id },
  })
}
