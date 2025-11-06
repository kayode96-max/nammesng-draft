import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const password = 'ChangeMe123!'
  const hash = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email: 'admin@nammes.org' },
    update: {},
    create: {
      name: 'NAMMES Admin',
      email: 'admin@nammes.org',
      passwordHash: hash,
      role: 'admin',
      isTempPassword: false,
    },
  })

  console.log('Seeded admin user:', user.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
