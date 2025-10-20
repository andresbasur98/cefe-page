import { Header } from "./HeaderOverline";


export function Zonas() {
  const zonas = ["Madrid Centro", "Pozuelo de Alarcón", "Majadahonda", "Las Rozas", "Boadilla del Monte", "Villaviciosa de Odón", "Alcorcón", "Móstoles", "Aravaca", "Moncloa", "Chamberí", "Chamartín"];
  return (
    <section id="zonas" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Cobertura" title="Zonas de servicio en la Comunidad de Madrid" />
      <p className="mt-4 text-slate-700 max-w-3xl">
        Atendemos urgencias y proyectos en toda la Comunidad de Madrid. Si tu municipio no aparece, consúltanos.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {zonas.map(z => (
          <span key={z} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">{z}</span>
        ))}
      </div>
    </section>
  );
}
