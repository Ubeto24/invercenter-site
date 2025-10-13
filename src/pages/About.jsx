import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import Stats from '../components/Stats'

export default function About() {
  const { t } = useTranslation()
  const stats = t('stats.items', { returnObjects: true })
  return (
    <>
      <PageHeader title={`${t('nav.about')} — ${t('brand.name')}`} description={t('seo.about_desc')} />
      <Section title={t('about.history_title')}>
        <p className="text-gray-700">{t('about.history_text')}</p>
      </Section>
      <Section title={t('about.mission_title')}>
        <p className="text-gray-700">{t('about.mission_text')}</p>
      </Section>
      <Section title={t('about.vision_title')}>
        <p className="text-gray-700">{t('about.vision_text')}</p>
      </Section>
      <Section title={t('about.values_title')}>
        <p className="text-gray-700">{t('about.values_text')}</p>
      </Section>
      <Section title={t('stats.title')}>
        <Stats items={stats} />
      </Section>
      <Section title="Contacto">
        <ul className="text-gray-700 space-y-1">
          <li>{t('about.address')}</li>
          <li>Tel: {t('about.tel')} | Fax: {t('about.fax')}</li>
          <li>Email: {t('about.email')} | Web: {t('about.web')}</li>
        </ul>
      </Section>
    </>
  )
}

