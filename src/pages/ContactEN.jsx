export default function ContactEN() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Contact us</h1>
      <p className="text-gray-600 mb-8">Tell us about your project. We’ll get back to you shortly.</p>

      <form
        name="contact-en"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/en/thanks"
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact-en" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full name</label>
            <input id="name" name="name" type="text" autoComplete="name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">Company (optional)</label>
            <input id="company" name="company" type="text" autoComplete="organization" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone (optional)</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">How can we help you?</label>
          <textarea id="message" name="message" rows="5" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex items-center gap-3">
          <input id="privacy" name="privacy" type="checkbox" required />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree to the <a href="/en/privacy" className="text-blue-600 underline">Privacy Policy</a>.
          </label>
        </div>

        <div className="pt-2">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Send message
          </button>
        </div>
      </form>
    </section>
  )
}

