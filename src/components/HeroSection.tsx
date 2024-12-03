import Link from 'next/link'
import { Button } from './ui/Button'

export function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Workflow with AI-Powered Solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Harness the power of artificial intelligence to streamline your tasks, boost productivity, 
            and unlock new possibilities for your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
            <Link href="#features">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
