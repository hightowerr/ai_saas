import DashboardContent from '../../components/DashboardContent'
import LoadingSpinner from '../../components/LoadingSpinner'
import { Suspense } from 'react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="mt-6">
          <Suspense fallback={<LoadingSpinner />}>
            <DashboardContent />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
