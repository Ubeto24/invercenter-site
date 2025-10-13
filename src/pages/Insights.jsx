import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'

const posts = [
  { title: 'Tendencias de logística 2025', tag: 'logística' },
  { title: 'Cumplimiento en pagos internacionales', tag: 'pagos' },
  { title: 'Casos de uso blockchain en supply chain', tag: 'blockchain' }
]

export default function Insights() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader title={`${t('nav.insights')} — ${t('brand.name')}`} description={t('seo.insights_desc')} />
      <Section>
        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((p, i) => (
            <article key={i} className="card p-6">
              <div className="text-xs uppercase tracking-wide text-brand-secondary">{p.tag}</div>
              <h3 className="mt-2 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className="mt-3 inline-block text-sm text-brand-accent hover:underline">{t('insights.more')}</a>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}

