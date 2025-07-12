import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import LocalBusinessSchema from "@/components/local-business-schema";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Houston IT Services | Managed IT Support & Cloud Solutions | YariTech",
    template: "%s | YariTech - Houston IT Services"
  },
  description: "Professional Houston IT services company providing enterprise-grade managed IT support, cloud computing, cybersecurity, and ERP solutions for Texas businesses. Certified professionals delivering proven results since 2020.",
  keywords: [
    "Houston IT services",
    "managed IT support Houston",
    "cloud computing Houston",
    "cybersecurity Houston",
    "ERP systems Houston",
    "IT consulting Houston TX",
    "network monitoring Houston",
    "data backup Houston",
    "IT support Texas",
    "managed services provider Houston",
    "Houston technology consulting",
    "business continuity Houston",
    "IT infrastructure Houston",
    "digital transformation Houston",
    "enterprise IT solutions"
  ],
  authors: [{ name: "YariTech", url: "https://yaritech.com" }],
  creator: "YariTech",
  publisher: "YariTech",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yaritech.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
    },
  },
  openGraph: {
    title: "Houston IT Services | Managed IT Support & Cloud Solutions | YariTech",
    description: "Professional Houston IT services company providing enterprise-grade managed IT support, cloud computing, cybersecurity, and ERP solutions for Texas businesses. Certified professionals delivering proven results since 2020.",
    url: "https://yaritech.com",
    siteName: "YariTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yaritech.com/hero-light.png",
        width: 1200,
        height: 630,
        alt: "YariTech Landing Page - Professional IT Services for Houston Businesses | Light Mode",
      },
      {
        url: "https://yaritech.com/hero-dark.png",
        width: 1200,
        height: 630,
        alt: "YariTech Landing Page - Professional IT Services for Houston Businesses | Dark Mode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston IT Services | Managed IT Support & Cloud Solutions | YariTech",
    description: "Professional Houston IT services company providing enterprise-grade managed IT support, cloud computing, cybersecurity, and ERP solutions for Texas businesses.",
    creator: "@yaritech",
    site: "@yaritech",
    images: [{
      url: "https://yaritech.com/hero-light.png",
      alt: "YariTech Landing Page - Professional IT Services for Houston Businesses"
    }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1", sizes: "32x32" },
      { url: "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1", sizes: "192x192" },
    ],
    apple: [
      { url: "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1", sizes: "180x180" },
    ],
    shortcut: "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "google-site-verification": "your-google-site-verification-code",
    "msvalidate.01": "your-bing-site-verification-code",
    "facebook-domain-verification": "your-facebook-domain-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocalBusinessSchema />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
