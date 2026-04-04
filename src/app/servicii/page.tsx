import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicii Moto București | Service Autorizat RAR | GoRacing",
  description: "Gamă completă de servicii moto: mecanică, ECU, vulcanizare, dyno tuning, custom cafe racer, restaurare clasice. Service autorizat RAR în București.",
  alternates: { canonical: "/servicii" },
};

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container-content">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Servicii Service Moto în București
          </h1>
          <p className="text-secondary-foreground/80 max-w-3xl leading-relaxed">
            GoRacing este un atelier de service moto complet, autorizat RAR, care oferă o gamă largă de servicii pentru
            toate mărcile de motociclete. De la întreținere de bază la recondiționări complete de motor, de la remapare
            ECU la construcții custom cafe racer — avem experiența, echipamentele și pasiunea necesare.
            Cu peste 20 ani de activitate în București și statut de service oficial KTM, Husqvarna, Gas Gas, MV Agusta, Beta, suntem alegerea profesională
            pentru motocicliștii care nu fac compromisuri. Folosim echipamente moderne de diagnoză, dinamometru
            profesional și piese originale sau de calitate echivalentă.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicii/${service.slug}`} className="card-service group flex flex-col md:flex-row">
                <div className="md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden flex-shrink-0 relative">
                  <Image
                    src={service.image}
                    alt={service.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h2 className="font-heading font-bold text-lg text-foreground mb-2">{service.name}</h2>
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
    </>
  );
}
