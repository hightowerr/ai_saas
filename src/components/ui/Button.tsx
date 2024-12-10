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
    hover:shadow-md active:shadow-sm
    opacity-100 visible
  `
  
  const variants = {
    primary: 'bg-[#4457F2] text-white hover:bg-blue-800 focus:ring-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border-2 border-[#4457F2] text-[#4457F2] hover:bg-blue-50 focus:ring-blue-600'
  }

  const sizeStyles = 'px-4 py-2 text-sm min-h-[48px]'

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
