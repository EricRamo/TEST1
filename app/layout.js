import { Archivo } from 'next/font/google'
import { Eczar } from 'next/font/google'
import './globals.css'
import Link from "next/link"

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
        <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
          <Link href="/home" className="text-xl font-bold" prefetch={false}>
            Ramos Core
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/Support" className="hover:underline" prefetch={false}>
              Customer Support
            </Link>
            <Link href="/Offers" className="hover:underline" prefetch={false}>
              Offers
            </Link>
            <Link href="/Cart" className="hover:underline" prefetch={false}>
              Cart
            </Link>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-4 px-6 md:px-10">
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm">&copy; Ramos Core </p>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                Privacy
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Terms
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  )
}