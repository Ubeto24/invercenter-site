import { useParams, Link } from 'react-router-dom'
import { INSIGHTS } from '../../content/insights'

function RenderContent({ content }) {
  if (!Array.isArray(content)) return null
  return (
    <div className="prose prose-neutral max-w-none text-justify">
      {content.map((block, idx) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={idx}>{block.text}</h2>
          case 'ul':
            return (
              <ul key={idx}>
                {block.items?.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            )
          case 'cta':
            return (
              <div key={idx} className="not-prose mt-6">
                <a href={block.href || '/contact'} className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900">
                  {block.text}
                </a>
              </div>
            )
          case 'p':
          default:
            return <p key={idx}>{block.text}</p>
        }
      })}
    </div>
  )
}

export default function Article() {
  const { slug } = useParams()
  const item = INSIGHTS.find((i) => i.id === slug)

  return (
    <article className="bg-white min-h-screen pt-6 pb-20">
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

        {item?.content ? (
          <RenderContent content={item.content} />
        ) : (
          <div className="prose prose-neutral max-w-none text-justify">
            <p>El contenido de este artículo estará disponible próximamente.</p>
          </div>
        )}

        <div className="mt-10 border-t pt-6">
          <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900">
            Hable con un consultor
          </Link>
        </div>
      </div>
    </article>
  )
}
