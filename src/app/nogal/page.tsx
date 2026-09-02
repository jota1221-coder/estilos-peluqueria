import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";
import { DemoBar } from "@/components/DemoBar";
import { autorWhatsApp } from "@/lib/autor";

const CONTACTO = autorWhatsApp("Nogal — oscuro y dorado");

const SERVICIOS = [
  { nombre: "Corte clásico", desc: "Tijera y peine, la escuela de siempre.", img: "/fotos/nogal/serv-1.jpg", pos: "center 35%" },
  { nombre: "Fade", desc: "Degradé prolijo, terminación al detalle.", img: "/fotos/nogal/serv-2.jpg", pos: "center" },
  { nombre: "Barba", desc: "Perfilado a navaja con toalla caliente.", img: "/fotos/nogal/serv-3.jpg", pos: "center 40%" },
  { nombre: "Color y canas", desc: "Cobertura natural, sin que se note.", img: "/fotos/nogal/serv-4.jpg", pos: "center" },
];

const EQUIPO = [
  { nombre: "Martín", rol: "Barbero · corte clásico y barba", img: "/fotos/nogal/equipo-1.jpg", pos: "center 25%" },
  { nombre: "Diego", rol: "Estilista · fades y color", img: "/fotos/nogal/equipo-2.jpg", pos: "center 20%" },
];

export default function Nogal() {
  return (
    <main>
      <DemoBar tone="dark" />

      {/* NAV */}
      <nav className="fixed top-9 inset-x-0 z-40 backdrop-blur-sm border-b hairline" style={{ background: "rgba(12,10,8,0.85)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <p className="font-display text-2xl">Nogal</p>
          <div className="hidden md:flex h-full items-stretch gap-8">
            <a href="#servicios" className="nav-link flex items-center">Servicios</a>
            <a href="#equipo" className="nav-link flex items-center">Equipo</a>
            <a href="#academia" className="nav-link flex items-center">Academia</a>
            <a href="#ubicacion" className="nav-link flex items-center">Ubicación</a>
          </div>
          <a href="#ubicacion" className="cta-solid !py-3 !px-6 !text-xs">Reservar turno</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-52 pb-28 overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/fotos/nogal/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%", filter: "brightness(0.4) saturate(0.9)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(12,10,8,0.95) 0%, rgba(12,10,8,0.88) 45%, rgba(12,10,8,0.6) 100%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(180deg, transparent, #0C0A08)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">Peluquería &amp; Barbería · Martínez</p>
            <h1 className="font-display text-5xl lg:text-7xl leading-[1.02]">
              El oficio,<br /><span className="accent">bien hecho</span>.
            </h1>
            <span className="rule" />
            <p className="mt-8 text-lg max-w-xl" style={{ color: "var(--fg-muted)" }}>
              Corte, barba y color en un lugar donde el tiempo se toma en serio.
              Con academia propia para el que quiere aprender el oficio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#ubicacion" className="cta-solid">Reservar turno</a>
              <a href="#servicios" className="cta-outline">Ver servicios</a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/nogal/hero.jpg" alt="Interior de la barbería" priority aspect="aspect-[4/5]" position="center 45%" />
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">01 — Servicios</p>
            <h2 className="font-display text-3xl lg:text-5xl max-w-lg">
              Lo que hacemos <span className="accent">todos los días</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card h-full overflow-hidden">
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/3]" className="!border-0" position={s.pos} />
                  <div className="p-7">
                    <p className="font-display text-xl">{s.nombre}</p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
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
            <h2 className="font-display text-3xl lg:text-5xl max-w-lg">
              Los que te <span className="accent">atienden</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-3xl">
            {EQUIPO.map((m, i) => (
              <Reveal key={m.nombre} delay={i * 100}>
                <FramedPhoto src={m.img} alt={m.nombre} aspect="aspect-[4/5]" position={m.pos} />
                <p className="font-display text-2xl mt-5">{m.nombre}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>{m.rol}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* ACADEMIA */}
      <section id="academia" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-4">03 — Academia</p>
            <h2 className="font-display text-3xl lg:text-5xl leading-tight">
              Formate con <span className="accent">oficio real</span>.
            </h2>
            <span className="rule" />
            <p className="mt-8 leading-relaxed max-w-xl" style={{ color: "var(--fg-muted)" }}>
              Clases de barbería y peluquería profesional en el mismo local, en
              grupos chicos. Técnica de corte, barba y color — para el que se
              quiere dedicar a esto en serio, no para pasar el rato.
            </p>
            <a href="#ubicacion" className="cta-link mt-8">Consultar la próxima camada →</a>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/nogal/academia.jpg" alt="Clase en la academia" aspect="aspect-[4/5]" position="20% center" />
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-28" style={{ background: "var(--bg-alt)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-4">04 — Ubicación</p>
            <h2 className="font-display text-3xl lg:text-5xl leading-tight">
              Martínez,<br /><span className="accent">San Isidro</span>.
            </h2>
            <span className="rule" />
            <ul className="mt-10 space-y-6">
              <li className="pb-5 border-b hairline">
                <p>Paraná 1200</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Martínez, Buenos Aires</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p>Martes a sábado, 10 a 20 hs</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Domingo y lunes cerrado</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p>Con turno o por orden de llegada</p>
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
                src="https://www.google.com/maps?q=Martinez,+San+Isidro,+Buenos+Aires&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-32 relative overflow-hidden">
        <div className="glow-accent" aria-hidden />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow mb-6">05 — Este estilo</p>
          <h2 className="font-display text-4xl lg:text-6xl leading-tight">
            ¿Lo querés <span className="accent">para tu local</span>?
          </h2>
          <div className="flex justify-center mt-8"><span className="rule" /></div>
          <p className="mt-10 max-w-md mx-auto text-lg" style={{ color: "var(--fg-muted)" }}>
            &ldquo;Nogal&rdquo; no existe: es un ejemplo de dirección visual. La página real
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
            <p className="font-display text-2xl">Nogal</p>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Peluquería, barbería y academia. Ejemplo de estilo.
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
            <p>Paraná 1200</p>
            <p style={{ color: "var(--fg-muted)" }}>Martínez, Buenos Aires</p>
            <p className="mt-3" style={{ color: "var(--fg-muted)" }}>Mar a sáb · 10 a 20 hs</p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t hairline">
          <p className="text-center text-[11px] max-w-2xl mx-auto leading-relaxed px-6" style={{ color: "var(--fg-muted)" }}>
            Ejemplo de diseño — &ldquo;Nogal&rdquo; no es un negocio real: el nombre, los
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
