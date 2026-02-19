import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liora Dermatology & Aesthetics | Upper East Side NYC",
  description:
    "Board-certified dermatologist Dr. Libby Rhee offers advanced cosmetic, medical, and surgical dermatology on the Upper East Side. 3,000+ five-star reviews.",
  keywords: [
    "dermatologist",
    "Upper East Side",
    "NYC",
    "cosmetic dermatology",
    "botox",
    "Sofwave",
    "Dr. Libby Rhee",
  ],
  openGraph: {
    title: "Liora Dermatology & Aesthetics",
    description:
      "Experience the best skin of your life. Board-certified dermatology on the Upper East Side.",
    url: "https://www.lioradermatology.com",
    siteName: "Liora Dermatology & Aesthetics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
