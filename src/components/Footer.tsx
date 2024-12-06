import React from 'react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <span className="text-2xl font-bold">AI SaaS</span>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link href="/about-us">
              <span className="hover:text-gray-400">About Us</span>
            </Link>
            <Link href="/privacy-policy">
              <span className="hover:text-gray-400">Privacy Policy</span>
            </Link>
            <Link href="/terms-and-conditions">
              <span className="hover:text-gray-400">Terms and Conditions</span>
            </Link>
          </div>
          {/* Social Media Links */}
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                {/* Facebook Icon */}
                <svg className="h-6 w-6 fill-current hover:text-gray-400" viewBox="0 0 24 24">
                  <path d="M22 12...Z" />
                </svg>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                {/* Twitter Icon */}
                <svg className="h-6 w-6 fill-current hover:text-gray-400" viewBox="0 0 24 24">
                  <path d="M22 4...Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                {/* LinkedIn Icon */}
                <svg className="h-6 w-6 fill-current hover:text-gray-400" viewBox="0 0 24 24">
                  <path d="M20 20...Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AI SaaS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
