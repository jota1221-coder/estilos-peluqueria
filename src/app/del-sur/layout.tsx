import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/styles/base.css";
import "@/styles/del-sur.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
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
  title: "Barbería del Sur · Ejemplo de estilo — Estudio IT PyMEs",
  description: "Ejemplo de diseño premium clásico para una barbería. No es un negocio real.",
  robots: { index: false, follow: false },
};

export default function DelSurLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${sans.variable} contents`}>{children}</div>;
}
