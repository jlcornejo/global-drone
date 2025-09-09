import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Global Drone SPA - Certificados DGAC AOC 1819 | Servicios Profesionales con Drones",
  description:
    "Empresa chilena certificada por DGAC bajo AOC 1819. Servicios especializados con drones para minería, agricultura, construcción, inspecciones industriales y grabación aérea profesional.",
  keywords:
    "drones chile, DGAC, AOC 1819, servicios aéreos, minería, agricultura, construcción, grabación aérea, inspecciones industriales, pilotos certificados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
