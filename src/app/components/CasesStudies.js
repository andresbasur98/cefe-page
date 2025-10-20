// ⛳️ Sección: Casos de éxito
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Header } from "./HeaderOverline";


export function CaseStudies() {
  const cases = [
    {
      img: "/placas-solares.jpg",
      alt: "Instalación fotovoltaica en vivienda unifamiliar",
      title: "Autoconsumo 6 kWp — Boadilla del Monte",
      text: "Sistema con inversor híbrido y monitorización. Ahorro estimado del 55% anual.",
      tags: ["Fotovoltaica", "Residencial", "Autoconsumo"]
    },
    {
      img: "/placa.jpg",
      alt: "Cuadro y distribución en local comercial",
      title: "Reforma eléctrica integral — Cafetería en Madrid Centro",
      text: "Nuevo cuadro, iluminación LED y legalización con boletín.",
      tags: ["Reforma", "Comercial", "Boletín"]
    },
    {
      img: "/bombillas.jpg",
      alt: "Iluminación y domótica en vivienda",
      title: "Iluminación inteligente — Chalet en Pozuelo",
      text: "Escenas de luz, regulación y control por app/voz.",
      tags: ["Domótica", "Iluminación", "Eficiencia"]
    },
  ];

  return (
    <section id="casos" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Resultados" title="Casos de éxito recientes" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="overflow-hidden border-slate-200 bg-white">
              <div className="relative aspect-[16/10]">
                <Image src={c.img} alt={c.alt} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-900">{c.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 text-sm">
                <p>{c.text}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.tags.map(t => <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">{t}</span>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
