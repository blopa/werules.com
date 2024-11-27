import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    description: 'Discover a world of personalized workouts, expert guidance, and a supportive community with Musclog. Achieve your fitness goals with our comprehensive fitness app.',
    title: 'Musclog - Lift, Log, Repeat',
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
