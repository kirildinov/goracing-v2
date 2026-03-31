import Link from "next/link";
import Image from "next/image";
import { Phone, Star, ArrowRight, Shield, Award, Wrench, Clock } from "lucide-react";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const stats = [
  { icon: Clock, label: "Ani de Experiență", value: "15+" },
  { icon: Wrench, label: "Motociclete Reparate", value: "6500+" },
  { icon: Star, label: "Rating Google (280+ recenzii)", value: "4.8★" },
  { icon: Shield, label: "Service Autorizat R.A.R.", value: "R.A.R." },
];

export default function HomePage() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        type="image/webp"
        imageSrcSet="/hero-workshop-sm.webp 640w, /hero-workshop-lg.webp 1200w"
        imageSizes="100vw"
      />
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-workshop-lg.webp"
            srcSet="/hero-workshop-sm.webp 640w, /hero-workshop-lg.webp 1200w"
            sizes="100vw"
            alt="Atelier GoRacing - service moto București"
            className="absolute inset-0 w-full h-full object-cover"
            width={1200}
            height={675}
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container-content relative z-10 py-20">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 max-w-3xl">
            Service Moto Autorizat în București
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-8">
            Reparații, întreținere și tuning pentru orice marcă de motocicletă. Service oficial KTM. Autorizat R.A.R.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+40761320240" className="btn-primary text-base py-4 px-8">
              <Phone className="h-5 w-5" />
              Sună: 0761.320.240
            </a>
            <a
              href="https://wa.me/40761320240?text=Bun%C4%83,%20doresc%20s%C4%83%20fac%20o%20programare%20la%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary text-base py-4 px-8"
            >
              Scrie pe WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container-content py-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon className="h-6 w-6 text-primary-foreground/90 flex-shrink-0" />
              <div>
                <p className="font-heading font-bold text-xl text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/90 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Serviciile Noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicii/${service.slug}`} className="card-service group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 384px, 384px"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.shortDescription}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Află mai mult <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-content">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Ce Spun Clienții Noștri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-card rounded-md p-6 shadow-go">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm italic leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-heading font-bold text-sm text-foreground">— {t.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/KAo8hQ5F9wLTbVBY7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Verifică toate recenziile pe Google
            </a>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-content">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Partenerii Noștri
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { name: "Beta Motor", logo: "/beta_logo.webp" },
              { name: "KTM", logo: "/ktm_logo.webp" },
              { name: "ATVROM", logo: "/atvrom_logo.webp" },
              { name: "Ipone", logo: "/ipone_logo.webp" },
              { name: "Authentic Spirit", logo: "/ath_logo.webp" },
              { name: "Kenny", logo: "/kenny_logo.webp" },
              { name: "Furygan", logo: "/furygan_logo.webp" },
            ].map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="h-10 md:h-14 w-auto object-contain"
                loading="lazy"
                width={140}
                height={84}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary section-padding">
        <div className="container-content text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Ai Nevoie de Service Moto?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Programează-te telefonic sau trimite-ne un mesaj pe WhatsApp. Răspundem în cel mai scurt timp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+40761320240" className="btn-primary text-base py-4 px-8">
              <Phone className="h-5 w-5" />
              Sună Acum
            </a>
            <a
              href="https://wa.me/40761320240?text=Bună, doresc să fac o programare la service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary text-base py-4 px-8"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
