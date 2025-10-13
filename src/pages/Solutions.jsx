import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'

function Diagram({ labels = [] }) {
  return (
    <svg viewBox="0 0 300 120" className="w-full h-32" role="img" aria-label="Diagram">
      {labels.map((l, i) => (
        <g key={i}>
          <rect x={10 + i * 58} y={30} width="50" height="30" rx="6" fill="#E5EDFF" stroke="#2563EB" />
          <text x={35 + i * 58} y={48} textAnchor="middle" fontSize="10" fill="#1E40AF">{l}</text>
          {i < labels.length - 1 && (
            <path d={`M ${60 + i * 58} 45 L ${70 + i * 58} 45`} stroke="#2563EB" />
          )}
        </g>
      ))}
    </svg>
  )
}

export default function Solutions() {
  const { t } = useTranslation()
  const p = t('solutions.payments', { returnObjects: true })
  const b = t('solutions.blockchain', { returnObjects: true })
  const d = t('solutions.data', { returnObjects: true })

  return (
    <>
      <PageHeader title={`${t('nav.solutions')} — ${t('brand.name')}`} description={t('seo.solutions_desc')} />
      <Section title={p.title}>
        <p className="text-gray-700">{p.desc}</p>
        <Diagram labels={["KYC/KYB","Partners","FX","Liquidity","Settlement"]} />
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          {p.benefits.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
      </Section>
      <Section title={b.title}>
        <p className="text-gray-700">{b.desc}</p>
        <Diagram labels={["Wallet","Contract","Ledger","Audit","API"]} />
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          {b.benefits.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
      </Section>
      <Section title={d.title}>
        <p className="text-gray-700">{d.desc}</p>
        <Diagram labels={["Ingest","ETL","Lake","ML","BI"]} />
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          {d.benefits.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
      </Section>
    </>
  )
}

