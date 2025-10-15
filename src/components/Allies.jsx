import React from "react";

const LOGOS = [
  { src: "/logos/ledger.svg", alt: "Ledger" },
  { src: "/logos/binance.svg", alt: "Binance" },
  { src: "/logos/coinbase.svg", alt: "Coinbase" },
  { src: "/logos/visa.svg", alt: "Visa" },
  { src: "/logos/mastercard.svg", alt: "MasterCard" },
  { src: "/logos/aws.svg", alt: "Amazon Web Services" },
];

export default function Allies() {
  const STRIP = [...LOGOS, ...LOGOS];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Aliados Estratégicos
          </h2>
          <p className="mt-2 text-gray-500">
            Integramos tecnologías de líderes globales para potenciar nuestras soluciones.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>

          <div className="flex w-[200%] animate-logos-scroll">
            {STRIP.map((logo, idx) => (
              <div
                key={`${logo.alt}-${idx}`}
                className="flex items-center justify-center h-20 sm:h-24 md:h-28 w-48 sm:w-56 md:w-64"
                aria-label={logo.alt}
                title={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain filter grayscale opacity-70"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
          Marcas y logotipos mostrados con fines referenciales. InverCenter USA Inc. no es partner oficial de estas empresas; integramos o utilizamos sus tecnologías cuando es requerido por los proyectos.
        </p>
      </div>
    </section>
  );
}

