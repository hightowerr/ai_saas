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
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <FAQsSection />
        <DemoSection />
      </div>
    </div>
  )
}
