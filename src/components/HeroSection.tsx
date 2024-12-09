'use client'

import Link from 'next/link'
import { Button } from './ui/Button'

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Enhanced background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 lg:w-[60%]">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Workflow with AI-Powered Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Harness the power of artificial intelligence to streamline your tasks, boost productivity, 
            and unlock new possibilities for your business.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/signup">
              <Button className="text-base px-12 py-5 shadow-lg hover:shadow-2xl transform transition hover:-translate-y-1 hover:bg-blue-800 hover:scale-105">
                Get Started
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" className="text-base px-10 py-4 hover:bg-blue-50 hover:border-blue-700">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* AI Illustration */}
        <div className="hidden lg:block lg:w-[40%] relative">
          <div 
            className="w-full h-full bg-blue-50 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(65,105,225,0.1) 0%, rgba(65,105,225,0.2) 100%)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/robot.svg" 
                alt="AI Workflow Illustration" 
                className="w-3/4 h-3/4 object-contain animate-subtle-float"
                style={{ maxWidth: '80%', maxHeight: '80%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-blue-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </div>
  )
}
