import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const onSubmit = async (e) => {
    const form = e.currentTarget
    if (!form) return
    if (form.dataset.netlify === 'true') return // handled by Netlify
    e.preventDefault()
    setStatus('loading')
    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
      if (!endpoint) throw new Error('Missing VITE_CONTACT_ENDPOINT')
      const data = new FormData(form)
      const res = await fetch(endpoint, { method: 'POST', body: data })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/gracias"
      onSubmit={onSubmit}
      className="card p-6 grid gap-4"
      aria-label="Contact form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">{t('contact.name')}</label>
          <input id="name" name="name" type="text" required className="mt-1 w-full rounded-md border-gray-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="company">{t('contact.company')}</label>
          <input id="company" name="company" type="text" className="mt-1 w-full rounded-md border-gray-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">{t('contact.email')}</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border-gray-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="phone">{t('contact.phone')}</label>
          <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-md border-gray-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="country">{t('contact.country')}</label>
          <input id="country" name="country" type="text" className="mt-1 w-full rounded-md border-gray-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="service">{t('contact.service')}</label>
          <select id="service" name="service" className="mt-1 w-full rounded-md border-gray-300">
            <option>Logística</option>
            <option>Pagos internacionales</option>
            <option>Blockchain</option>
            <option>Big Data</option>
            <option>Otro</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="message">{t('contact.message')}</label>
        <textarea id="message" name="message" rows="5" required className="mt-1 w-full rounded-md border-gray-300"></textarea>
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="btn-primary" disabled={status === 'loading'}>
          {status === 'loading' ? t('contact.loading') : t('contact.submit')}
        </button>
        {status === 'success' && <span role="status" className="text-sm text-green-700">{t('contact.success')}</span>}
        {status === 'error' && <span role="status" className="text-sm text-red-700">{t('contact.error')}</span>}
      </div>
    </form>
  )
}

