import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const data: Prisma.UserCreateArgs['data'][] = [
      {
        id: 1,
        email: 'admin@admin.com',
        name: 'admin',
        hashedPassword:
          'ad9563042fe9f154419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
        salt: '1c99de412b219e9abf4665293211adce',
      },
    ]

    console.info('')
    console.info('  Seeded admin user:')
    console.info('')
    console.info('    Email: admin@admin.com')
    console.info('    Password: admin')
    console.info('')
    console.info(`  (Please don't use this login in a production environment)`)
    console.info('')

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.UserCreateArgs['data']) => {
        const record = await db.user.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
