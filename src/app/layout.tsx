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

const siteUrl = "https://www.useatfi.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ATFi Protocol - Commitment-Backed Events on Base",
    template: "%s | ATFi Protocol",
  },
  description: "Turn intentions into actions with stake-based event commitments. Earn rewards for showing up, powered by DeFi yield on Base blockchain.",
  keywords: [
    "ATFi", "Base", "Ethereum", "DeFi", "Commitment", "Events", "Staking", 
    "Morpho", "Web3", "Blockchain", "Smart Contracts", "Event Commitment",
    "No-show penalty", "Yield farming", "USDC", "Cryptocurrency"
  ],
  authors: [{ name: "ATFi Protocol Team" }],
  creator: "ATFi Protocol",
  publisher: "ATFi Protocol",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ATFi Protocol",
    title: "ATFi Protocol - Stake to Commit, Show Up to Earn",
    description: "Commitment-backed events on Base. Stake tokens to register, earn yield while you wait, and get rewarded for showing up.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ATFi Protocol - Commitment-Backed Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATFi Protocol - Stake to Commit, Show Up to Earn",
    description: "Commitment-backed events on Base. Stake tokens, earn yield, get rewarded for showing up.",
    images: ["/og-image.png"],
    creator: "@atfi_protocol",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ATFi Protocol",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Commitment-backed events on Base blockchain. Stake tokens to register, earn yield while you wait, and get rewarded for showing up.",
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "ATFi Protocol",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
