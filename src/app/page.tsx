const ESTILOS = [
  {
    href: "/del-sur",
    nombre: "Barbería del Sur",
    etiqueta: "Premium clásico",
    desc: "Serif elegante, crema y vino — la barbería de toda la vida.",
    bg: "#F7F1E6",
    fg: "#2A1F17",
    accent: "#7A2331",
  },
  {
    href: "/fade",
    nombre: "Estudio Fade",
    etiqueta: "Urbano bold",
    desc: "Blanco y negro puro, tipografía condensada, un rojo cortante.",
    bg: "#0A0A0A",
    fg: "#FAFAFA",
    accent: "#E5342A",
  },
  {
    href: "/blanco",
    nombre: "Estudio Blanco",
    etiqueta: "Minimalista claro",
    desc: "Mucho aire, tipografía fina, un verde salvia apagado.",
    bg: "#FBFBF9",
    fg: "#232722",
    accent: "#6F8C61",
  },
];

export default function Gallery() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto px-6 py-24 flex-1 w-full">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/50">
          Estudio IT PyMEs — ejemplos
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
          3 estilos distintos para la misma idea: una peluquería.
        </h1>
        <p className="mt-6 text-white/60 max-w-xl leading-relaxed">
          No son negocios reales — son ejemplos de dirección visual para elegir
          antes de construir tu página a medida. Elegí uno para verlo completo.
        </p>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {ESTILOS.map((e) => (
            <a key={e.href} href={e.href} className="gallery-card group block">
              <div
                className="gallery-swatch aspect-[4/5] flex flex-col justify-between p-6"
                style={{ background: e.bg, color: e.fg }}
              >
                <div className="flex gap-2">
                  <span className="w-4 h-4 rounded-full" style={{ background: e.accent }} />
                  <span className="w-4 h-4 rounded-full border" style={{ borderColor: e.fg, opacity: 0.3 }} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
                    {e.etiqueta}
                  </p>
                  <p className="mt-2 text-2xl font-semibold leading-tight">{e.nombre}</p>
                </div>
              </div>
              <div className="p-5 bg-white/5">
                <p className="text-sm text-white/60 leading-relaxed">{e.desc}</p>
                <span className="mt-4 inline-block text-xs font-bold tracking-widest uppercase text-white group-hover:opacity-60 transition-opacity">
                  Ver estilo →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/10 py-8">
        <p className="text-center text-[11px] text-white/40 max-w-2xl mx-auto leading-relaxed px-6">
          Página de ejemplo — ninguno de los 3 estilos corresponde a un negocio real.
          Fotos de banco gratuito (Unsplash/Pexels).
        </p>
        <p className="text-center text-[10px] mt-3 tracking-widest uppercase text-white/40">
          Hecha por{" "}
          <a
            href={`https://wa.me/5491133905237?text=${encodeURIComponent(
              "Hola Joaquín! Vi los 3 estilos de ejemplo de peluquería"
            )}`}
            target="_blank"
            rel="noopener"
            className="underline underline-offset-4 hover:text-white transition-colors"
          >
            Joaquín Rao
          </a>
        </p>
      </footer>
    </main>
  );
}
