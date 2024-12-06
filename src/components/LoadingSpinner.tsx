import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <div className="absolute top-0 left-0 h-8 w-8 border-2 border-blue-200 rounded-full opacity-25"></div>
      </div>
      <span className="ml-3 text-gray-600 font-medium">Loading...</span>
    </div>
  )
}
