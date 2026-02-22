import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// PromoBanner is now inside Header component

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
  metadataBase: new URL("https://www.lioradermatology.com"),
  title: {
    default: "Liora Dermatology & Aesthetics | Upper East Side NYC Dermatologist",
    template: "%s | Liora Dermatology & Aesthetics",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://www.lioradermatology.com",
              name: "Liora Dermatology & Aesthetics",
              description:
                "Board-certified dermatologist Dr. Libby Rhee offers advanced cosmetic, medical, and surgical dermatology on the Upper East Side of Manhattan.",
              url: "https://www.lioradermatology.com",
              telephone: "+1-212-433-4569",
              email: "hello@lioradermatology.com",
              image: "https://www.lioradermatology.com/images/dr-rhee.jpg",
              logo: "https://www.lioradermatology.com/images/liora-logo.png",
              priceRange: "$$-$$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "110 E 60th Street, Suite 800",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10022",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.7636,
                longitude: -73.9683,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "09:00",
                  closes: "16:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "3402",
                bestRating: "5",
              },
              medicalSpecialty: "Dermatology",
              hasMap:
                "https://maps.google.com/?q=110+E+60th+St+Suite+800+New+York+NY+10022",
              sameAs: [
                "https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480",
                "https://www.instagram.com/lioradermatology/",
                "https://www.facebook.com/lioradermatology/",
              ],
              founder: {
                "@type": "Physician",
                name: "Dr. Libby Rhee",
                jobTitle: "Board-Certified Dermatologist",
                medicalSpecialty: "Dermatology",
                description:
                  "DO, MS, FAAD — Clinical Instructor at Mount Sinai's Icahn School of Medicine with over 15 years of experience.",
                alumniOf: [
                  {
                    "@type": "EducationalOrganization",
                    name: "Icahn School of Medicine at Mount Sinai",
                  },
                ],
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
