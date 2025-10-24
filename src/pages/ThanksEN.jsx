import Lottie from 'lottie-react'
import sentAnimation from '../assets/sent.json'
import logo from '../assets/logo-invercenter.svg'

export default function ThanksEN() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f44] to-[#1a3b78] flex flex-col items-center justify-center text-white px-6">
      <img src={logo} alt="InverCenter USA Inc." className="w-48 mb-6 opacity-95" />

      <div className="flex flex-col items-center text-center bg-white/10 rounded-2xl shadow-xl p-8 backdrop-blur border border-white/20 max-w-md w-full">
        <Lottie animationData={sentAnimation} loop={false} className="w-40 mb-3" />

        <h1 className="text-2xl font-semibold mb-2">Thank you! Your message was sent</h1>
        <p className="text-gray-200 mb-6">Our team has received your request. We will get back to you shortly.</p>

        <a href="/en" className="inline-flex items-center justify-center rounded-full px-6 py-2 bg-[#3fa3ff] hover:bg-[#2b89e6] transition-colors">
          Back to Home
        </a>
      </div>

      <p className="text-xs text-gray-400 mt-8">InverCenter USA Inc. © {new Date().getFullYear()}</p>
    </div>
  )
}
