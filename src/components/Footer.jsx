import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import linkedinIcon from '../../icons/icons/linkedin-svgrepo-com.svg'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 bg-white" role="contentinfo">
      <div className="h-2 w-full bg-brand-primary" aria-hidden="true"></div>
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-gray-900">{t('brand.name')}</h3>
          <p className="mt-2 text-sm text-gray-600">{t('brand.tagline')}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{t('footer.quick')}</h4>
          <nav aria-label="Footer">
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link className="hover:text-brand-primary" to="/services">{t('nav.services')}</Link></li>
              <li><Link className="hover:text-brand-primary" to="/solutions">{t('nav.solutions')}</Link></li>
              <li><Link className="hover:text-brand-primary" to="/about">{t('nav.about')}</Link></li>
              <li><Link className="hover:text-brand-primary" to="/insights">{t('nav.insights')}</Link></li>
              <li><Link className="hover:text-brand-primary" to="/contact">{t('nav.contact')}</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{t('footer.legal')}</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#" className="hover:text-brand-primary">{t('footer.privacy')}</a></li>
            <li><a href="#" className="hover:text-brand-primary">{t('footer.terms')}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="container flex flex-col items-center gap-3 py-4 text-sm text-gray-600 sm:flex-row sm:justify-between">
          <span className="text-center sm:text-left">
            &copy; {year} {t('brand.name')} | {t('footer.rights')} &bull; {t('footer.designed_by')}
          </span>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/invercenterusa/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:-translate-y-0.5 hover:border-brand-primary hover:shadow-sm"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
