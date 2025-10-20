"use client";

import {
  Phone, Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contacto() {
  return (
    <section id="contacto" className="relative border-t border-slate-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold">¿Hablamos?</h3>
          <p className="mt-1 text-slate-700">
            Pide tu presupuesto sin compromiso. Respondemos en menos de 24h.
          </p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
              <a href="tel:+34652881789" className="flex items-center gap-2"><Phone className="h-5 w-5" /> Llamar ahora</a>
            </Button>
            <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
              <a href="mailto:cbselectrica@gmail.com" className="flex items-center gap-2"><Mail className="h-5 w-5" /> Escribir email</a>
            </Button>
          </div>
        </div>

        {/* Formulario (frontend) */}
        <Card className="bg-white border-slate-200">
          <CardHeader><CardTitle className="text-slate-900">Presupuesto rápido</CardTitle></CardHeader>
          <CardContent>
            <form className="grid gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <Input required name="nombre" placeholder="Nombre y apellidos" />
                <Input required type="tel" name="telefono" placeholder="Teléfono" />
              </div>
              <Input required type="email" name="email" placeholder="Email" />
              <Input name="servicio" placeholder="Tipo de servicio (p. ej. instalación, avería, paneles solares…)" />
              <Textarea name="mensaje" placeholder="Cuéntanos brevemente qué necesitas" className="min-h-[120px]" />
              <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">Enviar solicitud</Button>
              <p className="text-xs text-slate-500">*Al enviar aceptas nuestra política de privacidad.</p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
