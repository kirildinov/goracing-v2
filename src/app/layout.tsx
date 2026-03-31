import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { BUSINESS } from "@/data/business";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="ro" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--background:0 0% 100%;--foreground:0 0% 13%;--primary:357 70% 46%;--primary-foreground:0 0% 100%;--secondary:0 0% 11%;--secondary-foreground:0 0% 100%;--muted:0 0% 96%;--muted-foreground:0 0% 40%;--border:0 0% 90%;--go-orange-hover:357 72% 40%;--go-dark:0 0% 11%;--go-dark-lighter:0 0% 17%;--go-whatsapp:142 70% 49%;--radius:0.375rem;--card:0 0% 100%;--card-foreground:0 0% 13%}
          *,::after,::before{box-sizing:border-box;border:0 solid hsl(var(--border))}
          body{margin:0;background-color:hsl(var(--background));color:hsl(var(--foreground));-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          .min-h-screen{min-height:100vh}.flex{display:flex}.flex-col{flex-direction:column}.flex-1{flex:1 1 0%}.items-center{align-items:center}.justify-between{justify-content:space-between}
          .sticky{position:sticky}.top-0{top:0}.z-50{z-index:50}.relative{position:relative}.absolute{position:absolute}.inset-0{inset:0}
          .bg-secondary{background-color:hsl(var(--secondary))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.bg-primary{background-color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}
          .h-16{height:4rem}.w-full{width:100%}.h-full{height:100%}.object-cover{object-fit:cover}
          .container-content{max-width:1200px;margin:0 auto;padding-left:1rem;padding-right:1rem}
          .shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.15\\)\\]{box-shadow:0 2px 8px rgba(0,0,0,.15)}
          .min-h-\\[60vh\\]{min-height:60vh}.py-20{padding-top:5rem;padding-bottom:5rem}
          .text-3xl{font-size:1.875rem;line-height:2.25rem}.font-bold{font-weight:700}.mb-4{margin-bottom:1rem}.max-w-3xl{max-width:48rem}
          .text-lg{font-size:1.125rem;line-height:1.75rem}.max-w-2xl{max-width:42rem}.mb-8{margin-bottom:2rem}
          .gap-4{gap:1rem}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}
          .flex-shrink-0{flex-shrink:0}.h-12{height:3rem}.w-auto{width:auto}
          .from-black\\/70{--tw-gradient-from:rgba(0,0,0,.7)}.to-black\\/50{--tw-gradient-to:rgba(0,0,0,.5)}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-from),var(--tw-gradient-to))}
          .z-10{z-index:10}.text-primary-foreground\\/80{color:rgba(255,255,255,.8)}
          .btn-primary{background-color:hsl(var(--primary));color:hsl(var(--primary-foreground));font-weight:600;padding:.75rem 1.5rem;border-radius:.5rem;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;text-decoration:none}
          .btn-hero-secondary{background-color:transparent;border:2px solid #fff;color:#fff;font-weight:600;padding:.75rem 1.5rem;border-radius:.5rem;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;text-decoration:none}
          .text-primary{color:hsl(var(--primary))}.h-5{height:1.25rem}.w-5{width:1.25rem}
          @media(min-width:768px){.md\\:h-20{height:5rem}.md\\:h-14{height:3.5rem}.md\\:min-h-\\[70vh\\]{min-height:70vh}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}.container-content{padding-left:1.5rem;padding-right:1.5rem}}
          @media(min-width:640px){.sm\\:flex-row{flex-direction:row}}
          .hidden{display:none}@media(min-width:1024px){.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:text-6xl{font-size:3.75rem;line-height:1}.container-content{padding-left:2rem;padding-right:2rem}}
        `}} />
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){var o=new MutationObserver(function(m){m.forEach(function(r){r.addedNodes.forEach(function(n){if(n.tagName==='LINK'&&n.rel==='stylesheet'&&n.href&&n.href.indexOf('/_next/')!==-1){n.media='print';n.onload=function(){this.media='all';this.onload=null};o.disconnect()}})})});o.observe(document.head,{childList:true})})();
        `}} />
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
          <CookieConsent />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </body>
    </html>
  );
}
