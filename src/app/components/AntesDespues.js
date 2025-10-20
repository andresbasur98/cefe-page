"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { Header } from "./HeaderOverline";


export function AntesDespues() {
  const containerRef = useRef(null);
  const [x, setX] = useState(50); // % visible

  return (
    <section id="antes-despues" className="mx-auto max-w-7xl px-4 py-12">
      <Header kicker="Transformaciones" title="Antes y después" />
      <div
        ref={containerRef}
        className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white select-none"
        onMouseMove={(e) => {
          const rect = containerRef.current?.getBoundingClientRect();
          if (!rect) return;
          const percent = ((e.clientX - rect.left) / rect.width) * 100;
          setX(Math.min(100, Math.max(0, percent)));
        }}
        onTouchMove={(e) => {
          const rect = containerRef.current?.getBoundingClientRect();
          if (!rect) return;
          const touch = e.touches[0];
          const percent = ((touch.clientX - rect.left) / rect.width) * 100;
          setX(Math.min(100, Math.max(0, percent)));
        }}
      >
        <Image src="/antes.png" alt="Instalación antes" fill className="object-cover" />
        <div className="absolute inset-0" style={{ width: `${x}%`, overflow: "hidden" }}>
          <Image src="/despues.png" alt="Instalación después" fill className="object-cover" />
        </div>
        <div className="absolute inset-y-0" style={{ left: `${x}%` }}>
          <div className="h-full w-0.5 bg-blue-600" />
          <div className="absolute -top-4 -translate-x-1/2 px-2 py-1 rounded bg-blue-600 text-white text-xs">Arrastra</div>
        </div>
      </div>
    </section>
  );
}
