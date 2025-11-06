import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, PT_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-headline",
})

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "NAMMES NG - Materials Science Portal",
  description: "Join Nigeria's premier network of materials science and engineering professionals",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ptSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
