'use client'

import { HeroSection } from '../components/HeroSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { PricingSection } from '../components/PricingSection'
import { FAQsSection } from '../components/FAQsSection'
import { DemoSection } from '../components/DemoSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        {/* Main content */}
        <div className="space-y-1">
          {/* Hero section with gradient background */}
          <section className="relative z-10">
            <HeroSection />
          </section>

          {/* How It Works section */}
          <section className="relative z-20">
            <HowItWorksSection />
          </section>

          {/* Features section */}
          <section className="relative z-20">
            <FeaturesSection />
          </section>

          {/* Pricing section */}
          <section className="relative z-20">
            <PricingSection />
          </section>

          {/* FAQs section */}
          <section className="relative z-20">
            <FAQsSection />
          </section>

          {/* Demo section */}
          <section className="relative z-20">
            <DemoSection />
          </section>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
