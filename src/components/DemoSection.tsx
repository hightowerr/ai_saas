'use client'

import React from 'react'
import Link from 'next/link'

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
