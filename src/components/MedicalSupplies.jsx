import { useTranslation } from 'react-i18next'
import { HeartPulse, Building2, Globe2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import CTAButton from './CTAButton'

const icons = [HeartPulse, Building2, Globe2, ShieldCheck]

export default function MedicalSupplies() {
  const { t } = useTranslation()
  const items = t('medical.items', { returnObjects: true })
  return (
    <section id="medical" className="bg-blue-50/60 border-y border-blue-100">
      <div className="container py-12 md:py-16 grid gap-8 lg:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{t('medical.title')}</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{t('medical.description')}</p>
          <CTAButton className="mt-6">{t('medical.cta')}</CTAButton>
        </motion.div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {Array.isArray(items) && items.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft">
                <Icon className="h-6 w-6 shrink-0 text-brand-accent" aria-hidden="true" />
                <span className="text-gray-800 font-medium">{item}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
