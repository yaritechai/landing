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
  title: "Houston IT Services | Managed IT Support & Cloud Solutions | YariTech",
  description: "Professional Houston IT services company providing enterprise-grade managed IT support, cloud computing, cybersecurity, and ERP solutions for Texas businesses. Certified professionals delivering proven results.",
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
    "managed services provider Houston"
  ],
  authors: [{ name: "YariTech" }],
  creator: "YariTech",
  publisher: "YariTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yaritech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Houston IT Services | Managed IT Support & Cloud Solutions | YariTech",
    description: "Professional Houston IT services company providing enterprise-grade managed IT support, cloud computing, cybersecurity, and ERP solutions for Texas businesses. Certified professionals delivering proven results.",
    url: "https://yaritech.com",
    siteName: "YariTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Houston IT Services | Managed IT Support & Cloud Solutions | YariTech",
    description: "Professional Houston IT services company providing enterprise-grade managed IT support, cloud computing, cybersecurity, and ERP solutions for Texas businesses.",
    creator: "@yaritech",
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
  icons: {
    icon: "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1",
    apple: "https://rd9rzh3qxh.ufs.sh/f/NUZrLWPd7wqS8q3nT4H0u2mQZfzoDwFiTjAaNkBehOYKdIX1",
  },
  verification: {
    google: "your-google-site-verification-code",
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
