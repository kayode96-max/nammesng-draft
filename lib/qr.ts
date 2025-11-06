import QRCode from 'qrcode'

export async function generateQRCode(data: string): Promise<string> {
  try {
    const qr = await QRCode.toDataURL(data, {
      width: 200,
      margin: 1,
    })
    return qr
  } catch (err) {
    console.error('QR generation failed:', err)
    return ''
  }
}
