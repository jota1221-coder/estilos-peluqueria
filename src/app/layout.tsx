import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./gallery.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Estilos de Peluquería · Ejemplos de diseño";
const description =
  "3 estilos de página distintos para peluquerías y barberías — ejemplos de diseño para elegir dirección antes de construir a medida.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
