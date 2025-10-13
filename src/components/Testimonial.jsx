export default function Testimonial({ quote, name, role }) {
  return (
    <figure className="card p-6 h-full">
      <blockquote className="text-gray-800">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm text-gray-600">— {name}, {role}</figcaption>
    </figure>
  )
}

