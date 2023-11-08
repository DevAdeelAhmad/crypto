import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import { Montserrat } from 'next/font/google'
import ScrollToTop from '@/components/commons/ScrollToTop'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoSale- The Launchpad Platform for Everyone!',
  description: 'CryptoSale is a simple launchpad platform for crypto coins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en" >
      <body className={montserrat.className}>
        <ScrollToTop />
        {children}
      </body>
    </ html>
  )
}
