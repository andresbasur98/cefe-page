'use client'
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "./HeaderOverline";


export function Equipo() {
  const staff = [
    { img: "/rafa.jpg", nombre: "Javier C.", rol: "Instalador autorizado", bio: "15 años en baja tensión, OCA y legalizaciones." },
    { img: "/marta.png", nombre: "Marta R.", rol: "Ing. eléctrica", bio: "Cálculo de cargas, fotovoltaica y domótica." },
    { img: "/luis.png", nombre: "Luis P.", rol: "Técnico mantenimiento", bio: "Averías 24/7, comunidades y locales." },
  ];

  return (
    <section id="equipo" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Personas" title="Nuestro equipo" />
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((p) => (
          <Card key={p.nombre} className="border-slate-200 bg-white overflow-hidden">
            <div className="relative h-52">
              <Image src={p.img} alt={p.nombre} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-slate-900">{p.nombre}</CardTitle>
              <p className="text-sm text-slate-600">{p.rol}</p>
            </CardHeader>
            <CardContent className="text-slate-700">{p.bio}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
