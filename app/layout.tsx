import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Showcar',
  description: 'Car Showcase Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang = "en">
      <body className = {`${poppins.className} relative`}>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
