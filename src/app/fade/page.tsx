import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";

const WHATSAPP_AUTOR = (estilo: string) =>
  `https://wa.me/5491133905237?text=${encodeURIComponent(
    `Hola Joaquín! Vi el estilo "${estilo}" y me interesa algo así para mi negocio`
  )}`;

const SERVICIOS = [
  { nombre: "Fade", desc: "Low, high, burst — la línea bien resuelta.", img: "/fotos/shared/servicio-fade.jpg" },
  { nombre: "Corte clásico", desc: "Tijera y peine, prolijo y directo.", img: "/fotos/shared/servicio-clasico.jpg" },
  { nombre: "Diseño", desc: "A mano alzada, lo que te imagines.", img: "/fotos/shared/servicio-diseno.jpg" },
  { nombre: "Barba", desc: "Perfilado a navaja, terminación filosa.", img: "/fotos/shared/servicio-barba.jpg" },
];

export default function Fade() {
  return (
    <main>
      <a
        href="/"
        className="fixed top-5 left-5 z-50 text-[11px] font-bold tracking-widest uppercase px-3 py-2 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        ← Otros estilos
      </a>

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm border-b hairline" style={{ background: "rgba(10,10,10,0.85)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-center">
          <p className="font-display text-3xl tracking-wide">ESTUDIO FADE</p>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="hero-pattern" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <Reveal>
            <p className="eyebrow">Barbería · Ejemplo de estilo</p>
            <div className="hero-title-wrapper mt-6">
              <div aria-hidden="true" className="hero-title-outline font-display text-6xl lg:text-8xl">
                CORTE CON<br />ACTITUD
              </div>
              <h1 className="hero-title-solid font-display text-6xl lg:text-8xl">
                CORTE CON<br />ACTITUD
              </h1>
            </div>
            <p className="mt-8 text-lg max-w-lg mx-auto" style={{ color: "var(--fg-muted)" }}>
              Fades marcados, diseños al límite. Acá el corte se nota desde
              la vereda de enfrente.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#servicios" className="cta-solid">Ver servicios</a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow">01 — SERVICIOS</p>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl">SIN VUELTAS</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card h-full overflow-hidden">
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/5]" className="!border-0 !border-b" />
                  <div className="p-6">
                    <p className="font-display text-2xl tracking-wide">{s.nombre.toUpperCase()}</p>
                    <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* PANEL invertido (blanco sobre negro → acá se invierte a blanco de fondo) */}
      <section className="py-28" style={{ background: "var(--bg-panel)", color: "var(--fg-panel)" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--fg-panel-muted)" }}>FILOSOFÍA</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight">
              NO COPIAMOS UN CORTE. LO HACEMOS TUYO.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-28">
        <div className="max-w-xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl lg:text-5xl">¿TE GUSTÓ ESTE ESTILO?</h2>
            <p className="mt-4" style={{ color: "var(--fg-muted)" }}>
              Es una dirección de ejemplo — se construye a medida de tu marca real.
            </p>
            <a href={WHATSAPP_AUTOR("Estudio Fade — urbano bold")} target="_blank" rel="noopener" className="cta-solid mt-8">
              Escribile a Joaquín
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t hairline py-10">
        <p className="text-center text-[11px] max-w-xl mx-auto px-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          Ejemplo de diseño — &quot;Estudio Fade&quot; no es un negocio real. Fotos de banco
          gratuito (Unsplash). Hecho por{" "}
          <a href={WHATSAPP_AUTOR("Estudio Fade — urbano bold")} target="_blank" rel="noopener" className="underline">
            Joaquín Rao
          </a>.
        </p>
      </footer>
    </main>
  );
}
