'use client'

import React, { useState } from 'react'

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
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
    // ... (rest of the code remains the same)
  ]

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-8 text-center">
        <p className="text-sm text-gray-600">
          Last Updated: {new Date().toLocaleDateString()} | Version {policyVersion}
        </p>
      </div>

      {/* ... (rest of the JSX remains the same) */}
    </div>
  )
}
