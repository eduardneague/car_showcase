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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body className = {`${poppins.className} relative`}>
        <NavBar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
