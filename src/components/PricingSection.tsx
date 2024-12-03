import Link from 'next/link'
import { Button } from './ui/Button'

export function PricingSection() {
  const tiers = [
    {
      name: 'Starter',
      price: '$29',
      description: 'Perfect for individuals and small projects',
      features: [
        '1,000 API calls per month',
        'Basic NLP features',
        'Standard support',
        'API access',
        '1 project'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 API calls per month',
        'Advanced NLP features',
        'Priority support',
        'API access',
        'Unlimited projects',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale operations',
      features: [
        'Unlimited API calls',
        'Full feature access',
        '24/7 dedicated support',
        'Custom API endpoints',
        'Unlimited projects',
        'Advanced analytics',
        'SLA guarantee'
      ]
    }
  ]

  return (
    <div id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your needs. All plans include core AI features.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== 'Custom' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  )}
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-blue-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/signup" className="mt-8">
                <Button variant={tier.name === 'Professional' ? 'primary' : 'outline'} className="w-full">
                  {tier.price === 'Custom' ? 'Contact sales' : 'Get started'}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
