import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { CartProvider } from '@/lib/store'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Swiserve - Premium Global eCommerce',
  description: 'Swiserve is a United States-based global eCommerce company delivering premium-quality products at competitive prices. Shop electronics, smart gadgets, home & kitchen, and more.',
  keywords: ['ecommerce', 'online shopping', 'premium products', 'electronics', 'smart gadgets', 'home kitchen', 'Swiserve'],
  authors: [{ name: 'Swiserve' }],
  creator: 'Swiserve',
  publisher: 'Swiserve',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swiserve.com',
    siteName: 'Swiserve',
    title: 'Swiserve - Premium Global eCommerce',
    description: 'Shop premium-quality products at competitive prices. Worldwide delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiserve - Premium Global eCommerce',
    description: 'Shop premium-quality products at competitive prices. Worldwide delivery.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#f5f0e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        <CartProvider>
          {children}
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
