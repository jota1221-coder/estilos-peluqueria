import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";
import { DemoBar } from "@/components/DemoBar";
import { autorWhatsApp } from "@/lib/autor";

const CONTACTO = autorWhatsApp("Vera — blanco y negro elegante");

const SERVICIOS = [
  { nombre: "Corte y estilo", desc: "Lectura de rostro y textura, no un corte de catálogo.", img: "/fotos/vera/serv-1.jpg", pos: "center 35%" },
  { nombre: "Color y mechas", desc: "Balayage, iluminaciones y matices a medida.", img: "/fotos/vera/serv-2.jpg", pos: "center 30%" },
  { nombre: "Color creativo", desc: "Fantasía y decoloración, con el pelo cuidado.", img: "/fotos/vera/serv-3.jpg", pos: "center 30%" },
  { nombre: "Tratamientos", desc: "Nutrición, botox capilar y alisados sin daño.", img: "/fotos/vera/serv-4.jpg", pos: "center" },
];

const EQUIPO = [
  { nombre: "Camila", rol: "Estilista · corte y peinado", img: "/fotos/vera/equipo-1.jpg", pos: "center 30%" },
  { nombre: "Sofía", rol: "Colorista · balayage y color creativo", img: "/fotos/vera/equipo-2.jpg", pos: "center 25%" },
];

// Reseñas de ejemplo — textos genéricos, no citas reales de un negocio.
const RESEÑAS = [
  { nombre: "Valentina G.", texto: "Excelente atención, el resultado siempre queda como lo pedí." },
  { nombre: "Martina L.", texto: "Un lugar prolijo y con buena onda. Se nota el cuidado en cada detalle." },
  { nombre: "Agustina P.", texto: "Volví varias veces y siempre con la misma calidad. Muy recomendable." },
];

