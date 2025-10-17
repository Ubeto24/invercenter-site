import React from "react";

export default function CTAContact() {
  return (
    <section className="bg-[#243E90] text-white py-14">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">¿Listo para llevar tus pagos y data al siguiente nivel?</h3>
          <p className="text-white/80">Agendemos una reunión y construyamos el caso de negocio.</p>
        </div>
        <a href="/contact" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#243E90] hover:bg-gray-100">
          Agendar consulta
        </a>
      </div>
    </section>
  );
}

