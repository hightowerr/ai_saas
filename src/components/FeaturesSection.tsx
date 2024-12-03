export function FeaturesSection() {
  const features = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and generation capabilities powered by state-of-the-art language models.',
      icon: '🤖'
    },
    {
      title: 'Image Recognition',
      description: 'Powerful image analysis and processing features for automated visual content understanding.',
      icon: '🖼️'
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analysis tools with AI-driven insights and predictions.',
      icon: '📊'
    },
    {
      title: 'Automation Tools',
      description: 'Streamline your workflow with intelligent automation features and integrations.',
      icon: '⚡'
    }
  ]

  return (
    <div id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale your AI operations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides cutting-edge AI capabilities designed to enhance your business processes
            and drive innovation.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-3xl">{feature.icon}</span>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
