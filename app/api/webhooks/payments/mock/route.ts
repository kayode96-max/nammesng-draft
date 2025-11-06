import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  // Expect { providerPaymentId, amount, currency, status, meta }
  if (!body || !body.providerPaymentId) {
    return NextResponse.json({ error: 'invalid payload' }, { status: 400 })
  }

  // Create or update payment record
  const payment = await prisma.payment.upsert({
    where: { providerPaymentId: body.providerPaymentId },
    create: {
      provider: 'mock',
      providerPaymentId: body.providerPaymentId,
      amount: body.amount || 0,
      currency: body.currency || 'NGN',
      status: body.status || 'completed',
      metadata: JSON.stringify(body.meta || {}),
    },
    update: {
      status: body.status || 'completed',
      metadata: JSON.stringify(body.meta || {}),
    },
  })

  // If payment completed, business logic should create certificate / user — placeholder
  if (payment.status === 'completed') {
    // In a real flow we'd look up session/pending registration to link user & certificate
    // TODO: implement certificate issuance handler
  }

  return NextResponse.json({ ok: true, paymentId: payment.id })
}
