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
          <Link href="/" className="nav-item nav-link text-uppercase text-primary">HOME</Link>
          <Link href="/features" className="nav-item nav-link text-uppercase">FEATURES</Link>
          <Link href="/pricing" className="nav-item nav-link text-uppercase">PRICING</Link>
          <Link href="/about" className="nav-item nav-link text-uppercase">ABOUT</Link>
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
              href="/login" 
              className="btn btn-outline-primary rounded-2 px-4 py-2"
              data-testid="login-button"
            >
              LOG IN
            </Link>
            <Link 
              href="/signup" 
              className="btn btn-primary rounded-2 px-4 py-2"
              data-testid="signup-button"
            >
              SIGN UP
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
