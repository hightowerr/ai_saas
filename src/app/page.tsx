'use client'

import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { PricingSection } from '@/components/PricingSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
      </div>
    </div>
  )
}
