import { Check } from 'lucide-react'

export default function FeatureList({ items = [] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-700"><Check className="mt-0.5 h-4 w-4 text-brand-accent" /> {item}</li>
      ))}
    </ul>
  )
}

