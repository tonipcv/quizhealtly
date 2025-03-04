export const metadata = {
  metadataBase: new URL('https://naturalbloom.com'),
  title: {
    default: 'NaturalBloom | Natural Treatments for Women Over 40',
    template: '%s | NaturalBloom'
  },
  description: 'Discover the best natural treatments for women over 40. Expert guidance on herbal remedies, light therapy, nutrition, and holistic wellness solutions.',
  keywords: [
    'natural treatments',
    'women over 40',
    'herbal remedies',
    'light therapy',
    'nutritional support',
    'anti-aging',
    'sleep enhancement',
    'heart health',
    'holistic wellness',
    'natural healing'
  ],
  authors: [{ name: 'NaturalBloom' }],
  creator: 'NaturalBloom',
  publisher: 'NaturalBloom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://naturalbloom.com',
    title: 'NaturalBloom | Natural Treatments for Women Over 40',
    description: 'Discover the best natural treatments for women over 40. Expert guidance on herbal remedies, light therapy, nutrition, and holistic wellness solutions.',
    siteName: 'NaturalBloom',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NaturalBloom - Natural Treatments for Women Over 40'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NaturalBloom | Natural Treatments for Women Over 40',
    description: 'Discover the best natural treatments for women over 40. Expert guidance on herbal remedies, light therapy, nutrition, and holistic wellness solutions.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
