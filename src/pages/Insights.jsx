import { useMemo, useState } from 'react'
import { INSIGHTS, INSIGHT_CATEGORIES } from '../content/insights'
import { Search, ArrowRight } from 'lucide-react'

function Card({ item }) {
  return (
    <article className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-600 transition-all duration-200">
      <div className="flex items-center gap-2 text-xs font-semibold mb-3">
        <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700">{item.tag}</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-500">{new Date(item.date).toLocaleDateString()}</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-500">{item.readTime}</span>
      </div>
      <h3 className="text-blue-900 font-bold text-lg leading-snug mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
      <a href={item.href} className="inline-flex items-center text-blue-700 font-semibold text-sm hover:text-blue-900">
        Ver más <ArrowRight className="w-4 h-4 ml-1" />
      </a>
    </article>
  )
}

export default function InsightsPage() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')

  const filtered = useMemo(() => {
    const list = active === 'all' ? INSIGHTS : INSIGHTS.filter((i) => i.category === active)
    if (!query.trim()) return list
    const q = query.toLowerCase()
    return list.filter((i) => [i.title, i.excerpt, i.tag].some((t) => t.toLowerCase().includes(q)))
  }, [active, query])

  return (
    <section className="bg-gray-50 min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">Insights — InverCenter USA, Inc.</h1>
          <p className="text-gray-600 mt-2">Noticias, tendencias y análisis sobre logística, fintech y transformación digital.</p>
        </header>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {INSIGHT_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-3 py-2 rounded-full text-sm font-semibold border transition ${
                  active === c.id ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Buscar insights…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-white"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-900">
            Agende una consultoría
          </a>
        </div>
      </div>
    </section>
  )
}
