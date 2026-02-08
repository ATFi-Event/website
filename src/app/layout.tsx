import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATFi Protocol - Commitment-Backed Events on Base",
  description: "Turn intentions into actions with stake-based event commitments. Earn rewards for showing up, powered by Morpho yield on Base.",
  keywords: ["Web3", "Base", "Ethereum", "DeFi", "Commitment", "Events", "Staking", "Morpho"],
  openGraph: {
    title: "ATFi Protocol",
    description: "Stake to Commit, Show Up to Earn",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
