'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { Button } from './ui/Button'
import { User } from '@supabase/supabase-js'

interface ProfileSettingsProps {
  user: User
}

interface Profile {
  username: string
  plan_type: string
  plan_status: string
  plan_renewal_date: string
}

export default function ProfileSettings({ user }: ProfileSettingsProps) {
  const [email, setEmail] = useState(user.email)
  const [username, setUsername] = useState('')
  const [planType, setPlanType] = useState('Free')
  const [planStatus, setPlanStatus] = useState('Active')
  const [planRenewalDate, setPlanRenewalDate] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('username, plan_type, plan_status, plan_renewal_date')
      .eq('id', user.id)
      .single()

    if (error) {
      console.error('Error fetching profile:', error)
    } else if (data) {
      setUsername(data.username || '')
      setPlanType(data.plan_type || 'Free')
      setPlanStatus(data.plan_status || 'Active')
      setPlanRenewalDate(data.plan_renewal_date || '')
    }
    setLoading(false)
  }

  const updateProfile = async () => {
    setLoading(true)

    const updates = {
      id: user.id,
      username,
      plan_type: planType,
      plan_status: planStatus,
      plan_renewal_date: planRenewalDate,
      updated_at: new Date().toISOString(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert('Error updating profile!')
      console.error('Error updating profile:', error)
    } else {
      alert('Profile updated successfully!')
    }
    setLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Profile Information */}
      <div className="bg-white shadow rounded-lg p-6 mt-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1 bg-gray-100"
              type="email"
              value={email}
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Plan Details */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Plan Details</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Current Plan</label>
            <div className="mt-1 p-3 bg-gray-50 rounded-lg">
              <p className="text-lg font-medium text-gray-900">{planType}</p>
              <p className="text-sm text-gray-500">Status: {planStatus}</p>
              {planRenewalDate && (
                <p className="text-sm text-gray-500">
                  Renewal Date: {new Date(planRenewalDate).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-gray-900">Plan Features</h4>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                {planType === 'Free' ? (
                  <>
                    <li>• Basic AI assistance</li>
                    <li>• Limited queries per month</li>
                    <li>• Standard support</li>
                  </>
                ) : planType === 'Pro' ? (
                  <>
                    <li>• Advanced AI assistance</li>
                    <li>• Unlimited queries</li>
                    <li>• Priority support</li>
                    <li>• Custom integrations</li>
                  </>
                ) : (
                  <>
                    <li>• Enterprise AI solutions</li>
                    <li>• Unlimited everything</li>
                    <li>• 24/7 dedicated support</li>
                    <li>• Custom development</li>
                  </>
                )}
              </ul>
            </div>
            
            {planType === 'Free' && (
              <Button
                onClick={() => window.location.href = '/upgrade'}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white"
              >
                Upgrade Plan
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={updateProfile} disabled={loading}>
          {loading ? 'Saving Changes...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  )
}
