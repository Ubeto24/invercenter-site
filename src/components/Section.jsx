export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`container py-12 md:py-16 ${className}`}>
      {(title || subtitle) && (
        <header className="mb-8 max-w-3xl">
          {subtitle && <p className="text-sm uppercase tracking-wide text-brand-secondary">{subtitle}</p>}
          {title && <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  )
}
