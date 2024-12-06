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
