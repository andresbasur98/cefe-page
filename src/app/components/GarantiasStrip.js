"use client";

import { ShieldCheck, FileCheck, BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function GarantiasStrip() {
  const items = [
    { Icon: ShieldCheck, color: "text-emerald-600", title: "Garantía por escrito", text: "Cobertura clara en piezas y mano de obra." },
    { Icon: FileCheck,  color: "text-blue-600",    title: "Instalador autorizado", text: "Cumplimiento REBT e ITCs. Boletines y legalizaciones." },
    { Icon: BadgeCheck, color: "text-amber-600",   title: "Seguro RC & PRL", text: "Trabajo responsable y seguro." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid md:grid-cols-3 gap-4">
        {items.map(({ Icon, color, title, text }) => (
          <Card key={title} className="bg-white border-slate-200">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-slate-100 p-2">
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-700">{text}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
