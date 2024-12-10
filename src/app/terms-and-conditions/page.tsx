'use client'

import React, { useState } from 'react'

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState<string>('service-terms')
  const currentYear = new Date().getFullYear()
  const termsVersion = '2.0.0'

  const termsSections = [
    {
      id: 'service-terms',
      title: 'Service Usage Terms',
      content: [
        {
          subtitle: 'Platform Access',
          details: [
            'Users must create a valid account to access services',
            'Accounts are non-transferable and subject to verification',
            'Prohibited from sharing login credentials',
            'Must comply with platform usage guidelines'
          ]
        },
        {
          subtitle: 'Service Limitations',
          details: [
            'Services provided on an "as-is" basis',
            'No guaranteed uptime or performance metrics',
            'Reserved right to modify or discontinue services',
            'Pricing subject to change with 30-day notice'
          ]
        }
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      content: [
        {
          subtitle: 'Acceptable Use',
          details: [
            'Comply with all applicable laws and regulations',
            'Protect account credentials',
            'Use services for lawful purposes only',
            'Not engage in harmful or malicious activities'
          ]
        },
        {
          subtitle: 'Content Ownership',
          details: [
            'Users retain ownership of their generated content',
            'Grant platform a license to process and store content',
            'Responsible for content legality and accuracy',
            'Platform not liable for user-generated content'
          ]
        }
      ]
    },
    {
      id: 'liability',
      title: 'Liability Limitations',
      content: [
        {
          subtitle: 'Disclaimer',
          details: [
            'No warranty for uninterrupted or error-free service',
            'Maximum liability limited to service fees',
            'Not responsible for indirect or consequential damages',
            'No liability for data loss or business interruption'
          ]
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8 text-center">
        <p className="text-sm text-gray-600">
          Last Updated: {new Date().toLocaleDateString('en-US', { 
            month: '2-digit', 
            day: '2-digit', 
            year: 'numeric' 
          })} | Version {termsVersion}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {termsSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`
              px-4 py-2 rounded-md transition-all duration-300
              ${activeSection === section.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}
            `}
          >
            {section.title}
          </button>
        ))}
      </div>

      {activeSection && (
        <div className="bg-white shadow-lg rounded-lg p-6 animate-fade-in">
          {termsSections
            .find(section => section.id === activeSection)?.content.map((block, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {block.subtitle}
                </h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  {block.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ol>
              </div>
            ))}
        </div>
      )}

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Our Legal Team</h2>
        <p className="mb-4">
          For any legal inquiries or clarifications, please contact us at:
        </p>
        <div className="space-y-2">
          <p>📧 legal@aitech.com</p>
          <p>📞 +1 (415) 555-LEGAL</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {currentYear} AI SaaS. All rights reserved.
      </div>
    </div>
  )
}
