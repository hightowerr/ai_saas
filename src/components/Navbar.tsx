'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/Button'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../utils/supabase'

interface NavbarProps {
  session: Session | null
}

export function Navbar({ session }: NavbarProps) {
  const pathname = usePathname()
  const user = session?.user

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-primary-DEFAULT font-brand hover:text-primary-dark transition-colors duration-200">
                <span className="text-sm mr-1">🤖</span>AI Saas
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-[32px]">
              <Link
                href="/"
                aria-current={pathname === '/' ? 'page' : undefined}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                  ${pathname === '/' 
                    ? 'border-primary-DEFAULT text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } 
                  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT`}
              >
                Home
              </Link>
              {pathname === '/' && (
                <>
                  <Link
                    href="/#how-it-works"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/#features"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                  >
                    Features
                  </Link>
                  <Link
                    href="/#pricing"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/#faqs"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/#demo"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors duration-200"
                  >
                    Demo
                  </Link>
                </>
              )}
              {user && (
                <Link
                  href="/dashboard"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === '/dashboard'
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } transition-colors duration-200`}
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <Button 
                onClick={handleSignOut} 
                variant="outline"
                className="ml-4 px-4 py-2 text-sm font-medium"
              >
                Sign Out
              </Button>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button 
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    className="px-4 py-2 text-sm font-medium"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
