'use client'

import React, { useState } from 'react'

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
