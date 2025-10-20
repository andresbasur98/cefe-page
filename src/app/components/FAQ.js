"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "./HeaderOverline";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Resolvemos tus dudas" title="Preguntas frecuentes" />
      <Accordion type="single" collapsible className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {[
          ["¿Atienden urgencias eléctricas?", "Sí, servicio de averías con respuesta rápida en Comunidad de Madrid."],
          ["¿Emitís boletines y certificados?", "Sí, somos instalador autorizado y tramitamos boletines, memorias y legalizaciones."],
          ["¿Tramitáis ayudas de autoconsumo?", "Podemos asesorarte y gestionar la documentación de subvenciones y compensación de excedentes."],
          ["¿Trabajáis con comunidades y empresas?", "Sí, contratos de mantenimiento, revisiones e inspecciones programadas."],
          ["¿Ofrecéis garantía?", "Sí, garantías por escrito y documentación completa al finalizar la obra."],
        ].map(([q, a], i) => (
          <AccordionItem key={i} value={`item-${i}`} >
            <AccordionTrigger className="px-4">{q}</AccordionTrigger>
            <AccordionContent className="px-4 text-slate-700">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
