import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Internationalizing Scholarship in Turkish',
  description: 'Collection and translation of a given set of informative articles in Turkish.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
      {children}
      <Analytics />
      </body>
    </html>
  )
}
