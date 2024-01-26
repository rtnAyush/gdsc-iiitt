import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from '@/components/theme-provider'

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
    title: 'IIIT-T GDSC',
    description: 'IIIT-T GDSC is a student developer community at IIIT Trichy. We are a group of students who are passionate about technology and are willing to learn and share our knowledge with others. We conduct workshops, webinars, and other events to help students learn new technologies and build projects.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen">
                        <NavBar />
                        <Toaster position='top-right' />
                        <main className="flex-1 overflow-hidden">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
