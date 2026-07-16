import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.vercel.app'),

  title: {
    default: 'Jeyaraaman K | Python Full Stack & AI Developer',
    template: '%s | Jeyaraaman K',
  },

  description:
    'Portfolio of Jeyaraaman K, Python Full Stack Developer specializing in Artificial Intelligence, Machine Learning, Computer Vision, Django, TensorFlow, OpenCV, and modern web development.',

  applicationName: 'Jeyaraaman Portfolio',

  keywords: [
    'Jeyaraaman K',
    'Python Developer',
    'Python Full Stack Developer',
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Django',
    'TensorFlow',
    'OpenCV',
    'YOLOv8',
    'Tesseract OCR',
    'Portfolio',
    'Software Engineer',
    'ECE',
  ],

  authors: [
    {
      name: 'Jeyaraaman K',
      url: 'https://github.com/jeyaraaman',
    },
  ],

  creator: 'Jeyaraaman K',
  publisher: 'Jeyaraaman K',

  category: 'Technology',

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

  openGraph: {
    title: 'Jeyaraaman K | Python Full Stack & AI Developer',

    description:
      'Portfolio showcasing Python Full Stack Development, Artificial Intelligence, Machine Learning and Computer Vision projects.',

    url: 'https://your-domain.vercel.app',

    siteName: 'Jeyaraaman Portfolio',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jeyaraaman K Portfolio',
      },
    ],
  },


  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans antialiased selection:bg-primary selection:text-primary-foreground">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}