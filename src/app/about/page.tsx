'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Company History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Founded in 2022, AI SaaS began with a simple mission: to democratize artificial intelligence 
              and make powerful AI tools accessible to businesses of all sizes. What started in a small 
              startup incubator has grown into a global platform serving thousands of customers.
            </p>
            <p className="text-gray-600">
              Our founders, with backgrounds in machine learning and enterprise software, recognized 
              the transformative potential of AI but saw how complex and intimidating it could be for 
              many organizations.
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/robot.svg" 
              alt="Company Founding Moment" 
              width={400} 
              height={300} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Empowering Innovation</h3>
            <p className="text-gray-600 mb-4">
              We believe that artificial intelligence should be a tool for empowerment, not intimidation. 
              Our platform is designed to make advanced AI capabilities intuitive, accessible, and 
              immediately valuable for businesses across industries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Core Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Transparency in AI development and usage</li>
              <li>Continuous learning and improvement</li>
              <li>Ethical AI practices</li>
              <li>Customer success as our primary metric</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              name: "Sarah Chen", 
              role: "CEO & Co-Founder", 
              bio: "Machine learning expert with 15 years of experience in AI research.",
              image: "/team/sarah.jpg"
            },
            { 
              name: "Michael Rodriguez", 
              role: "CTO & Co-Founder", 
              bio: "Enterprise software veteran specializing in scalable AI solutions.",
              image: "/team/michael.jpg"
            },
            { 
              name: "Elena Kim", 
              role: "Chief Product Officer", 
              bio: "Product design leader focused on making AI intuitive and user-friendly.",
              image: "/team/elena.jpg"
            }
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto mb-4 w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={192} 
                  height={192} 
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact and Locations Section */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Headquarters</h3>
            <address className="text-gray-600 not-italic">
              AI SaaS Technologies<br />
              123 Innovation Drive<br />
              San Francisco, CA 94105<br />
              United States
            </address>
            <p className="mt-4 text-gray-600">
              <strong>Email:</strong> hello@aitech.com<br />
              <strong>Phone:</strong> +1 (415) 555-0123
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Global Offices</h3>
            <ul className="text-gray-600 space-y-2">
              <li>🇺🇸 San Francisco, USA (Headquarters)</li>
              <li>🇬🇧 London, United Kingdom</li>
              <li>🇩🇪 Berlin, Germany</li>
              <li>🇯🇵 Tokyo, Japan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: "10K+", label: "Customers Served" },
            { number: "99.9%", label: "Uptime Guarantee" },
            { number: "$50M", label: "Series A Funding" }
          ].map((achievement) => (
            <div key={achievement.label} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
              <div className="text-gray-600">{achievement.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
