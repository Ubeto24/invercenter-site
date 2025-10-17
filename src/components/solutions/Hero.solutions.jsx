import React from "react";

export default function HeroSolutions() {
  return (
    <section className="relative overflow-hidden bg-[#243E90] text-white">
      <div className="absolute -right-24 -top-24 w-[480px] h-[480px] rounded-full bg-white/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Soluciones para pagos globales, blockchain y analítica avanzada
        </h1>
        <p className="mt-5 max-w-3xl text-white/80 text-lg">
          Diseñamos e integramos capacidades fintech de clase mundial: pagos y transferencias
          internacionales, cumplimiento regulatorio, trazabilidad sobre blockchain y
          decisiones basadas en datos con machine learning.
        </p>
      </div>
    </section>
  );
}

