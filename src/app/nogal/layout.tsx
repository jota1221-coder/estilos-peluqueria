import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Nogal Peluquería · Ejemplo de estilo — Estudio IT PyMEs",
  description: "Ejemplo de diseño oscuro y dorado para una peluquería o barbería. No es un negocio real.",
  robots: { index: false, follow: false },
};

export default function NogalLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${sans.variable} contents`}>{children}</div>;
}
