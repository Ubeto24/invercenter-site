import { useParams, Link } from 'react-router-dom'
import { INSIGHTS } from '../../content/insights'

export default function Article() {
  const { slug } = useParams()
  const item = INSIGHTS.find((i) => i.id === slug)

  return (
    <article className="bg-white min-h-screen pt-36 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/insights" className="text-blue-700 font-semibold">&larr; Volver a Insights</Link>
        <header className="mt-6 mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">{item?.title || 'Artículo'}</h1>
          <p className="text-gray-500 text-sm mt-2">
            {item ? (
              <>Publicado por {item.author} — {new Date(item.date).toLocaleDateString()} • {item.readTime}</>
            ) : (
              'Entrada informativa'
            )}
          </p>
        </header>

        <div className="prose prose-neutral max-w-none">
          <p>
            Introducción del tema alineada con los servicios de InverCenter: logística, pagos internacionales,
            blockchain y data. Incluye contexto, retos y enfoque práctico.
          </p>
          <h2>Subtítulo / Sección</h2>
          <ul>
            <li>Punto clave 1</li>
            <li>Punto clave 2</li>
            <li>Punto clave 3</li>
          </ul>
          <h2>Conclusiones</h2>
          <p>
            Recomendaciones accionables y llamado a conversación con nuestro equipo.
          </p>
        </div>

        <div className="mt-10 border-t pt-6">
          <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900">
            Hable con un consultor
          </Link>
        </div>
      </div>
    </article>
  )
}
