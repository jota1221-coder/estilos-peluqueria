import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";

const WHATSAPP_AUTOR = (estilo: string) =>
  `https://wa.me/5491133905237?text=${encodeURIComponent(
    `Hola Joaquín! Vi el estilo "${estilo}" y me interesa algo así para mi negocio`
  )}`;

const SERVICIOS = [
  { nombre: "Corte clásico", desc: "Tijera y peine, el oficio de siempre.", img: "/fotos/shared/servicio-clasico.jpg" },
  { nombre: "Fade", desc: "Degradé prolijo, terminación perfecta.", img: "/fotos/shared/servicio-fade.jpg" },
  { nombre: "Barba", desc: "Perfilado a navaja, toalla caliente.", img: "/fotos/shared/servicio-barba.jpg" },
  { nombre: "Diseño", desc: "Líneas y detalles a mano alzada.", img: "/fotos/shared/servicio-diseno.jpg" },
];

export default function DelSur() {
  return (
    <main>
      <a
        href="/"
        className="fixed top-5 left-5 z-50 text-[11px] font-bold tracking-widest uppercase px-3 py-2 bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
      >
        ← Otros estilos
      </a>

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm border-b hairline" style={{ background: "rgba(247,241,230,0.9)" }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-center">
          <p className="font-display text-2xl">Barbería del Sur</p>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="eyebrow">Barbería · Ejemplo de estilo</p>
            <h1 className="mt-6 font-display text-5xl lg:text-7xl">
              Oficio de barbero,<br /><span className="accent-word">de verdad</span>.
            </h1>
            <div className="flex justify-center">
              <span className="rule-ornament"><span /></span>
            </div>
            <p className="mt-8 text-lg max-w-lg mx-auto" style={{ color: "var(--fg-muted)" }}>
              Cortes clásicos, barba a navaja y la charla de siempre. Sin apuro,
              con oficio de toda la vida.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
            <p className="eyebrow">01 — Servicios</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Lo de siempre, bien hecho</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card h-full overflow-hidden">
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/5]" className="!border-0 !border-b" />
                  <div className="p-6">
                    <p className="font-display text-xl">{s.nombre}</p>
                    <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-6xl mx-auto" />

      {/* PANEL */}
      <section className="py-28" style={{ background: "var(--bg-panel)", color: "var(--fg-panel)" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--fg-panel-muted)" }}>Filosofía</p>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl leading-snug">
              No vendemos un corte de diez minutos. Vendemos el rato que te
              tomás para vos.
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
            <a href={WHATSAPP_AUTOR("Barbería del Sur — premium clásico")} target="_blank" rel="noopener" className="cta-solid mt-8">
              Escribile a Joaquín
            </a>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t hairline py-10">
        <p className="text-center text-[11px] max-w-xl mx-auto px-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          Ejemplo de diseño — &quot;Barbería del Sur&quot; no es un negocio real. Fotos de banco
          gratuito (Unsplash). Hecho por{" "}
          <a href={WHATSAPP_AUTOR("Barbería del Sur — premium clásico")} target="_blank" rel="noopener" className="underline">
            Joaquín Rao
          </a>.
        </p>
      </footer>
    </main>
  );
}
