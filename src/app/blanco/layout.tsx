import type { Metadata } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "@/styles/base.css";
import "@/styles/blanco.css";

const display = Outfit({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-display",
  display: "swap",
});

const sans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estudio Blanco · Ejemplo de estilo — Estudio IT PyMEs",
  description: "Ejemplo de diseño minimalista claro para una barbería. No es un negocio real.",
  robots: { index: false, follow: false },
};

export default function BlancoLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${sans.variable} contents`}>{children}</div>;
}
