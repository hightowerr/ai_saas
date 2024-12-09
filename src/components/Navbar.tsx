'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/Button'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../utils/supabase'
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from '@radix-ui/react-dialog'
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'
import { useState } from 'react'

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
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/robot.svg" 
                alt="AI SaaS Logo" 
                className="h-8 w-8 mr-2" 
              />
              <span className="text-xl font-bold text-primary-DEFAULT font-brand hover:text-primary-dark transition-colors duration-200">
                AI Saas
              </span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-[32px]">
              <Link
                href="/"
                aria-current={pathname === '/' ? 'page' : undefined}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium 
                  ${pathname === '/' 
                    ? 'text-primary-DEFAULT' 
                    : 'text-gray-500 hover:text-gray-700'
                  } 
                  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT`}
              >
                Home
              </Link>
              {pathname === '/' && (
                <>
                  <Link
                    href="/#how-it-works"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
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
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    pathname === '/dashboard'
                      ? 'text-primary-DEFAULT'
                      : 'text-gray-500 hover:text-gray-700'
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
                className="ml-4 px-4 py-2 text-sm font-medium hidden md:inline-flex"
              >
                Sign Out
              </Button>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="hidden md:inline-flex">
                  <Button 
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" className="hidden md:inline-flex">
                  <Button
                    className="px-4 py-2 text-sm font-medium"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
            
            {/* Mobile Menu */}
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  aria-label="Open Mobile Menu" 
                  className="md:hidden text-gray-600 hover:text-gray-900"
                >
                  <HamburgerMenuIcon className="h-6 w-6" />
                </button>
              </DialogTrigger>
              <DialogContent 
                className="fixed inset-0 z-50 bg-white p-6 md:hidden"
                aria-describedby="mobile-menu-description"
              >
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex-shrink-0 flex items-center">
                    <img 
                      src="/robot.svg" 
                      alt="AI SaaS Logo" 
                      className="h-8 w-8 mr-2" 
                    />
                    <span className="text-xl font-bold text-primary-DEFAULT font-brand hover:text-primary-dark transition-colors duration-200">
                      AI Saas
                    </span>
                  </Link>
                  <Dialog.Close asChild>
                    <button 
                      aria-label="Close Mobile Menu" 
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Cross1Icon className="h-6 w-6" />
                    </button>
                  </Dialog.Close>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/" 
                    className="text-lg font-medium text-gray-900 hover:text-primary-DEFAULT"
                  >
                    Home
                  </Link>
                  {pathname === '/' && (
                    <>
                      <Link 
                        href="/#how-it-works" 
                        className="text-lg font-medium text-gray-900 hover:text-primary-DEFAULT"
                      >
                        How It Works
                      </Link>
                      <Link 
                        href="/#features" 
                        className="text-lg font-medium text-gray-900 hover:text-primary-DEFAULT"
                      >
                        Features
                      </Link>
                      <Link 
                        href="/#pricing" 
                        className="text-lg font-medium text-gray-900 hover:text-primary-DEFAULT"
                      >
                        Pricing
                      </Link>
                      <Link 
                        href="/#faqs" 
                        className="text-lg font-medium text-gray-900 hover:text-primary-DEFAULT"
                      >
                        FAQs
                      </Link>
                      <Link 
                        href="/#demo" 
                        className="text-lg font-medium text-gray-900 hover:text-primary-DEFAULT"
                      >
                        Demo
                      </Link>
                    </>
                  )}
                  {user && (
                    <Link 
                      href="/dashboard" 
                      className="text-lg font-medium text-gray-900 hover:text-primary-DEFAULT"
                    >
                      Dashboard
                    </Link>
                  )}
                  
                  <div className="border-t pt-4 mt-4 space-y-4">
                    {user ? (
                      <Button 
                        onClick={handleSignOut} 
                        className="w-full"
                      >
                        Sign Out
                      </Button>
                    ) : (
                      <>
                        <Link href="/login" className="block">
                          <Button 
                            variant="outline" 
                            className="w-full"
                          >
                            Log In
                          </Button>
                        </Link>
                        <Link href="/signup" className="block">
                          <Button className="w-full">
                            Sign Up
                          </Button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  )
}
