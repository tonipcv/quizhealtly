import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Longevify | Natural Treatments for Women Over 40",
  description: "Discover the best natural treatments for women over 40. Expert guidance on herbal remedies, light therapy, nutrition, and holistic wellness solutions for optimal health and longevity.",
  keywords: "natural treatments, women over 40, herbal remedies, light therapy, nutritional support, anti-aging, sleep enhancement, heart health, holistic wellness, natural healing",
  openGraph: {
    title: "Longevify | Natural Treatments for Women Over 40",
    description: "Expert guidance on natural treatments and holistic wellness solutions for women over 40",
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
    title: "Longevify | Natural Treatments for Women Over 40",
    description: "Expert guidance on natural treatments and holistic wellness solutions for women over 40",
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
        url: "/favicon.svg",
        type: "image/svg+xml"
      }
    ]
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="icon" 
          href="/favicon.svg" 
          type="image/svg+xml"
        />
      </head>
      <body className="font-satoshi antialiased">
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
