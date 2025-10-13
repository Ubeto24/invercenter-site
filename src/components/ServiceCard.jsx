import { CheckCircle2, Briefcase, Globe, Network, BarChart3, Cpu, Cog, ShieldCheck, TrendingUp, Shield, Globe2, Package, ClipboardList, Truck, Clock3 } from 'lucide-react'

const icons = { Briefcase, Globe, Network, BarChart3, Cpu, Cog, ShieldCheck, TrendingUp, Shield, Globe2, Package, ClipboardList, Truck, Clock3 }

export default function ServiceCard({ icon = 'ClipboardList', title, text, bullets = [] }) {
  const Icon = icons[icon] || ClipboardList
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      {text && <p className="mt-3 text-sm text-gray-600">{text}</p>}
      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-accent" /> {b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
