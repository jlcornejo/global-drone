import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Drone - Servicios Profesionales con Drones",
  description:
    "Servicios especializados con drones para minería, agricultura, construcción y más. Grabación aérea profesional y monitoreo de obras.",
  keywords:
    "drones, servicios aéreos, minería, agricultura, construcción, grabación aérea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
