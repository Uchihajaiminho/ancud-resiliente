import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
    title: "Sembrando Salud - Ancud",
    description: "Programa de Revitalización Biopsicosocial / Sembrando Salud. Infraestructura terapéutica de alta precisión.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.variable} font-sans antialiased text-gris-piedra bg-white`}>
                {children}
            </body>
        </html>
    );
}
