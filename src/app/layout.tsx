import type { Metadata } from 'next'

import '../styles/global.css';

export const metadata: Metadata = {
  title: 'Digital Frontend',
  description: 'Digital Internet Banking Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/assets/images/logo.svg' />
      </head>
      <body>{children}</body>
    </html>
  )
}
