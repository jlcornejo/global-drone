import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globaldrone.cl"),
  title:
    "Global Drone - Soluciones Aéreas Profesionales | Certificados DGAC AOC Nº 1819",
  description:
    "Servicios profesionales de drones en Chile. Inspección industrial, topografía, agricultura de precisión, fotogrametría y producción audiovisual. Pilotos certificados por la DGAC.",
  keywords:
    "drones chile, DGAC, AOC 1819, inspección industrial, topografía, agricultura de precisión, fotogrametría, producción audiovisual, proyectos mineros, pilotos certificados",
  openGraph: {
    title: "Global Drone - Soluciones Aéreas Profesionales",
    description:
      "Líderes en inspección industrial, topografía y agricultura de precisión en Chile. Certificados DGAC AOC Nº 1819.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="font-sans">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0b1222",
              color: "#e2e8f0",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
      </body>
    </html>
  );
}
