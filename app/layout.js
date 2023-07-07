import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'xsaatu',
  description: 'Portfolio Xsaatu use Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'> 
    <Script type="module" src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.esm.js" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
