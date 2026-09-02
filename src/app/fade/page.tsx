import Image from "next/image";
import Reveal from "@/components/Reveal";
import { FramedPhoto } from "@/components/FramedPhoto";
import { DemoBar } from "@/components/DemoBar";
import { autorWhatsApp } from "@/lib/autor";

const CONTACTO = autorWhatsApp("Fade — negro y blanco urbano");

const SERVICIOS = [
  { nombre: "Fade", desc: "Low, high, burst — la línea bien resuelta.", img: "/fotos/fade/serv-1.jpg", pos: "center" },
  { nombre: "Barba", desc: "Perfilado a navaja, terminación filosa.", img: "/fotos/fade/serv-2.jpg", pos: "center 40%" },
  { nombre: "Diseño", desc: "Freestyle a mano alzada, lo que te imagines.", img: "/fotos/fade/serv-3.jpg", pos: "center" },
  { nombre: "Corte clásico", desc: "Tijera y peine, prolijo y directo.", img: "/fotos/fade/serv-4.jpg", pos: "center" },
];

const EQUIPO = [
  { nombre: "Nico", rol: "Barbero · fades y diseños", img: "/fotos/fade/equipo-1.jpg", pos: "center 30%" },
  { nombre: "Tomás", rol: "Barbero · clásico y barba", img: "/fotos/fade/equipo-2.jpg", pos: "center 25%" },
];

// Reseñas de ejemplo — textos genéricos, no citas reales de un negocio.
const RESEÑAS = [
  { nombre: "Franco D.", texto: "Los pibes son unos genios, siempre salgo con el corte que pedí." },
  { nombre: "Ezequiel V.", texto: "Buena onda y buen ambiente. Se nota que les gusta lo que hacen." },
  { nombre: "Lucas F.", texto: "Rápido, prolijo y sin vueltas. Como tiene que ser." },
];

