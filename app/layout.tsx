import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EchosLogic — Automate Your Trade Business",
  description:
    "EchosLogic automates scheduling, customer follow-ups, and invoicing for HVAC, plumbers, electricians, cleaners, and landscapers. Less admin. More revenue.",
  keywords: "trade business automation, HVAC scheduling, contractor invoicing, plumber software",
  openGraph: {
    title: "EchosLogic — Automate Your Trade Business",
    description: "Less admin. More revenue. Start free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} dark`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
