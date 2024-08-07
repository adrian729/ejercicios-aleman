import Sidebar from '@/components/sidebar';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

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
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased flex h-screen overflow-hidden',
                    fontSans.variable,
                )}
            >
                <Sidebar />
                <main className="flex-grow px-12 py-6 overflow-y-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