export default function Fade() {
  return (
    <main>
      <DemoBar tone="dark" />

      {/* NAV */}
      <nav className="fixed top-9 inset-x-0 z-40 backdrop-blur-sm border-b hairline" style={{ background: "rgba(8,8,8,0.88)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <p className="font-display text-3xl tracking-wide">FADE CLUB</p>
          <div className="hidden md:flex h-full items-stretch gap-8">
            <a href="#servicios" className="nav-link flex items-center">Servicios</a>
            <a href="#equipo" className="nav-link flex items-center">Equipo</a>
            <a href="#academia" className="nav-link flex items-center">Academia</a>
            <a href="#resenas" className="nav-link flex items-center">Reseñas</a>
            <a href="#ubicacion" className="nav-link flex items-center">Ubicación</a>
          </div>
          <a href="#ubicacion" className="cta-solid !py-3 !px-6 !text-xs">Reservar turno</a>
        </div>
      </nav>

      {/* HERO — foto de fondo + líneas diagonales encima */}
      <section className="relative pt-52 pb-28 overflow-hidden">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/fotos/fade/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 40%", filter: "grayscale(1) brightness(0.34) contrast(1.1)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.86) 45%, rgba(8,8,8,0.55) 100%)" }}
          />
          <div className="hero-pattern" />
          <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(180deg, transparent, #080808)" }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-6">Barbería · Olivos</p>
            <div className="hero-title-wrapper">
              <div aria-hidden="true" className="hero-title-outline font-display text-6xl lg:text-8xl">
                CORTE CON<br />ACTITUD
              </div>
              <h1 className="hero-title-solid font-display text-6xl lg:text-8xl">
                CORTE CON<br />ACTITUD
              </h1>
            </div>
            <span className="rule" />
            <p className="mt-8 text-lg max-w-xl" style={{ color: "var(--fg-muted)" }}>
              Fades marcados, diseños al límite y barba a navaja. Acá el corte se
              nota desde la vereda de enfrente.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#ubicacion" className="cta-solid">Reservar turno</a>
              <a href="#servicios" className="cta-outline">Ver servicios</a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/fade/hero.jpg" alt="Corte en la barbería" priority aspect="aspect-[4/5]" position="center 30%" />
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* SERVICIOS */}
      <section id="servicios" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">01 — Servicios</p>
            <h2 className="font-display text-4xl lg:text-6xl">SIN VUELTAS</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 80}>
                <div className="card h-full overflow-hidden">
                  <FramedPhoto src={s.img} alt={s.nombre} aspect="aspect-[4/3]" className="!border-0" position={s.pos} />
                  <div className="p-7">
                    <p className="font-display text-2xl tracking-wide">{s.nombre}</p>
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
            <h2 className="font-display text-4xl lg:text-6xl">LA FAMILIA</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {EQUIPO.map((m, i) => (
              <Reveal key={m.nombre} delay={i * 100}>
                <FramedPhoto src={m.img} alt={m.nombre} aspect="aspect-[4/5]" position={m.pos} />
                <p className="font-display text-3xl mt-5 tracking-wide">{m.nombre}</p>
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
            <h2 className="font-display text-4xl lg:text-6xl leading-tight">
              APRENDÉ EL OFICIO
            </h2>
            <span className="rule" />
            <p className="mt-8 leading-relaxed max-w-xl" style={{ color: "var(--fg-muted)" }}>
              Curso de barbería desde cero: máquina, tijera, navaja y diseño.
              Grupos de seis, con modelo real desde la primera clase. Salís
              cortando, no mirando.
            </p>
            <a href="#ubicacion" className="cta-link mt-8">Consultar la próxima camada →</a>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={150}>
            <FramedPhoto src="/fotos/fade/academia.jpg" alt="Puestos de trabajo de la barbería" aspect="aspect-[4/5]" position="center" />
          </Reveal>
        </div>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* RESEÑAS */}
      <section id="resenas" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-4">04 — RESEÑAS</p>
            <h2 className="font-display text-4xl lg:text-6xl">LO QUE DICEN</h2>
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
                  <p className="mt-4 italic leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>
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
            <h2 className="font-display text-4xl lg:text-6xl leading-tight">OLIVOS</h2>
            <span className="rule" />
            <ul className="mt-10 space-y-6">
              <li className="pb-5 border-b hairline">
                <p>Corrientes 850</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Olivos, Buenos Aires</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p>Martes a sábado, 11 a 21 hs</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Domingo y lunes cerrado</p>
              </li>
              <li className="pb-5 border-b hairline">
                <p>Por orden de llegada</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>Escribinos y te decimos cómo viene la fila</p>
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
                src="https://www.google.com/maps?q=Olivos,+Buenos+Aires&output=embed"
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
        <div className="hero-pattern" aria-hidden />
        <Reveal className="relative max-w-2xl mx-auto px-6 text-center">
          <p className="eyebrow mb-6">06 — Este estilo</p>
          <h2 className="font-display text-5xl lg:text-7xl leading-tight">
            ¿LO QUERÉS PARA<br />TU LOCAL?
          </h2>
          <div className="flex justify-center mt-8"><span className="rule" /></div>
          <p className="mt-10 max-w-md mx-auto text-lg" style={{ color: "var(--fg-muted)" }}>
            &ldquo;Fade Club&rdquo; no existe: es un ejemplo de dirección visual. La página
            real se arma con tu marca, tus fotos y tus datos.
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
            <p className="font-display text-3xl tracking-wide">FADE CLUB</p>
            <p className="mt-6 leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Barbería y academia. Ejemplo de estilo.
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
            <p>Corrientes 850</p>
            <p style={{ color: "var(--fg-muted)" }}>Olivos, Buenos Aires</p>
            <p className="mt-3" style={{ color: "var(--fg-muted)" }}>Mar a sáb · 11 a 21 hs</p>
          </div>
        </div>
        <div className="mt-16 pt-10 border-t hairline">
          <p className="text-center text-[11px] max-w-2xl mx-auto leading-relaxed px-6" style={{ color: "var(--fg-muted)" }}>
            Ejemplo de diseño — &ldquo;Fade Club&rdquo; no es un negocio real: el nombre, los
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
