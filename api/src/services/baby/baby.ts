import { db } from 'src/lib/db'

export const baby = () => {
  return db.baby.findFirst()
}
