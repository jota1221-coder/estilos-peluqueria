import type { Metadata } from "next";
import { Fraunces, Inter, Cormorant_Garamond } from "next/font/google";
import "@/styles/base.css";
import "@/styles/nogal.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Cara del header (logo + nav + título del hero) — la misma idea que
// Maccia: un serif fino y ornamentado, distinto del serif de los
// títulos de sección, para que el wordmark tenga carácter propio.
const header = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-header",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nogal Peluquería · Ejemplo de estilo — Estudio IT PyMEs",
  description: "Ejemplo de diseño oscuro y dorado para una peluquería o barbería. No es un negocio real.",
  robots: { index: false, follow: false },
};

export default function NogalLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${sans.variable} ${header.variable} contents`}>{children}</div>;
}
