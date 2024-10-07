import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'hairandarduft',
  description: 'Fresh bread daily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex min-h-screen flex-col">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
