"use client";

import Link from "next/link";
import {
Bolt
} from "lucide-react";
import { Button } from "@/components/ui/button";


// NAVBAR (alto fijo) + WRAPPER con padding-top
export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur shadow-sm border-b border-slate-200 h-16">
      <div className="mx-auto max-w-7xl h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bolt className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold tracking-wide">CBS Eléctrica</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
           <TopLink href="https://blog.cbselectrica.com/">Blog</TopLink> 
          <TopLink href="#servicios">Servicios</TopLink>
          <TopLink href="#sobre-nosotros">Sobre nosotros</TopLink>
          <TopLink href="#proceso">Cómo trabajamos</TopLink>
          <TopLink href="#zonas">Zonas</TopLink>
          <TopLink href="#casos">Casos de éxito</TopLink>
          <TopLink href="#opiniones">Opiniones</TopLink>
          <TopLink href="#faq">FAQ</TopLink>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="bg-blue-600 text-white hover:bg-blue-700 shadow">
            <a href="tel:+34652881789" aria-label="Llamar">Llámanos</a>
          </Button>
          <Button asChild size="sm" variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
            <a href="mailto:cbselectrica@gmail.com" aria-label="Escribir">Email</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

// Wrapper de página (usa <Navbar/> arriba)
export function PageWrapper({ children }) {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 pt-16">
      {children}
    </main>
  );
}

function TopLink({ href, children }) {
  return (
    <Link href={href} className="rounded-full px-3 py-1 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition">
      {children}
    </Link>
  );
}
