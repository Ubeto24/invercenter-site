import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const { t } = useTranslation()
  const list = t('services.list', { returnObjects: true })
  return (
    <>
      <PageHeader title={`${t('nav.services')} — ${t('brand.name')}`} description={t('seo.services_desc')} />
      <Section title={t('services.title')}>
        <p className="text-gray-700 mb-6">{t('services.description')}</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} text={s.desc} />
          ))}
        </div>
      </Section>
    </>
  )
}
