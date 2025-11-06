import fs from 'fs'
import path from 'path'

const UPLOADS = process.env.STORAGE_PATH || path.resolve(process.cwd(), 'uploads')

export async function ensureUploads() {
  if (!fs.existsSync(UPLOADS)) fs.mkdirSync(UPLOADS, { recursive: true })
}

export async function saveFileLocal(filename: string, buffer: Buffer) {
  await ensureUploads()
  const dest = path.join(UPLOADS, filename)
  await fs.promises.writeFile(dest, buffer)
  return dest
}

export function getLocalFileUrl(filename: string) {
  // For local dev we can expose files via a static server or Next.js route
  return `/uploads/${filename}`
}
