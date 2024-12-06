import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import SupabaseProvider from '../components/providers/SupabaseProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI SaaS Platform',
  description: 'Modern AI-powered SaaS platform with multiple features',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  try {
    const supabase = createServerComponentClient({ cookies })
    const {
      data: { session },
    } = await supabase.auth.getSession()

    return (
      <html lang="en" className="h-full">
        <body className={`${inter.className} h-full antialiased`}>
          <SupabaseProvider session={session}>
            <div className="min-h-screen flex flex-col">
              <Navbar session={session} />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </SupabaseProvider>
        </body>
      </html>
    )
  } catch (error) {
    console.error('Error in RootLayout:', error)
    // Fallback layout without Supabase features
    return (
      <html lang="en" className="h-full">
        <body className={`${inter.className} h-full antialiased`}>
          <div className="min-h-screen flex flex-col">
            <Navbar session={null} />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    )
  }
}
