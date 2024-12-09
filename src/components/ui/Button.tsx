'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  children: ReactNode
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center rounded-md font-semibold 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:-translate-y-0.5 active:translate-y-0
    hover:shadow-md active:shadow-sm
  `
  
  const variants = {
    primary: 'bg-primary-DEFAULT text-white hover:bg-primary-dark focus:ring-primary-DEFAULT',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border-2 border-primary-DEFAULT text-primary-DEFAULT hover:bg-blue-50 focus:ring-primary-DEFAULT'
  }

  const sizeStyles = 'px-4 py-2 text-sm'

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
