'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/Button'
import { supabase } from '../utils/supabase'
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js'

export function Navbar() {
  const [user, setUser] = useState<User | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null)
      }
    )

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">AI SaaS</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                href="/"
                className={`inline-flex items-center px-1 pt-1 ${
                  pathname === '/' 
                    ? 'border-b-2 border-blue-500 text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              {user && (
                <Link 
                  href="/dashboard"
                  className={`inline-flex items-center px-1 pt-1 ${
                    pathname === '/dashboard' 
                      ? 'border-b-2 border-blue-500 text-gray-900' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <Button onClick={handleSignOut} variant="outline">
                Sign Out
              </Button>
            ) : (
              <div className="flex space-x-4">
                <Link href="/login">
                  <Button variant="outline">Log In</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
