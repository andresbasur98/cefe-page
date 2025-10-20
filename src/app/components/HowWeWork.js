"use client";
import { ClipboardCheck, Wrench, Bolt, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Header } from "./HeaderOverline";


export function Proceso() {
  const steps = [
    { icon: <ClipboardCheck className="h-5 w-5" />, title: "Análisis y presupuesto", text: "Visita técnica, mediciones y propuesta cerrada sin sorpresas." },
    { icon: <Wrench className="h-5 w-5" />, title: "Planificación técnica", text: "Memoria técnica, materiales, calendario y coordinación de obra." },
    { icon: <Bolt className="h-5 w-5" />, title: "Ejecución certificada", text: "Instalación conforme a REBT por instaladores autorizados." },
    { icon: <Shield className="h-5 w-5" />, title: "Verificación y mantenimiento", text: "Pruebas finales, documentación, garantías y plan de mantenimiento." },
  ];

  return (
    <section id="proceso" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Transparencia" title="Nuestro proceso de trabajo" />
      <ol className="mt-8 relative border-slate-200">
        {steps.map((s, i) => (
          <motion.li key={s.title}
            initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="group grid md:grid-cols-[40px_1fr] gap-4 py-4"
          >
            <div className="flex justify-center">
              <div className="h-10 w-10 rounded-full bg-blue-600/10 border border-blue-200 flex items-center justify-center">{s.icon}</div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{i+1}. {s.title}</h3>
              <p className="text-slate-700">{s.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
