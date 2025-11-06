import { saveFileLocal } from './storage'
import { generateQRCode } from './qr'

export async function generateCertificatePdf({ certificateId, fullName }: { certificateId: string; fullName: string }) {
  // Placeholder PDF generator: writes a simple HTML file with QR code
  // Replace with Puppeteer HTML -> PDF generation in real implementation
  const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/certificates/verify/${certificateId}`
  const qrDataUrl = await generateQRCode(verifyUrl)

  const filename = `certificate-${certificateId.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Certificate ${certificateId}</title>
  <style>
    body { font-family: Arial; text-align: center; padding: 50px; }
    .cert { border: 3px solid #003366; padding: 40px; max-width: 600px; margin: auto; }
    h1 { color: #003366; }
  </style>
</head>
<body>
  <div class="cert">
    <h1>NAMMES Certificate</h1>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Certificate ID:</strong> ${certificateId}</p>
    <p><strong>Issued:</strong> ${new Date().toISOString().split('T')[0]}</p>
    <div style="margin-top: 20px;">
      ${qrDataUrl ? `<img src="${qrDataUrl}" alt="QR Code" />` : ''}
      <p style="font-size: 12px;">Scan to verify</p>
    </div>
  </div>
</body>
</html>
  `
  
  // For now save as .html (replace with Puppeteer PDF rendering)
  const buffer = Buffer.from(htmlContent, 'utf-8')
  const saved = await saveFileLocal(filename.replace('.pdf', '.html'), buffer)
  return saved
}
