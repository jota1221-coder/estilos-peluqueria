import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "@/styles/base.css";
import "@/styles/vera.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
  title: "Vera Salón · Ejemplo de estilo — Estudio IT PyMEs",
  description: "Ejemplo de diseño blanco y negro elegante para un salón de belleza. No es un negocio real.",
  robots: { index: false, follow: false },
};

export default function VeraLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${display.variable} ${sans.variable} contents`}>{children}</div>;
}
