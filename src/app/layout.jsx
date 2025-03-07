import { Inter } from 'next/font/google'
import '../resources/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shortener',
  icons: [{ rel: 'icon', url: '../../public/favicon.ico' }],
  description: 'URL shortener with next.js'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
