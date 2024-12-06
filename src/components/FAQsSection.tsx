                       import React, { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

export function FAQsSection() {
  const faqs: FAQ[] = [
    {
      question: 'What is a SaaS product?',
      answer:
        'SaaS (Software as a Service) is a software distribution model where applications are hosted by a service provider and made available to customers over the internet.',
    },
    {
      question: 'How secure is my data with a SaaS product?',
      answer:
        'Your data is typically secured through encryption, access control, and regular security audits. Our platform prioritizes data security to protect your information.',
    },
    {
      question: 'Can I access the service from any device?',
      answer:
        'Yes, as long as you have internet access, you can log in to our service from any compatible device, including desktops, laptops, tablets, and smartphones.',
    },
    {
      question: 'What kind of customer support is available?',
      answer:
        'We offer various support channels, including email, live chat, and a comprehensive knowledge base to assist you with any questions or issues.',
    },
    {
      question: 'Can I upgrade or downgrade my plan at any time?',
      answer:
        'Yes, you can change your subscription plan at any time to suit your needs. The changes will take effect immediately.',
    },
  ]

  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export function FAQsSection() {
  const faqs = [
    {
      question: 'What is AI SaaS?',
      answer: 'AI SaaS is a software-as-a-service platform that provides artificial intelligence capabilities through an easy-to-use interface.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply sign up for an account, choose your plan, and you can start using our AI features immediately.'
    },
    {
      question: 'What are the pricing options?',
      answer: 'We offer flexible pricing plans starting from $29/month. Check our pricing section for detailed information.'
    }
  ]

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            FAQs
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-gray-200 pb-8">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
