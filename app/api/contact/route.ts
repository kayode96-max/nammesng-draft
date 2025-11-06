import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  await prisma.contactMessage.create({
    data: {
      name: body.name,
      email: body.email,
      subject: body.subject || 'Contact Form',
      message: body.message,
    },
  })

  return NextResponse.json({ ok: true })
}
