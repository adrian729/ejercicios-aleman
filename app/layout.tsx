import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Ejercicios alemán',
    description: 'Ejercicios para aprender alemán',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
