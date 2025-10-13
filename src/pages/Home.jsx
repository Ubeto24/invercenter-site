import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import FeatureList from '../components/FeatureList'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
import LogoCloud from '../components/LogoCloud'
import CTAButton from '../components/CTAButton'
import Timeline from '../components/Timeline'
import { testimonials } from '../content/testimonials'

export default function Home() {
  const { t } = useTranslation()
  const services = t('services.list', { returnObjects: true })
  const stats = t('stats.items', { returnObjects: true })
  const why = t('why.features', { returnObjects: true })
  const tItems = t('testimonials.items', { returnObjects: true })

  return (
    <>
      <Hero />

      <Section id="services" title={t('services.title')}>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">{t('services.description')}</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} text={s.desc} />
          ))}
        </div>
      </Section>

      <Section title={t('solutions.title')}>
        <div className="grid md:grid-cols-3 gap-4">
          <ServiceCard icon="Globe2" title={t('solutions.payments.title')} text={t('solutions.payments.desc')} bullets={t('solutions.payments.benefits', { returnObjects: true })} />
          <ServiceCard icon="Shield" title={t('solutions.blockchain.title')} text={t('solutions.blockchain.desc')} bullets={t('solutions.blockchain.benefits', { returnObjects: true })} />
          <ServiceCard icon="BarChart3" title={t('solutions.data.title')} text={t('solutions.data.desc')} bullets={t('solutions.data.benefits', { returnObjects: true })} />
        </div>
      </Section>

      <Section title={t('why.title')}>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <FeatureList items={why} />
          <Stats items={stats} />
        </div>
      </Section>

      <Section>
        <LogoCloud />
      </Section>

      <Section title={t('testimonials.title')}>
        <div className="grid md:grid-cols-3 gap-4">
          {tItems.map((it, i) => (
            <Testimonial key={i} quote={it.quote} name={it.name} role={it.role} />
          ))}
        </div>
      </Section>

      <Section id="contact" className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{t('cta.title')}</h3>
        <CTAButton className="mt-4">{t('cta.button')}</CTAButton>
      </Section>
    </>
  )
}
