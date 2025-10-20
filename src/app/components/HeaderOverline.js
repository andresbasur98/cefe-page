// Componente reutilizable para títulos de sección (tema claro)
export function Header({
  kicker,
  title,
  align = "left",
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
        {/* puedes cambiar el icono si quieres */}
        {/* <Sparkles className="h-3.5 w-3.5 text-blue-600" /> */}
        {kicker}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}
