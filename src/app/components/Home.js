"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-10 sm:pt-14">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            <span className="bg-gradient-to-br from-blue-700 via-slate-700 to-blue-500 bg-clip-text text-transparent">
              CBS Eléctrica
            </span>
            <span className="block mt-2 text-slate-700">
              Servicios eléctricos profesionales en Madrid
            </span>
          </motion.h1>

          <p className="mt-4 text-sm text-slate-600">
            Empresa instaladora autorizada en la Comunidad de Madrid · Baja tensión · Autoconsumo · Domótica.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }} className="mt-6 text-lg text-slate-700 max-w-xl"
          >
            Instalaciones, mantenimiento, energía solar y domótica con tiempos de respuesta rápidos, garantías claras y trato cercano.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="group bg-blue-600 text-white hover:bg-blue-700">
              <a href="#contacto">Solicitar presupuesto <Sparkles className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
              <a href="#por-que-nosotros">¿Por qué elegirnos?</a>
            </Button>
          </div>

          {/* Chips */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Chip icon={<MapPin className="h-5 w-5" />}>C. Arroyo de San Juan, 30 — 28210 Madrid</Chip>
            <Chip icon={<Mail className="h-5 w-5" />}>cbselectrica@gmail.com</Chip>
            <Chip icon={<Phone className="h-5 w-5" />}>+34 652 88 17 89</Chip>
          </div>

          {/* Barras pastel */}
          <div className="mt-8 space-y-2" aria-hidden>
            <Bar from="from-blue-500" to="to-blue-300" />
            <Bar from="from-amber-400" to="to-yellow-300" />
            <Bar from="from-emerald-500" to="to-green-300" />
            <Bar from="from-rose-500" to="to-red-300" />
          </div>
        </div>

        {/* Media */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-2xl">
            <Image src="/placas-solares.jpg" alt="Instalación de placas solares en vivienda" fill className="object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {["/bombillas.jpg","/placa.jpg","/central-electrica.jpg"].map((src, i) => (
              <div key={src} className="relative aspect-video overflow-hidden rounded-xl ring-1 ring-slate-200">
                <Image src={src} alt={`Trabajo eléctrico ${i+1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Chip({ icon, children }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm">
      <span className="text-slate-700">{icon}</span>
      <span className="truncate text-slate-700">{children}</span>
    </div>
  );
}
function Bar({ from, to }) {
  return <motion.div initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }}
    className={`h-2 w-full rounded-full bg-gradient-to-r ${from} ${to}`} />;
}
