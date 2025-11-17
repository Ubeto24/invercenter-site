import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const productHighlights = [
  {
    name: 'Electronica premium',
    description:
      'Consolas, displays profesionales y accesorios certificados para retail y gaming lounges.',
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Tecnologia aplicada',
    description:
      'Soluciones IoT, audio inteligente y dispositivos para operaciones comerciales 24/7.',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Equipamiento agil',
    description:
      'Kits de despacho, empaque y movilidad que aceleran cualquier operacion wholesale.',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
]

const brandSlides = [
  {
    name: 'Xbox',
    tagline: 'Hardware y ecosistemas para entretenimiento masivo.',
    gradient: 'from-[#44D62C] to-[#0F8D44]',
  },
  {
    name: 'Ninja',
    tagline: 'Electrodomesticos inteligentes listos para retail latino.',
    gradient: 'from-[#4C8BF5] to-[#0A3D91]',
  },
  {
    name: 'Shark',
    tagline: 'Limpieza y lifestyle premium con inventario constante.',
    gradient: 'from-[#00B0FF] to-[#004E92]',
  },
]

export default function EfectiboWholesale() {
  const [activeBrand, setActiveBrand] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrand((prev) => (prev + 1) % brandSlides.length)
    }, 4200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-slate-900 text-white">
      <Helmet>
        <title>Efectibo Wholesale | Invercenter USA</title>
        <meta
          name="description"
          content="Marketplace B2B exclusivo para socios mayoristas de Invercenter USA y Efectibo LLC."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-[#0FB368] via-[#0A3D91] to-[#021B79]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">iNC x Efectibo LLC</p>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
            Marketplace wholesale privado impulsado por la logistica de Invercenter USA.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl">
            Efectibo LLC escala su red de distribucion B2B aprovechando la infraestructura, procesos
            estandarizados y el alcance internacional de Invercenter. Acceso bajo invitacion,
            servicio inmediato.
          </p>
          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-xl font-semibold">Una sola operacion, dos especialistas</h2>
              <p className="mt-3 text-white/80">
                iNC integra compras y logistica internacional; Efectibo ejecuta fulfillment local y
                servicio mayorista.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                <li>- Circuitos de importacion certificados por iNC.</li>
                <li>- Distribucion inmediata en mercados hispanos de EE. UU.</li>
                <li>- Accesos API para inventario en tiempo real.</li>
              </ul>
            </div>
            <div className="flex-1 rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-widest text-white/70">Objetivo</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Ser el marketplace B2B mas agil para retailers y distribuidores latinos.
              </h3>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-brand-primary font-semibold shadow-soft shadow-black/30"
              >
                Conectar con un advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0FB368]">
              Inventario curado
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">Catalogo activo Efectibo Wholesale</h2>
            <p className="mt-4 text-white/70">
              Tres lineas de producto mantienen el flujo constante: entretenimiento, tecnologia
              aplicada y equipamiento operativo. Las tarjetas muestran ejemplos de disponibilidad y
              empaques listos para retail o ultima milla.
            </p>
          </div>
          <div className="md:w-1/2 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6 shadow-soft">
            <p className="text-white/70">
              Gracias a la red de contactos de Invercenter, cada SKU se abastece con contratos
              preferenciales y controles de calidad unificados. Eso permite mejorar margenes y
              asegurar entregas en menos de 72 horas dentro de los principales hubs.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {productHighlights.map((product) => (
            <article
              key={product.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-soft"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-sm text-white/70">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#0FB368]">Carrusel de marcas</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Marcas ancla del marketplace</h2>
              <p className="mt-2 text-white/70">
                Rotamos inventario propietario y consignado con acuerdos oficiales de Xbox, Ninja y
                Shark. El carrusel refleja la rotacion mensual de la oferta.
              </p>
            </div>
            <div className="flex gap-2">
              {brandSlides.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Mostrar marca ${index + 1}`}
                  onClick={() => setActiveBrand(index)}
                  className={`h-2 w-10 rounded-full transition ${
                    activeBrand === index ? 'bg-[#0FB368]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
            {brandSlides.map((brand, index) => (
              <div
                key={brand.name}
                className={`${
                  activeBrand === index ? 'opacity-100 translate-x-0' : 'pointer-events-none opacity-0 -translate-x-5'
                } transition duration-700`}
              >
                {activeBrand === index && (
                  <div className={`p-10 bg-gradient-to-r ${brand.gradient}`}>
                    <p className="text-sm uppercase tracking-[0.4em] text-white/80">Brand focus</p>
                    <h3 className="mt-4 text-4xl font-black">{brand.name}</h3>
                    <p className="mt-4 text-lg text-white/80">{brand.tagline}</p>
                    <p className="mt-6 text-sm text-white/70">
                      Managed por Invercenter - Fulfillment Efectibo LLC
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0FB368]">Grupo corporativo iNC</p>
        <h2 className="mt-4 text-3xl font-bold text-white">Misma vision, dos unidades especializadas</h2>
        <p className="mt-4 text-white/70">
          Invercenter y Efectibo comparten gobierno corporativo, compliance financiero y una meta
          comun: conectar marcas globales con el mercado latino a la velocidad que exige el
          comercio digital B2B. Manten este enlace privado para acceder al catalogo preferencial.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0FB368] px-8 py-3 text-base font-semibold text-slate-900 shadow-soft transition hover:bg-[#0ca45c]"
        >
          Solicitar acceso autorizado
        </Link>
      </section>
    </div>
  )
}
