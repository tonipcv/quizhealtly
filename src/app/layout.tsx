import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LONGEVIFY | Transform Your Life Through Mindful Movement",
  description: "Discover personalized programs designed for sustainable weight management, improved mobility, and lasting vitality. Start your wellness journey today.",
  keywords: "longevify, weight management, mindful movement, wellness program, healthy lifestyle, longevity, body transformation, sustainable fitness",
  openGraph: {
    title: "LONGEVIFY | Transform Your Life Through Mindful Movement",
    description: "Personalized programs for sustainable weight management and lasting vitality",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LONGEVIFY Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LONGEVIFY | Transform Your Life Through Mindful Movement",
    description: "Personalized programs for sustainable weight management and lasting vitality",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=2",
        sizes: "any",
      },
      {
        url: "/icon.svg?v=2",
        type: "image/svg+xml",
      },
      {
        url: "/apple-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon" 
          href="/icon.svg" 
          type="image/svg+xml"
        />
        <link 
          rel="alternate icon" 
          href="/favicon.ico"
        />
      </head>
      <body className="font-satoshi antialiased">
        {children}
      </body>
    </html>
  );
}
