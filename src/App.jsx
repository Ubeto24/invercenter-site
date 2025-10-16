import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Insights from './pages/Insights'
import Article from './pages/insights/Article'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('brand.name')}</title>
        <meta name="description" content={t('seo.home_desc')} />
      </Helmet>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-brand-primary px-3 py-2 rounded" aria-label="Skip to content">
        Skip to content
      </a>
      <Header />
      <main id="content" className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}


