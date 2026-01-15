import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FestiveBanner } from "@/components/FestiveBanner";
import { FestiveDecorations } from "@/components/FestiveDecorations";
import { ThemeInfo } from "@/components/ThemeInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://mangalambakeries.com'),
  title: {
    default: "Mangalam Bakeries – Best Bakery & Cake Shop in Bhopal | Online Cake Delivery",
    template: "%s | Mangalam Bakeries Bhopal"
  },
  description: "Order fresh cakes, pastries & chocolates from Mangalam Bakeries, the most loved bakery in Bhopal. Custom cakes, Valentine specials & same-day delivery available across MP Nagar, Arera Colony, Kolar Road.",
  keywords: [
    "best bakery in Bhopal",
    "cake shop in Bhopal",
    "online cake delivery Bhopal",
    "custom cake Bhopal",
    "Valentine cake Bhopal",
    "birthday cake Bhopal",
    "eggless cake Bhopal",
    "midnight cake delivery Bhopal",
    "chocolate shop Bhopal",
    "MP Nagar bakery",
    "Arera Colony cake shop",
    "Kolar Road bakery"
  ],
  authors: [{ name: "Mangalam Bakeries" }],
  creator: "Mangalam Bakeries",
  publisher: "Mangalam Bakeries",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mangalambakeries.com",
    siteName: "Mangalam Bakeries",
    title: "Mangalam Bakeries – Best Bakery in Bhopal",
    description: "Premium cakes, pastries & chocolates delivered fresh across Bhopal. Valentine specials, custom cakes & same-day delivery.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mangalam Bakeries Bhopal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangalam Bakeries – Best Bakery in Bhopal",
    description: "Fresh cakes & chocolates delivered across Bhopal",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mangalambakeries.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Bhopal" />
        <meta name="geo.position" content="23.2599;77.4126" />
        <meta name="ICBM" content="23.2599, 77.4126" />
      </head>
      <body className={`${inter.className} hearts-bg`}>
        <ThemeProvider>
          <FestiveDecorations />
          <FestiveBanner />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <ThemeInfo />
        </ThemeProvider>
      </body>
    </html>
  );
}
