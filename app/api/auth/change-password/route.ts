import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  if (!body || !body.userId || !body.newPassword) {
    return NextResponse.json({ error: 'Missing userId or newPassword' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { id: body.userId } })
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  const hash = await bcrypt.hash(body.newPassword, 10)
  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash: hash, isTempPassword: false },
  })

  return NextResponse.json({ ok: true })
}
