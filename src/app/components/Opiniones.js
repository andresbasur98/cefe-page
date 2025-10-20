"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Header } from "./HeaderOverline";
import { motion } from "framer-motion";
import { Star } from "lucide-react";



export function Opiniones() {
  const reviews = [
    { name: "Laura G.", text: "Nos instalaron placas solares y han sido rapidísimos. Ahorro real desde el primer mes.", stars: 5 },
    { name: "Carlos P.", text: "Detectaron una avería complicada en el cuadro y lo dejaron perfecto. Muy recomendables.", stars: 5 },
    { name: "María R.", text: "Trato cercano y presupuesto claro. La domótica nos simplificó la vida.", stars: 5 },
  ];
  return (
    <section id="opiniones" className="mx-auto max-w-7xl px-4 py-16">
      <Header kicker="Confianza" title="Opiniones de clientes" />
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {reviews.map(r => (
          <motion.div key={r.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="border-slate-200 bg-white h-full">
              <CardHeader className="space-y-1">
                <CardTitle className="text-slate-900">{r.name}</CardTitle>
                <div className="flex">
                  {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
              </CardHeader>
              <CardContent className="text-slate-700">{r.text}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
