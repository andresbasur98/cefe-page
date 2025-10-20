"use client";

import { motion } from "framer-motion";
import {
Bolt, Shield, Sun, Home,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "./HeaderOverline";

export function Servicios() {
  const data = [
    {
      icon: <Bolt className="h-6 w-6 text-blue-600" />,
      title: "Instalaciones y reformas eléctricas",
      bullets: [
        "Cuadros eléctricos y cableado estructurado",
        "Proyectos en viviendas, locales y comunidades",
        "Boletines y legalizaciones (REBT)",
        "Iluminación LED, tomas y circuitos adicionales",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      title: "Mantenimiento y averías 24/7",
      bullets: [
        "Diagnóstico rápido de fallos y cortocircuitos",
        "Revisiones periódicas y termografía",
        "Comunidades y pymes · Contratos de mantenimiento",
        "Cuadros, diferenciales, magnetotérmicos",
      ],
    },
    {
      icon: <Sun className="h-6 w-6 text-amber-500" />,
      title: "Energía solar fotovoltaica",
      bullets: [
        "Estudios de autoconsumo y amortización",
        "Instalación de paneles, inversores y baterías",
        "Monitorización y mantenimiento",
        "Tramitación de subvenciones y compensación de excedentes",
      ],
    },
    {
      icon: <Home className="h-6 w-6 text-slate-700" />,
      title: "Domótica y eficiencia energética",
      bullets: [
        "Iluminación inteligente y escenas",
        "Cargadores para vehículo eléctrico (EV)",
        "Gestión de consumos y optimización de potencia",
        "Integración con voz y apps (Home/Alexa)",
      ],
    },
  ];

  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Lo que mejor hacemos" title="Servicios eléctricos" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.map(card => (
          <motion.div key={card.title} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <Card className="h-full border-slate-200 bg-white">
              <CardHeader className="flex-row items-center gap-3">
                <div className="rounded-xl bg-slate-100 p-2.5">{card.icon}</div>
                <CardTitle className="text-slate-900">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  {card.bullets.map(b => (<li key={b} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600"/>{b}</li>))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
