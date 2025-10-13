import { useTranslation } from 'react-i18next'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <>
      <PageHeader title={`${t('nav.contact')} — ${t('brand.name')}`} description={t('seo.contact_desc')} />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ContactForm />
          <div className="space-y-4">
            <p className="text-gray-700">{t('contact.desc')}</p>
            <ul className="text-gray-700 space-y-1">
              <li>{t('about.address')}</li>
              <li>Tel: {t('about.tel')} | Fax: {t('about.fax')}</li>
              <li>Email: {t('about.email')}</li>
              <li>{t('contact.schedule')}</li>
            </ul>
            <div className="aspect-video w-full overflow-hidden rounded-xl border">
              <iframe title="Map" className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Esp%C3%ADrito%20Santo%20Plaza%2C%201395%20Brickell%20Ave.%2C%20Suite%201080%2C%20Miami%2C%20FL%2033131&output=embed"></iframe>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

