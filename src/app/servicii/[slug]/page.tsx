import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { ServiceContactCTA, ServicePhoneCTA, ServiceWhatsAppCTA } from "./ServiceDetailCTAs";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/servicii/${service.slug}` },
    openGraph: { type: "article" },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.schemaServiceType,
    provider: { "@type": "MotorcycleRepair", name: "GoRacing", url: "https://goracing.ro" },
    areaServed: { "@type": "City", name: "București" },
    description: service.schemaDescription,
  };

  const faqSchema = service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.name}
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container-content relative z-10 py-16">
          <Link href="/servicii" className="inline-flex items-center gap-1 text-primary-foreground/80 text-sm mb-4 hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Toate serviciile
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl">
            {service.h1}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-content max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {service.fullDescription.split("\n\n").map((p, i) => (
              <p key={i} className="text-foreground leading-relaxed mb-6">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-content max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Întrebări Frecvente
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div key={i} className="bg-card rounded-md p-6 shadow-go">
                  <h3 className="font-heading font-bold text-base text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-secondary section-padding">
        <div className="container-content text-center">
          <h2 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
            Programează-te pentru {service.name}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ServiceContactCTA />
            <ServicePhoneCTA />
            <ServiceWhatsAppCTA />
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
