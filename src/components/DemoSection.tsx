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
export function DemoSection() {
  return (
    <section id="demo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Demo
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See It In Action
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Watch how our AI platform can transform your workflow
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl bg-gray-100 rounded-xl p-8 text-center">
          <p className="text-gray-600">Demo video coming soon!</p>
        </div>
      </div>
    </section>
  )
}
