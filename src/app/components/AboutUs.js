"use client";


import {
    Sparkles, CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Quiénes somos" title="Empresa instaladora eléctrica autorizada en Madrid" />
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4 text-slate-700">
          <p>
            En <strong>CBS Eléctrica</strong> llevamos más de <strong>10 años</strong> realizando
            <strong> instalaciones eléctricas de baja tensión</strong>, mantenimiento preventivo y
            correctivo, legalizaciones y <strong>autoconsumo fotovoltaico</strong> en viviendas, locales y
            comunidades de propietarios.
          </p>
          <p>
            Somos <strong>instalador autorizado</strong>, emitimos <strong>boletines eléctricos</strong> y
            cumplimos la normativa vigente (REBT y ITCs), garantizando seguridad, eficiencia y una
            documentación técnica impecable.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Respuesta rápida y trato cercano",
              "Presupuestos claros y cerrados",
              "Garantías por escrito",
              "Seguro de RC y PRL al día",
            ].map(item => (
              <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-600" />{item}</li>
            ))}
          </ul>
        </div>
        <Card className="bg-white border-slate-200">
          <CardHeader><CardTitle className="text-slate-900">Certificaciones y documentación</CardTitle></CardHeader>
          <CardContent className="text-slate-700 space-y-3">
            <p>Boletines, memorias técnicas, certificados de instalación, OCA y legalizaciones.</p>
            <p>Gestión de subvenciones de autoconsumo y ayudas municipales cuando aplica.</p>
            <p>Plan de seguridad y salud. Entrega de manuales y garantías al finalizar.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
function Header({ kicker, title }) {
  return (
    <div>
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
        <Sparkles className="h-3.5 w-3.5 text-blue-600" /> {kicker}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
