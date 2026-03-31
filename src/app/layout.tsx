import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";

const compiledCss = readFileSync(join(process.cwd(), "src/app/compiled.css"), "utf8");
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LazyCookieConsent } from "@/components/LazyComponents";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: "Service Moto Autorizat RAR București | GoRacing",
    template: "%s",
  },
  description: "Service moto autorizat RAR în București. Reparații, întreținere, diagnoză ECU, vulcanizare, dyno tuning și service oficial KTM. Sună: 0761.320.240",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    siteName: "GoRacing",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MotorcycleRepair",
  name: BUSINESS.name,
  image: `${BUSINESS.website}/logo.png`,
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: BUSINESS.hours.weekdays.open,
      closes: BUSINESS.hours.weekdays.close,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating.value,
    reviewCount: BUSINESS.rating.count,
  },
  priceRange: BUSINESS.priceRange,
  paymentAccepted: "Cash, Card",
  areaServed: { "@type": "City", name: BUSINESS.address.locality },
  sameAs: [BUSINESS.social.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/montserrat-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: compiledCss }} />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2"
          >
            Sari la conținut
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <LazyCookieConsent />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </body>
    </html>
  );
}
