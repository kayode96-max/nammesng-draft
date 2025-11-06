import '../styles/globals.css'
import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'NAMMES Portal',
  description: 'NAMMES National Web Portal - Landing and Member Portal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const s = localStorage.getItem('theme'); const m = window.matchMedia('(prefers-color-scheme: dark)').matches; if (s === 'dark' || (!s && m)) document.documentElement.classList.add('dark'); } catch (e) {} })();`,
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
