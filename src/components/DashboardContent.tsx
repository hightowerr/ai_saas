'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../utils/supabase'
import { Button } from './ui/Button'
import AIAssistant from './AIAssistant'
import ProfileSettings from './ProfileSettings'

export default function DashboardContent() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login')
        return
      }
      setUser(session.user)
      setLoading(false)
    }

    checkUser()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="px-4 py-6 sm:px-0">
      <p className="mt-2 text-gray-600">Welcome back, {user?.email}</p>

      {/* Account Information and Settings */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
        <ProfileSettings user={user} />
      </div>

      {/* AI Assistant Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">AI Assistant</h2>
        <AIAssistant />
      </div>

      {/* Existing Dashboard Content */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Text Analysis Card */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Text Analysis</h3>
            <p className="mt-2 text-gray-600">
              Analyze text content using advanced NLP models
            </p>
            <div className="mt-4">
              <Button>Start Analysis</Button>
            </div>
          </div>
        </div>

        {/* Image Processing Card */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Image Processing</h3>
            <p className="mt-2 text-gray-600">
              Process and analyze images with AI
            </p>
            <div className="mt-4">
              <Button>Upload Image</Button>
            </div>
          </div>
        </div>

        {/* Data Analytics Card */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900">Data Analytics</h3>
            <p className="mt-2 text-gray-600">
              Get AI-powered insights from your data
            </p>
            <div className="mt-4">
              <Button>View Analytics</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
        <div className="mt-4 bg-white shadow rounded-lg">
          <div className="p-6">
            <p className="text-gray-600">No recent activity</p>
          </div>
        </div>
      </div>
    </div>
  )
}
