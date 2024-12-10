'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Session } from '@supabase/supabase-js'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

interface NavbarProps {
  session: Session | null
}

export const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <nav className="navbar navbar-expand-lg py-4 border-bottom" data-testid="navbar">
      <div className="container d-flex align-items-center">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src="/robot.svg" 
            alt="SaasX Logo" 
            width={40} 
            height={40} 
            className="me-2" 
            data-testid="navbar-logo"
          />
          <span className="fw-bold" style={{ fontFamily: 'sans-serif' }}>SaasX</span>
        </Link>
        <div className="navbar-nav mx-auto d-flex gap-4">
          <Link href="/" className="nav-item nav-link text-uppercase text-[#4457F2] hover:text-[#3346C1] transition-colors">HOME</Link>
          <Link href="/features" className="nav-item nav-link text-uppercase hover:text-[#4457F2] transition-colors">FEATURES</Link>
          <Link href="/pricing" className="nav-item nav-link text-uppercase hover:text-[#4457F2] transition-colors">PRICING</Link>
          <Link href="/about" className="nav-item nav-link text-uppercase hover:text-[#4457F2] transition-colors">ABOUT</Link>
        </div>
        {session ? (
          <div className="d-flex align-items-center gap-3">
            <Link 
              href="/dashboard" 
              className="btn btn-outline-primary rounded-2 px-4 py-2"
              data-testid="dashboard-button"
            >
              DASHBOARD
            </Link>
            <button 
              onClick={handleSignOut} 
              className="btn btn-primary rounded-2 px-4 py-2"
              data-testid="signout-button"
            >
              SIGN OUT
            </button>
          </div>
        ) : (
          <div className="d-flex align-items-center gap-3">
            <Link 
              href="/signup" 
              className="btn btn-primary bg-[#4457F2] rounded-[6px] px-4 py-2 hover:bg-[#3346C1] transition-colors"
              data-testid="signup-button"
            >
              GET QUOTE
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
