
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome | Modern Website Template',
  description: 'Welcome to our modern website template',
}

export default function WelcomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-4">
          Welcome to our modern website template. We're excited to have you here!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p>Begin your journey with our comprehensive guide and tutorials.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <p>Explore our powerful features and capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
