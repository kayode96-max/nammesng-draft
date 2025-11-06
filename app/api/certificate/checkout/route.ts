import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { nanoid } from 'nanoid'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  if (!body || !body.email || !body.amount) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Create mock payment record
  const providerPaymentId = `MOCK_${nanoid()}`
  const payment = await prisma.payment.create({
    data: {
      provider: 'mock',
      providerPaymentId,
      amount: body.amount,
      currency: body.currency || 'NGN',
      status: 'pending',
      metadata: JSON.stringify({ email: body.email, name: body.name }),
    },
  })

  // In real flow: redirect to payment provider checkout page
  // For mock: simulate immediate success
  return NextResponse.json({
    ok: true,
    paymentId: payment.id,
    providerPaymentId,
    checkoutUrl: `/certificate/checkout/mock?paymentId=${providerPaymentId}`,
  })
}
