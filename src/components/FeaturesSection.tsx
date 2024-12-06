'use client'

export function FeaturesSection() {
  const features = [
    {
      title: 'AI-Powered Automation',
      description:
        'Leverage cutting-edge artificial intelligence to automate repetitive tasks and streamline your workflow.',
      icon: '🤖',
    },
    {
      title: 'Advanced Security',
      description:
        'Enterprise-grade security with end-to-end encryption ensures your data remains protected at all times.',
      icon: '🔒',
    },
    {
      title: 'Real-time Analytics',
      description:
        'Get instant insights with our real-time analytics dashboard, helping you make data-driven decisions.',
      icon: '📊',
    },
    {
      title: 'Smart Integration',
      description:
        'Seamlessly integrate with your existing tools and workflows through our extensive API support.',
      icon: '🔄',
    },
    {
      title: 'Privacy First',
      description:
        'Your data privacy is our priority. We follow strict data protection guidelines and give you full control.',
      icon: '🛡️',
    },
    {
      title: '24/7 Support',
      description:
        'Access our dedicated support team around the clock to help you resolve any issues quickly.',
      icon: '💬',
    },
  ]

  return (
    <section id="features" className="py-24 sm:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform combines powerful features with an intuitive interface to help you achieve more with less effort.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="flex flex-col items-start bg-white p-10 rounded-2xl shadow-md 
                         hover:shadow-xl hover:scale-105 hover:bg-blue-50/30
                         transform transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-xl mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
