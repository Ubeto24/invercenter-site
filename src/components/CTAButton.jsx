import { Link } from 'react-router-dom'

export default function CTAButton({ to = '/contact', children, className = '' }) {
  return (
    <Link to={to} className={`btn-primary ${className}`}>
      {children}
    </Link>
  )
}

