import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import toshibaLogo from '../../icons/icons/toshiba-svg.svg'
import xboxLogo from '../../icons/icons/svg-xbox.svg'
import sharkLogo from '../../icons/icons/svg-shark.svg'
import msiLogo from '../../icons/icons/svg-msi.svg'

const productHighlights = [
  {
    key: 'electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'technology',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'agile',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
]

const brandSlides = [
  {
    key: 'toshiba',
    gradient: 'from-[#ED1C24] to-[#A3071B]',
    logo: toshibaLogo,
  },
  {
    key: 'xbox',
    gradient: 'from-[#44D62C] to-[#0F8D44]',
    logo: xboxLogo,
  },
  {
    key: 'shark',
    gradient: 'from-[#00B0FF] to-[#004E92]',
    logo: sharkLogo,
  },
  {
    key: 'msi',
    gradient: 'from-[#FF512F] to-[#DD2476]',
    logo: msiLogo,
  },
]

export default function EfectiboWholesale() {
  const [activeBrand, setActiveBrand] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrand((prev) => (prev + 1) % brandSlides.length)
    }, 4200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-slate-900 text-white">
      <Helmet>
        <title>{t('efectiboWholesale.seo.title')}</title>
        <meta name="description" content={t('efectiboWholesale.seo.description')} />
      </Helmet>

      <section className="bg-gradient-to-br from-[#0FB368] via-[#0A3D91] to-[#021B79]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/80">
              {t('efectiboWholesale.hero.label')}
            </p>
            <img
              src="/logos/logo-efectibo.png"
              alt={t('efectiboWholesale.hero.logoAlt')}
              className="h-[30rem] w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
              loading="lazy"
            />
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
            {t('efectiboWholesale.hero.title')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl">
            {t('efectiboWholesale.hero.description')}
          </p>
          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold">{t('efectiboWholesale.hero.cardPrimary.title')}</h2>
              <p className="mt-3 text-white/80">{t('efectiboWholesale.hero.cardPrimary.description')}</p>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {t('efectiboWholesale.hero.cardPrimary.bullets', { returnObjects: true }).map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-widest text-white/70">
                {t('efectiboWholesale.hero.cardSecondary.label')}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {t('efectiboWholesale.hero.cardSecondary.title')}
              </h3>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-brand-primary font-semibold shadow-soft shadow-black/30"
              >
                {t('efectiboWholesale.hero.cardSecondary.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0FB368]">
              {t('efectiboWholesale.inventory.label')}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">{t('efectiboWholesale.inventory.title')}</h2>
            <p className="mt-4 text-white/70">{t('efectiboWholesale.inventory.description')}</p>
          </div>
          <div className="md:w-1/2 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6 shadow-soft">
            <p className="text-white/70">{t('efectiboWholesale.inventory.sidecard')}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {productHighlights.map((product) => (
            <article
              key={product.key}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-soft"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={t(`efectiboWholesale.products.${product.key}.name`)}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {t(`efectiboWholesale.products.${product.key}.name`)}
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  {t(`efectiboWholesale.products.${product.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#0FB368]">
                {t('efectiboWholesale.brands.label')}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">{t('efectiboWholesale.brands.title')}</h2>
              <p className="mt-2 text-white/70">{t('efectiboWholesale.brands.description')}</p>
            </div>
            <div className="flex gap-2">
              {brandSlides.map((_, index) => (
                <button
                  key={index}
                  aria-label={t('efectiboWholesale.brands.controls.showBrand', { number: index + 1 })}
                  onClick={() => setActiveBrand(index)}
                  className={`h-2 w-10 rounded-full transition ${
                    activeBrand === index ? 'bg-[#0FB368]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
            {brandSlides.map((brand, index) => (
              <div
                key={brand.key}
                className={`${
                  activeBrand === index ? 'opacity-100 translate-x-0' : 'pointer-events-none opacity-0 -translate-x-5'
                } transition duration-700`}
              >
                {activeBrand === index && (
                  <div className={`p-10 bg-gradient-to-r ${brand.gradient}`}>
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 p-3 shadow-lg shadow-black/20">
                          <img
                            src={brand.logo}
                            alt={t(`efectiboWholesale.brands.slides.${brand.key}.logoAlt`)}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.4em] text-white/80">
                            {t('efectiboWholesale.brands.badge')}
                          </p>
                          <h3 className="mt-2 text-4xl font-black">
                            {t(`efectiboWholesale.brands.slides.${brand.key}.name`)}
                          </h3>
                        </div>
                      </div>
                      <span className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/80">
                        {t('efectiboWholesale.brands.chip')}
                      </span>
                    </div>
                    <p className="mt-6 text-lg text-white/80">
                      {t(`efectiboWholesale.brands.slides.${brand.key}.tagline`)}
                    </p>
                    <p className="mt-6 text-sm text-white/70">{t('efectiboWholesale.brands.managed')}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0FB368]">
          {t('efectiboWholesale.cta.label')}
        </p>
        <h2 className="mt-4 text-3xl font-bold text-white">{t('efectiboWholesale.cta.title')}</h2>
        <p className="mt-4 text-white/70">{t('efectiboWholesale.cta.description')}</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0FB368] px-8 py-3 text-base font-semibold text-slate-900 shadow-soft transition hover:bg-[#0ca45c]"
        >
          {t('efectiboWholesale.cta.button')}
        </Link>
      </section>
    </div>
  )
}
