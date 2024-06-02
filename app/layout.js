import { Archivo } from 'next/font/google'
import { Eczar } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})
const eczar = Eczar({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eczar',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.variable + ' ' + eczar.variable}>
        {children}
      </body>
    </html>
  )
}