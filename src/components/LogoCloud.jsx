export default function LogoCloud() {
  const logos = new Array(6).fill(0)
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
      {logos.map((_, i) => (
        <div key={i} className="flex items-center justify-center opacity-70">
          <svg width="120" height="40" role="img" aria-label="Partner logo placeholder">
            <rect width="120" height="40" fill="#e5e7eb" rx="6" />
          </svg>
        </div>
      ))}
    </div>
  )
}

