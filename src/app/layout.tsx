import type { Metadata } from "next";
import { Instrument_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Trove",
  description: "Back-of-house platform built for perishable-first businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${robotoMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans antialiased">{children}</body>
    </html>
  );
}
