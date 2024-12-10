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
    primary: 'bg-[#4169E1] text-white hover:bg-[#3A5DCE] focus:ring-blue-600',
    secondary: 'border-2 border-[#4169E1] text-[#4169E1] hover:bg-blue-50 focus:ring-blue-600',
    outline: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500'
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
