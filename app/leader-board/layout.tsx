import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "400", "700"] })

export const metadata: Metadata = {
  title: 'IIIT-T GDSC JAMS',
  description: 'A website to see GCP-JAMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <Toaster position='top-right' />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
