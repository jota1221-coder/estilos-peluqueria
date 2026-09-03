import Image from "next/image";
import { autorWhatsApp } from "@/lib/autor";

const ESTILOS = [
  {
    href: "/nogal",
    nombre: "Nogal",
    rubro: "Peluquería & barbería",
    etiqueta: "Oscuro y dorado",
    desc: "Foto de fondo, serif con carácter y un dorado que aparece solo donde importa.",
    img: "/fotos/nogal/hero-bg.jpg",
    filtro: "brightness(0.55) saturate(0.95)",
    accent: "#D2924F",
  },
  {
    href: "/vera",
    nombre: "Vera",
    rubro: "Salón de belleza",
    etiqueta: "Blanco y negro elegante",
    desc: "Mucho aire, serif fina y fotos en blanco y negro que recuperan color al pasar el cursor.",
    img: "/fotos/vera/hero-bg.jpg",
    filtro: "grayscale(1) brightness(1.05)",
    accent: "#FFFFFF",
  },
  {
    href: "/fade",
    nombre: "Fade Club",
    rubro: "Barbería urbana",
    etiqueta: "Negro con líneas",
    desc: "Tipografía condensada, líneas diagonales en movimiento y monocromo puro.",
    img: "/fotos/fade/hero-bg.jpg",
    filtro: "grayscale(1) brightness(0.5) contrast(1.15)",
    accent: "#FAFAFA",
  },
];

export default function Gallery() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto px-6 py-24 flex-1 w-full">
        <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/50">
          Estudio IT PyMEs — ejemplos de diseño
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl leading-tight">
          Tres estilos para el mismo rubro.
        </h1>
        <p className="mt-6 text-white/60 max-w-xl leading-relaxed">
          Ninguno es un negocio real: son ejemplos completos, con servicios,
          equipo, academia y mapa, para elegir dirección visual antes de
          construir tu página a medida. Entrá a cualquiera.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {ESTILOS.map((e) => (
            <a key={e.href} href={e.href} className="gallery-card group block">
              <div className="gallery-swatch relative aspect-[4/5]">
                <Image
                  src={e.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  style={{ filter: e.filtro }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1"
                    style={{ background: e.accent, color: e.accent === "#D2924F" ? "#0C0A08" : "#111" }}
                  >
                    {e.etiqueta}
                  </span>
                  <p className="mt-3 text-3xl font-semibold text-white leading-tight">{e.nombre}</p>
                  <p className="text-sm text-white/60">{e.rubro}</p>
                </div>
              </div>
              <div className="p-5 bg-white/5">
                <p className="text-sm text-white/60 leading-relaxed">{e.desc}</p>
                <span className="mt-4 inline-block text-xs font-bold tracking-widest uppercase text-white group-hover:opacity-60 transition-opacity">
                  Ver la página completa →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/10 py-8">
        <p className="text-center text-[11px] text-white/40 max-w-2xl mx-auto leading-relaxed px-6">
          Los tres locales son ficticios: nombres, textos, equipo y direcciones
          son ilustrativos. Fotos de banco gratuito (Unsplash).
        </p>
        <p className="text-center text-[10px] mt-3 tracking-widest uppercase text-white/40">
          Hecho por{" "}
          <a
            href={autorWhatsApp("la galería de estilos")}
            target="_blank"
            rel="noopener"
            className="inline-block py-1.5 underline underline-offset-4 hover:text-white transition-colors"
          >
            Joaquín Rao
          </a>
        </p>
      </footer>
    </main>
  );
}
