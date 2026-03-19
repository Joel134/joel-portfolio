import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Joel John — Mobile Developer & Fintech Engineer',
  description: 'Flutter & iOS specialist. 5+ years building mobile apps across 5 countries. Fintech | Payments | System Design.',
  openGraph: {
    title: 'Joel John — Mobile Developer',
    description: 'Mobile Developer & Fintech Engineer specializing in Flutter and iOS',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#080810] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