export default function Vera() {
  return (
    <main>
      <DemoBar tone="light" />

      {/* NAV */}
      <nav className="fixed top-9 inset-x-0 z-40 backdrop-blur-sm border-b hairline" style={{ background: "rgba(250,248,246,0.9)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <p className="font-display text-3xl tracking-[0.18em]">VERA</p>
          <div className="hidden md:flex h-full items-stretch gap-8">
            <a href="#servicios" className="nav-link flex items-center">Servicios</a>
            <a href="#equipo" className="nav-link flex items-center">Equipo</a>
            <a href="#academia" className="nav-link flex items-center">Escuela</a>
            <a href="#resenas" className="nav-link flex items-center">Reseñas</a>
            <a href="#ubicacion" className="nav-link flex items-center">Ubicación</a>
          </div>
          <a href="#ubicacion" className="cta-solid !py-3 !px-6 !text-xs">Reservar turno</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-52 pb-28 overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/fotos/vera/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 35%", filter: "grayscale(1) brightness(1.05)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(250,248,246,0.97) 0%, rgba(250,248,246,0.9) 48%, rgba(250,248,246,0.5) 100%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(180deg, transparent, #FAF8F6)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">Salón de belleza · Vicente López</p>
            <h1 className="font-display text-6xl lg:text-8xl leading-[1.02]">
              El detalle<br />hace la <span className="italic">diferencia</span>.
            </h1>
            <span className="rule" />
            <p className="mt-8 text-lg max-w-lg" style={{ color: "var(--fg-muted)" }}>
              Corte, color y tratamientos en un espacio pensado para que la
              visita sea parte del resultado.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#ubicacion" className="cta-solid">Reservar turno</a>
              <a href="#servicios" className="cta-outline">Ver servicios</a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/vera/hero.jpg" alt="Peinado en el salón" priority aspect="aspect-[4/5]" position="center 30%" />
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">01 — Servicios</p>
            <h2 className="font-display text-4xl lg:text-6xl max-w-xl">
              Lo que hacemos, <span className="italic">bien</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card h-full overflow-hidden">
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/3]" className="!border-0" position={s.pos} />
                  <div className="p-7">
                    <p className="font-display text-2xl">{s.nombre}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm italic" style={{ color: "var(--fg-muted)" }}>Consultanos precios por WhatsApp.</p>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* EQUIPO */}
      <section id="equipo" className="py-28" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">02 — Equipo</p>
            <h2 className="font-display text-4xl lg:text-6xl max-w-xl">
              Las manos <span className="italic">detrás</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-3xl">
            {EQUIPO.map((m, i) => (
              <Reveal key={m.nombre} delay={i * 100}>
                <FramedPhoto src={m.img} alt={m.nombre} aspect="aspect-[4/5]" position={m.pos} />
                <p className="font-display text-3xl mt-5">{m.nombre}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>{m.rol}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* ESCUELA */}
      <section id="academia" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">03 — Escuela</p>
            <h2 className="font-display text-4xl lg:text-6xl leading-tight">
              Formación en <span className="italic">colorimetría</span>.
            </h2>
            <span className="rule" />
            <p className="mt-8 leading-relaxed max-w-xl" style={{ color: "var(--fg-muted)" }}>
              Cursos cortos de color, balayage y diagnóstico capilar, en el mismo
              salón y con clientas reales. Cupos limitados por camada para que
              cada alumna practique de verdad.
            </p>
            <a href="#ubicacion" className="cta-link mt-8">Consultar próximos cursos →</a>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/vera/academia.jpg" alt="Interior del salón" aspect="aspect-[4/5]" position="25% center" />
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* RESEÑAS */}
      <section id="resenas" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">04 — Reseñas</p>
            <h2 className="font-display text-4xl lg:text-6xl">
              Lo que dicen <span className="italic">en Google</span>.
            </h2>
            <div className="flex items-center gap-3 mt-6">
              <span className="text-2xl tracking-widest">★★★★★</span>
              <span className="text-sm" style={{ color: "var(--fg-muted)" }}>4.9 · reseñas de ejemplo</span>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {RESEÑAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <div className="card p-7 h-full flex flex-col">
                  <span className="tracking-widest">★★★★★</span>
                  <p className="mt-4 italic leading-relaxed flex-1 font-display text-lg">&ldquo;{r.texto}&rdquo;</p>
                  <p className="mt-5 eyebrow">{r.nombre}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-28" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">05 — Ubicación</p>
            <h2 className="font-display text-4xl lg:text-6xl leading-tight">
              Vicente <span className="italic">López</span>.
            </h2>
            <span className="rule" />
            <ul className="mt-10 space-y-6">
              <li className="pb-5 border-b hairline">
                <p>Av. del Libertador 2400</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Vicente López, Buenos Aires</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p>Martes a sábado, 9 a 19 hs</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Domingo y lunes cerrado</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p>Solo con turno previo</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Reservás por WhatsApp o Instagram</p>
              </li>
            </ul>
            <a href={CONTACTO} target="_blank" rel="noopener" className="cta-solid mt-10">
              Reservar turno
            </a>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={200}>
            <div className="aspect-[5/4] overflow-hidden border hairline">
              <iframe
                title="Mapa de la zona"
                src="https://www.google.com/maps?q=Vicente+Lopez,+Buenos+Aires&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-32">
        <Reveal className="max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow mb-6">06 — Este estilo</p>
          <h2 className="font-display text-5xl lg:text-7xl leading-tight">
            ¿Lo querés <span className="italic">para tu salón</span>?
          </h2>
          <div className="flex justify-center mt-8"><span className="rule" /></div>
          <p className="mt-10 max-w-md mx-auto text-lg" style={{ color: "var(--fg-muted)" }}>
            &ldquo;Vera&rdquo; no existe: es un ejemplo de dirección visual. La página real
            se arma con tu marca, tus fotos y tus datos.
          </p>
          <a href={CONTACTO} target="_blank" rel="noopener" className="cta-solid mt-12 !px-12 !py-5">
            Escribile a Joaquín
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t hairline pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-3xl tracking-[0.18em]">VERA</p>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Salón de belleza y escuela de color. Ejemplo de estilo.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-5">Servicios</p>
            {SERVICIOS.map((s) => (
              <p key={s.nombre} className="mt-1" style={{ color: "var(--fg-muted)" }}>{s.nombre}</p>
            ))}
          </div>
          <div>
            <p className="eyebrow mb-5">Ubicación</p>
            <p>Av. del Libertador 2400</p>
            <p style={{ color: "var(--fg-muted)" }}>Vicente López, Buenos Aires</p>
            <p className="mt-3" style={{ color: "var(--fg-muted)" }}>Mar a sáb · 9 a 19 hs</p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t hairline">
          <p className="text-center text-[11px] max-w-2xl mx-auto leading-relaxed px-6" style={{ color: "var(--fg-muted)" }}>
            Ejemplo de diseño — &ldquo;Vera&rdquo; no es un negocio real: el nombre, los
            textos, el equipo y la dirección son ilustrativos. Fotos de banco
            gratuito (Unsplash).
          </p>
          <p className="text-center mt-5">
            <a href={CONTACTO} target="_blank" rel="noopener" className="cta-link !text-[10px]">
              Hecho por Joaquín Rao · 2026
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
