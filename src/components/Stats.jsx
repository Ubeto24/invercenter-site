import { motion } from 'framer-motion'

export default function Stats({ items = [], title }) {
  return (
    <div>
      {title && <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="card p-5 text-center"
          >
            <div className="text-2xl font-semibold text-brand-secondary">{s.value}</div>
            <div className="mt-1 text-sm text-gray-600">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

