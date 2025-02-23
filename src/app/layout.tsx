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
  title: "RH Pilates | Transform Your Life Through Mindful Movement",
  description: "Discover personalized Pilates programs designed for sustainable weight management, improved mobility, and lasting vitality. Start your wellness journey today.",
  keywords: "pilates, weight management, mindful movement, wellness program, healthy lifestyle, longevity, body transformation, sustainable fitness",
  openGraph: {
    title: "RH Pilates | Transform Your Life Through Mindful Movement",
    description: "Personalized Pilates programs for sustainable weight management and lasting vitality",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RH Pilates Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RH Pilates | Transform Your Life Through Mindful Movement",
    description: "Personalized Pilates programs for sustainable weight management and lasting vitality",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-satoshi antialiased">
        {children}
      </body>
    </html>
  );
}
