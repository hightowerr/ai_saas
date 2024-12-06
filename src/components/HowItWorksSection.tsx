'use client'

import Link from 'next/link'

export function HowItWorksSection() {
  const steps = [
    {
      title: 'Sign Up',
      description: 'Create your account in seconds',
      icon: '1️⃣'
    },
    {
      title: 'Configure',
      description: 'Set up your preferences and API keys',
      icon: '2️⃣'
    },
    {
      title: 'Start Using',
      description: 'Begin using our AI features immediately',
      icon: '3️⃣'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            How It Works
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start Using AI in Three Simple Steps
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get started with our platform quickly and easily
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="relative grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {step.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 text-center">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
