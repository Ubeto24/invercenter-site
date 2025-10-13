import { Helmet } from 'react-helmet-async'

export default function PageHeader({ title, description }) {
  return (
    <div className="bg-gray-50 border-b border-gray-100">
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <div className="container py-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{title}</h1>
        {description && <p className="mt-2 text-gray-600 max-w-2xl">{description}</p>}
      </div>
    </div>
  )
}

