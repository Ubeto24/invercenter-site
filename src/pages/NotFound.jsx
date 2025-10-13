import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-3xl font-semibold text-gray-900">404</h1>
      <p className="mt-2 text-gray-600">Page not found</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Go home</Link>
    </div>
  )
}

