import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "@/styles/base.css";
import "@/styles/fade.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estudio Fade · Ejemplo de estilo — Estudio IT PyMEs",
  description: "Ejemplo de diseño urbano bold para una barbería. No es un negocio real.",
  robots: { index: false, follow: false },
};

export default function FadeLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${sans.variable} contents`}>{children}</div>;
}
