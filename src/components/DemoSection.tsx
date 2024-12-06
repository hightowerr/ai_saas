import React from 'react'
import Link from 'next/link'

export function DemoSection() {
  return (
    <section id="demo" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Still Not Convinced?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Try a demo of our service to experience its features firsthand and decide if it's right for you.
        </p>
        <Link href="/signup">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
            Try Demo
          </button>
        </Link>
      </div>
    </section>
  )
}
