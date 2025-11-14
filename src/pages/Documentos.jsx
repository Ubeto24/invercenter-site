import { useMemo, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function SideNav({ sections, onNavigate, open, onToggle, toc }) {
  return (
    <aside className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl p-4 lg:sticky lg:top-28 h-fit shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{toc.title}</p>
        <button
          type="button"
          onClick={onToggle}
          className="lg:hidden text-sm font-semibold text-brand-primary"
        >
          {open ? toc.toggle_close : toc.toggle_open}
        </button>
      </div>
      <nav className={`${open ? 'mt-4 space-y-1' : 'hidden lg:mt-4 lg:space-y-1 lg:block'}`}>
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onNavigate(section.id)}
            className="w-full text-left rounded-xl px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}

function PillarCard({ title, bullets }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
        {bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function DiagramNode({ title, protocol, items, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm w-full ${className}`}>
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
        <span>{title}</span>
        {protocol ? <span className="rounded-full bg-slate-100 px-2 py-0.5 text-slate-600">{protocol}</span> : null}
      </div>
      {items?.length ? (
        <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function FlowImage({ src, alt }) {
  if (!src) return null
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <img src={src} alt={alt || ''} loading="lazy" decoding="async" className="w-full h-auto" />
    </div>
  )
}

function CodeBlock({ children }) {
  return (
    <pre className="rounded-2xl bg-slate-900 text-slate-100 text-xs md:text-sm p-4 overflow-x-auto whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  )
}

function ApiReferenceSection({ id, spec, selectId }) {
  const [selectedVersion, setSelectedVersion] = useState(() => spec?.versions?.[0] ?? null)

  useEffect(() => {
    setSelectedVersion(spec?.versions?.[0] ?? null)
  }, [spec?.versions])

  if (!spec) return null

  const versionSelectId = selectId || `${id}-version-select`

  return (
    <article id={id} className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {spec.version ? <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{spec.version}</span> : null}
          {spec.oas ? <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{spec.oas}</span> : null}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{spec.title}</h2>
        {spec.subtitle ? <p className="text-base text-slate-600">{spec.subtitle}</p> : null}
      </div>
      {spec.overview ? <p className="mt-4 text-sm text-slate-600">{spec.overview}</p> : null}
      {spec.versions?.length ? (
        <div className="mt-6 grid gap-4 md:grid-cols-[2fr_3fr]">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500" htmlFor={versionSelectId}>
              {spec.versions_label || spec.versionsLabel}
            </label>
            <select
              id={versionSelectId}
              value={selectedVersion?.id || ''}
              onChange={(event) => {
                const found = spec.versions.find((v) => v.id === event.target.value)
                setSelectedVersion(found ?? null)
              }}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-primary"
            >
              {spec.versions.map((version) => (
                <option key={version.id} value={version.id}>
                  {version.label}
                </option>
              ))}
            </select>
            {spec.versions_note ? <p className="text-xs text-slate-500">{spec.versions_note}</p> : null}
          </div>
          {selectedVersion ? (
            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">{selectedVersion.label}</p>
              {selectedVersion.description ? <p className="text-xs text-slate-500">{selectedVersion.description}</p> : null}
              <div className="mt-4 flex flex-wrap gap-3">
                {selectedVersion.formats?.map((format, idx) => (
                  <a
                    key={idx}
                    href={format.href}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    <span>Download OpenAPI ({format.label})</span>
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">{format.ext ?? format.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Spec</p>
          <p className="mt-1 text-lg font-semibold text-gray-900">{spec.oas}</p>
        </div>
        {spec.client ? (
          <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{spec.client.label}</p>
            <p className="mt-1 text-sm text-slate-600">{spec.client.value}</p>
          </div>
        ) : null}
        {spec.server ? (
          <div className="rounded-2xl border border-slate-200 p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{spec.server.label}</p>
            <p className="mt-1 font-mono text-sm text-slate-800">{spec.server.value}</p>
          </div>
        ) : null}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {spec.auth ? (
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{spec.auth.title}</p>
                <p className="text-sm text-slate-500">{spec.auth.optional}</p>
              </div>
              {spec.auth.body ? (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{spec.auth.body}</span>
              ) : null}
            </div>
            <p className="text-sm text-slate-600">{spec.auth.description}</p>
            {spec.auth.sample ? <CodeBlock>{spec.auth.sample}</CodeBlock> : null}
          </div>
        ) : null}
        {spec.notes?.length ? (
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">Notes</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 list-disc list-inside">
              {spec.notes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      {spec.groups?.length ? (
        <div className="mt-8 space-y-6">
          {spec.groups.map((group, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{group.name}</p>
                  {group.summary ? <p className="text-sm text-slate-600">{group.summary}</p> : null}
                </div>
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Operations</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    {group.operations?.map((op, opIdx) => (
                      <li key={opIdx} className="flex flex-col">
                        <span className="font-mono text-xs text-brand-primary">
                          {op.method} {op.path}
                        </span>
                        <span>{op.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {group.sample ? <CodeBlock>{group.sample}</CodeBlock> : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export default function Documentos() {
  const { i18n } = useTranslation()
  const [navOpen, setNavOpen] = useState(false)
  const [guideLang, setGuideLang] = useState('en')

  const content = useMemo(() => {
    const translate = i18n.getFixedT(guideLang)
    return {
      metaTitle: translate('docs.meta_title'),
      metaDesc: translate('docs.meta_desc'),
      hero: translate('docs.hero', { returnObjects: true }),
      heroSupport: translate('docs.hero_support', { returnObjects: true }),
      toc: translate('docs.toc', { returnObjects: true }),
      intro: translate('docs.intro', { returnObjects: true }),
      capabilities: translate('docs.capabilities', { returnObjects: true }),
      pillars: translate('docs.pillars', { returnObjects: true }),
      mission: translate('docs.mission', { returnObjects: true }),
      solutions: translate('docs.solutions', { returnObjects: true }),
      wallet: translate('docs.wallet', { returnObjects: true }),
      ecosystem: translate('docs.ecosystem', { returnObjects: true }),
      mcc: translate('docs.mcc', { returnObjects: true }),
      apiSpec: translate('docs.api_spec', { returnObjects: true }),
      b2bApi: translate('docs.b2b_api', { returnObjects: true }),
      lotus: translate('docs.lotus', { returnObjects: true }),
      api: translate('docs.api', { returnObjects: true }),
      flows: translate('docs.flows', { returnObjects: true }),
      limits: translate('docs.limits', { returnObjects: true }),
      fees: translate('docs.fees', { returnObjects: true }),
      cardDesign: translate('docs.card_design', { returnObjects: true })
    }
  }, [i18n, guideLang])

  const sections = [
    { id: 'intro', label: content.toc.intro },
    { id: 'solutions', label: content.solutions.title },
    { id: 'wallet', label: content.wallet.title },
    { id: 'ecosystem', label: content.ecosystem.title },
    { id: 'lotus', label: content.lotus.title },
    { id: 'api', label: content.api.title },
    { id: 'apiSpec', label: content.apiSpec.title },
    { id: 'b2bApi', label: content.b2bApi.title },
    { id: 'flows', label: content.flows.title },
    { id: 'limits', label: content.limits.title },
    { id: 'fees', label: content.fees.title },
    { id: 'cardDesign', label: content.cardDesign.title },
    { id: 'mcc', label: content.mcc.title },
    { id: 'capabilities', label: content.toc.capabilities },
    { id: 'pillars', label: content.toc.pillars },
    { id: 'mission', label: content.toc.mission }
  ]

  const handleNavigate = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setNavOpen(false)
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDesc} />
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>

      <section className="bg-slate-900 text-white">
        <div className="container px-6 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">{content.hero.eyebrow}</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-white">{content.hero.title}</h1>
          <p className="mt-6 text-lg text-slate-100 max-w-3xl">{content.hero.subtitle}</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {content.heroSupport.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
                <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary flex-shrink-0"></span>
                <p className="text-sm text-slate-100">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">Guides language</p>
              <p className="text-xs text-slate-400">Switch copy only. Code samples remain in Spanish.</p>
            </div>
            <div className="inline-flex rounded-full border border-white/40 bg-white/10 p-1 text-sm font-medium">
              {[
                { code: 'en', label: 'English' },
                { code: 'es', label: 'Español' }
              ].map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setGuideLang(lang.code)}
                  className={`px-4 py-1.5 rounded-full transition ${
                    guideLang === lang.code ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container px-6 py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10 xl:gap-16">
          <SideNav
            sections={sections}
            onNavigate={handleNavigate}
            open={navOpen}
            onToggle={() => setNavOpen((prev) => !prev)}
            toc={content.toc}
          />

          <div className="mt-10 space-y-16 lg:mt-0">
            <article id="intro" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.intro.title}</h2>
              <div className="mt-4 space-y-4 text-base text-slate-600">
                {content.intro.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article id="solutions" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-gray-900">{content.solutions.title}</h2>
                <p className="text-base text-slate-600">{content.solutions.subtitle}</p>
              </div>
              <div className="mt-8 space-y-8">
                {content.solutions.items.map((solution, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900">{solution.name}</h3>
                    <p className="mt-3 text-sm text-slate-600">{solution.description}</p>
                    {solution.perfectFor && (
                      <div className="mt-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.solutions.perfect_label}</p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                          {solution.perfectFor.map((item, perfectIdx) => (
                            <li key={perfectIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {solution.bullets && (
                      <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                        {solution.bullets.map((item, bulletIdx) => (
                          <li key={bulletIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {solution.example && (
                      <div className="mt-5 rounded-xl bg-slate-50 border border-slate-200 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{solution.example.title}</p>
                        <p className="mt-2 text-sm text-slate-600">{solution.example.text}</p>
                      </div>
                    )}
                    {solution.disclaimer && (
                      <p className="mt-3 text-xs text-slate-500">{solution.disclaimer}</p>
                    )}
                    {solution.footer && (
                      <p className="mt-4 text-sm text-slate-600">{solution.footer}</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-brand-primary/30 bg-brand-primary/5 p-5 text-sm text-slate-700">
                <p className="font-semibold text-brand-primary">{content.solutions.contact.text}</p>
                <a href={`mailto:${content.solutions.contact.email}`} className="mt-2 inline-flex text-brand-primary underline font-medium">
                  {content.solutions.contact.email}
                </a>
              </div>
            </article>

            <article id="wallet" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.wallet.title}</h2>
              <div className="mt-3 space-y-3 text-base text-slate-600">
                {content.wallet.intro.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.wallet.modules_title}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {content.wallet.modules.map((module, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                      <h3 className="text-base font-semibold text-gray-900">{module.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{module.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm text-slate-700">
                {content.wallet.trust}
              </div>
              <p className="mt-4 text-sm font-semibold text-brand-primary">
                {content.wallet.cta}
              </p>
            </article>

            <article id="ecosystem" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.ecosystem.title}</h2>
              <p className="mt-2 text-base text-slate-600">{content.ecosystem.subtitle}</p>
              <div className="mt-3 space-y-3 text-sm text-slate-600">
                {content.ecosystem.intro.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                {content.ecosystem.sections.map((section, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                    <p className="mt-2 text-sm text-slate-600">{section.description}</p>
                    <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
                      {section.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-brand-primary">{content.ecosystem.cta}</p>
            </article>

            <article id="lotus" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{content.lotus.title}</h2>
                <p className="text-base text-slate-600">{content.lotus.description}</p>
                {content.lotus.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base text-slate-600">{paragraph}</p>
                ))}
                <a
                  href={content.lotus.cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white hover:bg-brand-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  {content.lotus.cta.label}
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{content.lotus.networks_title}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {content.lotus.networks.map((network, idx) => (
                    <li key={idx}>{network}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-600">{content.lotus.markets}</p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{content.lotus.models_title}</p>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  {content.lotus.models.map((model, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                      <h3 className="text-lg font-semibold text-gray-900">{model.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{model.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{content.lotus.modules_title}</p>
                  <p className="text-sm text-slate-600">{content.lotus.modules_intro}</p>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {content.lotus.modules.map((module, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                      <h3 className="text-base font-semibold text-gray-900">{module.name}</h3>
                      <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                        {module.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">{content.lotus.coming_title}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {content.lotus.coming_items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article id="api" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.api.title}</h2>
              <p className="mt-2 text-base text-slate-600">{content.api.subtitle}</p>
              <div className="mt-4 space-y-4 text-base text-slate-600">
                {content.api.intro.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 space-y-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-primary">Topology</p>
                <div className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-between">
                  {content.api.diagram.top[0] ? (
                    <DiagramNode
                      className="max-w-none md:flex-1"
                      title={content.api.diagram.top[0].name}
                      protocol={content.api.diagram.top[0].protocol}
                      items={content.api.diagram.top[0].items}
                    />
                  ) : null}
                  <div className="flex justify-center">
                    <div className="rounded-full bg-brand-primary px-8 py-3 text-lg font-semibold text-white shadow-lg">
                      {content.api.diagram.core}
                    </div>
                  </div>
                  {content.api.diagram.top[1] ? (
                    <DiagramNode
                      className="max-w-none md:flex-1"
                      title={content.api.diagram.top[1].name}
                      protocol={content.api.diagram.top[1].protocol}
                      items={content.api.diagram.top[1].items}
                    />
                  ) : null}
                </div>
                {content.api.diagram.bottom.length ? (
                  <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
                    {content.api.diagram.bottom.map((node) => (
                      <DiagramNode key={node.name} className="max-w-xl" title={node.name} protocol={node.protocol} items={node.items} />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900">{content.api.card_flow.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{content.api.card_flow.text}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {content.api.card_flow.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
            </article>

            <ApiReferenceSection id="apiSpec" spec={content.apiSpec} selectId="lotus-version-select" />

            <ApiReferenceSection id="b2bApi" spec={content.b2bApi} selectId="b2b-version-select" />

            <article id="flows" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.flows.title}</h2>
              <p className="mt-3 text-base text-slate-600">{content.flows.subtitle}</p>
              <div className="mt-8 space-y-8">
                {content.flows.sections.map((flow, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{flow.name}</p>
                    <p className="mt-2 text-sm text-slate-600">{flow.description}</p>
                    {flow.image ? (
                      <div className="mt-4">
                        <FlowImage src={flow.image} alt={flow.imageAlt || flow.name} />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              {content.flows.note ? (
                <p className="mt-6 text-xs text-slate-500">{content.flows.note}</p>
              ) : null}
            </article>

            <article id="limits" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.limits.title}</h2>
              <p className="mt-2 text-base text-slate-600">{content.limits.subtitle}</p>
              <p className="mt-3 text-sm text-slate-600">{content.limits.description}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.limits.rules_title}</p>
                <p className="text-sm text-slate-600 mt-1">{content.limits.rules_intro}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {content.limits.rules.map((rule, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                      <h3 className="text-base font-semibold text-gray-900">{rule.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{rule.text}</p>
                    </div>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {content.limits.rule_details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-semibold text-brand-primary">{content.limits.rules_title}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {content.limits.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.limits.hierarchy_title}</p>
                <p className="text-sm text-slate-600 mt-1">{content.limits.hierarchy_description}</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {content.limits.hierarchy.map((row) => (
                    <div key={row.level} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Level {row.level}</p>
                      <h3 className="mt-1 text-lg font-semibold text-gray-900">{row.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{row.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article id="fees" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.fees.title}</h2>
              <p className="mt-2 text-base text-slate-600">{content.fees.subtitle}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {content.fees.types.map((type, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{type.name}</p>
                    <p className="mt-2 text-sm text-slate-600">{type.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.automated_title}</p>
                <p className="text-sm text-slate-600 mt-1">{content.fees.automated_intro}</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {content.fees.automated_items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.custom_fee_title}</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.fees.custom_fee_body.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.compliance_title}</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.fees.compliance_items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.funds_title}</p>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {content.fees.funds_items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.codes_title}</p>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-full text-left text-sm text-slate-600">
                    <thead>
                      <tr>
                        <th className="py-2 pr-4 font-semibold text-slate-500">Code</th>
                        <th className="py-2 font-semibold text-slate-500">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {content.fees.codes.map((row, idx) => (
                        <tr key={idx} className="border-t border-slate-100">
                          <td className="py-2 pr-4 font-mono text-slate-800">{row.code}</td>
                          <td className="py-2">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.fees_rules_title}</p>
                <div className="mt-3 space-y-4">
                  {content.fees.fees_rules.map((rule, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-gray-900">{rule.rule}</p>
                      <p className="mt-1 text-sm text-slate-600">{rule.description}</p>
                      {rule.example ? <p className="mt-1 text-xs text-slate-500">{rule.example}</p> : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.notes_title}</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.fees.notes.map((note, idx) => (
                      <li key={idx}>{note}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.reporting_title}</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.fees.reporting_items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.pending_title}</p>
                  <p className="mt-2 text-sm text-slate-600">{content.fees.pending_text}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.fees.pending_steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.expiration_title}</p>
                  <p className="mt-2 text-sm text-slate-600">{content.fees.expiration_text}</p>
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">{content.fees.reversal_title}</p>
                  <p className="mt-2 text-sm font-semibold text-gray-900">Managed fees</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.fees.reversal_managed.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-gray-900">Custom-assessed fees</p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.fees.reversal_assess.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">Issuer portal</p>
                  <p className="mt-2 text-sm text-slate-600">{content.fees.portal_note}</p>
                </div>
              </div>
            </article>

            <article id="cardDesign" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.cardDesign.title}</h2>
              <p className="mt-2 text-base text-slate-600">{content.cardDesign.subtitle}</p>
              <p className="mt-3 text-sm text-slate-600">{content.cardDesign.overview}</p>
              <div className="mt-6 space-y-5">
                <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{content.cardDesign.mastercard.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{content.cardDesign.mastercard.intro}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    {content.cardDesign.mastercard.rules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {content.cardDesign.mastercard.figures.map((figure, idx) => (
                    <div key={idx} className="space-y-2">
                      <FlowImage src={figure.image} alt={figure.caption} />
                      <p className="text-xs text-slate-500">{figure.title}: {figure.caption}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600">{content.cardDesign.mastercard.summary}</p>
              </div>
            </article>

            <article id="mcc" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.mcc.title}</h2>
              <p className="mt-2 text-base text-slate-600">{content.mcc.subtitle}</p>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm text-slate-700 border border-slate-100">
                  <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                    <tr>
                      {content.mcc.columns.map((col, idx) => (
                        <th key={idx} className="px-4 py-3 font-semibold">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.mcc.items.map((row, idx) => (
                      <tr key={idx} className="border-t border-slate-100">
                        <td className="px-4 py-2 font-mono text-slate-900">{row[0]}</td>
                        <td className="px-4 py-2">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article id="capabilities" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.capabilities.title}</h2>
              <p className="mt-3 text-base text-slate-600">{content.capabilities.description}</p>
              <ul className="mt-6 space-y-4 text-base text-slate-700 list-disc list-inside">
                {content.capabilities.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-slate-500">{content.capabilities.note}</p>
            </article>

            <article id="pillars" className="rounded-3xl bg-white p-6 md:p-10 shadow-sm border border-slate-100 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900">{content.pillars.title}</h2>
              <p className="mt-3 text-base text-slate-600">{content.pillars.description}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {content.pillars.groups.map((group, idx) => (
                  <PillarCard key={idx} title={group.title} bullets={group.bullets} />
                ))}
              </div>
            </article>

            <article id="mission" className="rounded-3xl bg-slate-900 text-white p-6 md:p-10 shadow-md scroll-mt-32">
              <h2 className="text-3xl font-bold text-white">{content.mission.title}</h2>
              <p className="mt-4 text-base text-slate-100">{content.mission.text}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
