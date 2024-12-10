import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Session } from '@supabase/supabase-js'

interface NavbarProps {
  session: Session | null
}

export const Navbar: React.FC<NavbarProps> = ({ session }) => {
  return (
    <nav className="navbar navbar-expand-lg py-4 border-bottom">
      <div className="container d-flex align-items-center">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image 
            src="/robot.svg" 
            alt="SaasX Logo" 
            width={40} 
            height={40} 
            className="me-2" 
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
          <Link 
            href="/dashboard" 
            className="btn btn-primary rounded-2 px-4 py-2"
          >
            DASHBOARD
          </Link>
        ) : (
          <Link 
            href="/signup" 
            className="btn btn-primary rounded-2 px-4 py-2 text-uppercase"
          >
            GET QUOTE
          </Link>
        )}
      </div>
    </nav>
  )
}
