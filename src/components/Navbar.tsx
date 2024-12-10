import React from 'react'
import Link from 'next/link'
import { Session } from '@supabase/supabase-js'

interface NavbarProps {
  session: Session | null
}

export const Navbar: React.FC<NavbarProps> = ({ session }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand">
          AI SaaS Platform
        </Link>
        <div className="navbar-nav ms-auto">
          {session ? (
            <Link href="/dashboard" className="nav-item nav-link">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="nav-item nav-link">
                Login
              </Link>
              <Link href="/signup" className="nav-item nav-link">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
