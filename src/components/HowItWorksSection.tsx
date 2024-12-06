import Link from 'next/link'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4">
              {/* Icon or image for Step 1 */}
            </div>
            <h3 className="text-xl font-bold mb-2">Step 1: Sign Up</h3>
            <p>
              Create an account with just your email and password to get started quickly and easily.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              {/* Icon or image for Step 2 */}
            </div>
            <h3 className="text-xl font-bold mb-2">
              Step 2: Log In &amp; Access Your Personal Space
            </h3>
            <p>
              Log in to your personalized dashboard to manage your settings, preferences, and data efficiently.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4">
              {/* Icon or image for Step 3 */}
            </div>
            <h3 className="text-xl font-bold mb-2">Step 3: Enjoy AI SaaS Experience</h3>
            <p>
              Experience the benefits of AI-driven automation and enjoy a hands-off approach to managing your tasks and workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
