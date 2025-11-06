import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { nanoid } from 'nanoid'
import { generateCertificatePdf } from '@/lib/pdf'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  if (!body || !body.name || !body.email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Check if user already exists
  let user = await prisma.user.findUnique({ where: { email: body.email } })

  const tempPassword = nanoid(12)
  const hash = await bcrypt.hash(tempPassword, 10)

  if (!user) {
    user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        institution: body.institution || null,
        passwordHash: hash,
        isTempPassword: true,
      },
    })
  }

  // Generate unique certificate ID
  const year = new Date().getFullYear()
  const count = await prisma.certificate.count()
  const certId = `NAMMES/${year}/${String(count + 1).padStart(4, '0')}`

  // Generate PDF (placeholder)
  const pdfPath = await generateCertificatePdf({ certificateId: certId, fullName: body.name })

  // Create certificate record
  const cert = await prisma.certificate.create({
    data: {
      certificateId: certId,
      userId: user.id,
      fullName: body.name,
      pdfUrl: pdfPath,
      signedUrlExpiry: 48,
      qrCodeData: `${process.env.NEXT_PUBLIC_APP_URL}/api/certificates/verify/${certId}`,
    },
  })

  // Update user with certificate ID
  await prisma.user.update({
    where: { id: user.id },
    data: { certificateId: certId },
  })

  // In real app: send email with certificate + credentials
  // For now return credentials in response (dev only)
  return NextResponse.json({
    ok: true,
    certificateId: certId,
    tempPassword,
    message: 'Registration successful. Check your email for credentials.',
  })
}
