export default function Timeline({ steps = [] }) {
  return (
    <ol className="relative border-l border-gray-200 pl-4">
      {steps.map((s, i) => (
        <li key={i} className="mb-6 ml-2">
          <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full border-2 border-white bg-brand-accent"></div>
          <h4 className="font-medium text-gray-900">{s.title}</h4>
          {s.text && <p className="text-sm text-gray-600">{s.text}</p>}
        </li>
      ))}
    </ol>
  )
}

