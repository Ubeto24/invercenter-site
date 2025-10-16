import CTAButton from './CTAButton'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      <div className="container pt-32 md:pt-40 pb-20 md:pb-28">
        <motion.h1 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-4xl">
          {t('hero.title')}
        </motion.h1>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{duration:0.5, delay:0.1}} className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl">
          {t('hero.subtitle')}
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#services" className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow hover:bg-blue-100 transition">
            {t('hero.cta_services')}
          </a>
          <a href="#contact" className="px-6 py-3 border border-white/70 text-white rounded-lg font-semibold hover:bg-white/10 transition">
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>
    </section>
  )
}
