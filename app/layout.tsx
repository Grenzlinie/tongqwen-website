// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'

export const metadata: Metadata = {
  title: 'Your Name - Personal Academic Website',
  description: 'Personal academic website showcasing research, publications and collaborations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}