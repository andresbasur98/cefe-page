import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} CBS Eléctrica — Todos los derechos reservados</p>
        <div className="flex items-center gap-3">
          <a href="https://maps.google.com/?q=C.+Arroyo+de+San+Juan,+30,+28210,+Madrid" target="_blank" rel="noreferrer" className="hover:text-slate-900 inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Madrid</a>
          <span className="select-none">•</span>
          <a href="mailto:cbselectrica@gmail.com" className="hover:text-slate-900 inline-flex items-center gap-1"><Mail className="h-4 w-4" /> Email</a>
          <span className="select-none">•</span>
          <a href="tel:+34652881789" className="hover:text-slate-900 inline-flex items-center gap-1"><Phone className="h-4 w-4" /> Teléfono</a>
        </div>
      </div>
    </footer>
  );
}
