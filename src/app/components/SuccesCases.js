import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Header } from "./HeaderOverline";


export function CasosExito() {
  const casos = [
    { img: "/inversor.png", title: "Autoconsumo 6 kW — Boadilla", text: "Instalación fotovoltaica con inversor híbrido y monitorización. Ahorro estimado: 55%." },
    { img: "/ribs.jpg", title: "Reforma eléctrica — Cafetería en Madrid", text: "Nuevo cuadro, líneas dedicadas y alumbrado LED según normativa." },
    { img: "/led.jpg", title: "LED + domótica — Vivienda en Pozuelo", text: "Escenas de iluminación, control por voz y optimización de potencia contratada." },
  ];

  return (
    <section id="casos" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Resultados" title="Casos de éxito" />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {casos.map(c => (
          <Card key={c.title} className="border-slate-200 bg-white overflow-hidden">
            <div className="relative h-44 w-full">
              <Image src={c.img} alt={c.title} fill className="object-cover" />
            </div>
            <CardHeader><CardTitle className="text-slate-900">{c.title}</CardTitle></CardHeader>
            <CardContent className="text-slate-700">{c.text}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
