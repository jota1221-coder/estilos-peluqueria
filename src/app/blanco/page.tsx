import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";

const WHATSAPP_AUTOR = (estilo: string) =>
  `https://wa.me/5491133905237?text=${encodeURIComponent(
    `Hola Joaquín! Vi el estilo "${estilo}" y me interesa algo así para mi negocio`
  )}`;

const SERVICIOS = [
  { n: "01", nombre: "Corte", desc: "Clásico o moderno, a tu medida.", img: "/fotos/shared/servicio-clasico.jpg" },
  { n: "02", nombre: "Fade", desc: "Degradé limpio, sin apuro.", img: "/fotos/shared/servicio-fade.jpg" },
  { n: "03", nombre: "Barba", desc: "Perfilado prolijo, a navaja.", img: "/fotos/shared/servicio-barba.jpg" },
  { n: "04", nombre: "Diseño", desc: "Detalles finos, a pedido.", img: "/fotos/shared/servicio-diseno.jpg" },
];

export default function Blanco() {
  return (
    <main>
      <a
        href="/"
        className="fixed top-5 left-5 z-50 text-[11px] font-medium tracking-widest uppercase px-3 py-2 hover:opacity-60 transition-opacity"
        style={{ color: "var(--fg)" }}
      >
        ← Otros estilos
      </a>

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm border-b hairline" style={{ background: "rgba(251,251,249,0.85)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-center">
          <p className="font-display text-xl tracking-[0.15em]">ESTUDIO BLANCO</p>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-48 pb-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <p className="eyebrow">Barbería · Ejemplo de estilo</p>
            <h1 className="mt-8 font-display text-5xl lg:text-6xl leading-[1.1]">
              Espacio, luz,<br />un buen corte.
            </h1>
            <p className="mt-8 max-w-md mx-auto" style={{ color: "var(--fg-muted)" }}>
              Sin ruido. Un ambiente pensado para que el corte sea lo único
              que importe un rato.
            </p>
            <div className="mt-10">
              <a href="#servicios" className="cta-outline">Ver servicios</a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <Reveal className="text-center">
            <p className="eyebrow">Servicios</p>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl">Lo esencial</h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card-minimal">
                  <span className="card-index">{s.n}</span>
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/5]" className="!border-0" />
                  <div className="pt-5">
                    <p className="font-display text-lg">{s.nombre}</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* PANEL */}
      <section className="py-28" style={{ background: "var(--bg-panel)" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--fg-panel-muted)" }}>Filosofía</p>
            <h2 className="mt-4 font-display text-2xl lg:text-3xl leading-relaxed">
              Menos elementos, más atención. Cada detalle está porque suma,
              no porque queda lindo.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-28">
        <div className="max-w-xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl lg:text-4xl">¿Te gustó este estilo?</h2>
            <p className="mt-4" style={{ color: "var(--fg-muted)" }}>
              Es una dirección de ejemplo — se construye a medida de tu marca real.
            </p>
            <a href={WHATSAPP_AUTOR("Estudio Blanco — minimalista claro")} target="_blank" rel="noopener" className="cta-solid mt-8">
              Escribile a Joaquín
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t hairline py-10">
        <p className="text-center text-[11px] max-w-xl mx-auto px-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          Ejemplo de diseño — &quot;Estudio Blanco&quot; no es un negocio real. Fotos de banco
          gratuito (Unsplash). Hecho por{" "}
          <a href={WHATSAPP_AUTOR("Estudio Blanco — minimalista claro")} target="_blank" rel="noopener" className="underline">
            Joaquín Rao
          </a>.
        </p>
      </footer>
    </main>
  );
}
