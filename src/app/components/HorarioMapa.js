'use client'

import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { Header } from "./HeaderOverline";


export function HorarioMapa() {
  return (
    <section id="horario-mapa" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Dónde estamos" title="Horario y ubicación" />
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
          {/* Sustituye por tu GOOGLE MAPS embed real */}
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.4334392381725!2d-4.046318123490454!3d40.487797451310115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd419f7ff7a1b0fd%3A0x6c89fba4ca38cdfb!2sCBSelectrica!5e0!3m2!1ses!2ses!4v1760975671906!5m2!1ses!2ses" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="space-y-3 text-slate-700">
          <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-600" /> C. Arroyo de San Juan, 30 — 28210 Madrid</p>
          <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-blue-600" /> <a href="tel:+34652881789">+34 652 88 17 89</a></p>
          <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> <a href="mailto:cbselectrica@gmail.com">cbselectrica@gmail.com</a></p>
          <div className="mt-4">
            <p className="flex items-center gap-2"><Clock className="h-5 w-5 text-blue-600" /> L–V: 8:00–19:00 · S: 9:00–14:00</p>
            <p className="text-xs text-slate-500">* Urgencias 24/7 según disponibilidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
