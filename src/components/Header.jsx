import { Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'
import CTAButton from './CTAButton'
import logo from '../../imagenes/Logo2.png'

const nav = [
  { to: '/', key: 'nav.home' },
  { to: '/services', key: 'nav.services' },
  { to: '/solutions', key: 'nav.solutions' },
  { to: '/about', key: 'nav.about' },
  { to: '/insights', key: 'nav.insights' },
  { to: '/contact', key: 'nav.contact' }
]

export default function Header() {
  const { t } = useTranslation()
  return (
    <Disclosure as="nav" className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      {({ open }) => (
        <>
          <div className="container">
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center shrink-0" aria-label="Ir al inicio">
                  <img
                    src={logo}
                    alt={t('brand.name')}
                    className="h-12 md:h-14 w-auto shrink-0 opacity-0 animate-fadeInScale transition-all duration-300 ease-in-out hover:opacity-90"
                    loading="eager"
                    decoding="async"
                  />
                </Link>
                <div className="hidden md:flex items-center gap-1">
                  {nav.map((n) => (
                    <NavLink key={n.to} to={n.to} className={({ isActive }) => `px-3 py-2 text-sm rounded-md ${isActive ? 'text-brand-primary' : 'text-gray-600 hover:text-gray-900'}`}>
                      {t(n.key)}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <div className="hidden md:block">
                  <CTAButton to="/contact">{t('header.quote_button')}</CTAButton>
                </div>
                <Disclosure.Button className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100" aria-label="Menu">
                  {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden border-t border-gray-100 bg-white">
            <div className="container py-2 flex flex-col gap-2">
              <div className="pb-2">
                <LanguageToggle />
              </div>
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} className={({ isActive }) => `px-3 py-2 text-sm rounded-md ${isActive ? 'text-brand-primary' : 'text-gray-700'}`}>
                  {t(n.key)}
                </NavLink>
              ))}
              <CTAButton to="/contact" className="mt-2">{t('header.quote_button')}</CTAButton>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
