'use client'

import React, { useState } from 'react'

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('data-collection')
  const currentYear = new Date().getFullYear()
  const policyVersion = '2.0.1'

  const privacySections = [
    {
      id: 'data-collection',
      title: 'Data Collection Practices',
      content: [
        {
          subtitle: 'Types of Personal Data',
          details: [
            'Personal Identifiers: Full name, email address, phone number',
            'Account Credentials: Securely hashed authentication tokens',
            'Demographic Information: Professional role, location',
            'Usage Data: IP address, device information, interaction logs'
          ]
        },
        {
          subtitle: 'Collection Methods',
          details: [
            'Direct web form submissions',
            'Automated tracking technologies',
            'Third-party authentication services',
            'Platform interaction analytics'
          ]
        }
      ]
    },
    {
      id: 'data-usage',
      title: 'Data Usage and Processing',
      content: [
        {
          subtitle: 'Processing Activities',
          details: [
            'User authentication and account management',
            'Service personalization',
            'Performance and usage analytics',
            'Customer support and communication'
          ]
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8 text-center">
        <p className="text-sm text-gray-600">
          Last Updated: {new Date().toLocaleDateString('en-US', { 
            month: '2-digit', 
            day: '2-digit', 
            year: 'numeric' 
          })} | Version {policyVersion}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {privacySections.map((section) => (
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
          {privacySections
            .find(section => section.id === activeSection)?.content.map((block, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {block.subtitle}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {block.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}

      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Our Privacy Team</h2>
        <p className="mb-4">
          For any privacy-related inquiries, please contact us at:
        </p>
        <div className="space-y-2">
          <p>📧 privacy@aitech.com</p>
          <p>📞 +1 (415) 555-PRIVACY</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {currentYear} AI SaaS. All privacy rights reserved.
      </div>
    </div>
  )
}
