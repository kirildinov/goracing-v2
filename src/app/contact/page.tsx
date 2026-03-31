import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin, Clock, Facebook, ExternalLink } from "lucide-react";
import { BUSINESS } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact Service Moto București | GoRacing",
  description: "Contactează GoRacing pentru programări service moto în București. Telefon, WhatsApp, formular online. Bvd. Ion Ionescu de la Brad 4, Sector 1.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container-content">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground">
            Contactează-ne — Service Moto București
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground mb-6">Unde ne găsești</h2>

              <div className="rounded-lg overflow-hidden shadow-go mb-6">
                <iframe
                  src={BUSINESS.geo.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GoRacing pe Google Maps"
                  className="md:h-[400px]"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Adresă</p>
                    <p className="text-muted-foreground text-sm">{BUSINESS.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Program</p>
                    <p className="text-muted-foreground text-sm">{BUSINESS.hours.weekdays.label}</p>
                    <p className="text-muted-foreground text-sm">Sâmbătă – Duminică: Închis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a href={`tel:${BUSINESS.phone}`} className="text-primary text-sm">{BUSINESS.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href={`mailto:${BUSINESS.email}`} className="text-primary text-sm">{BUSINESS.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Facebook className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Facebook</p>
                    <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" className="text-primary text-sm">
                      facebook.com/GoRacing.ro
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-muted rounded-md p-4">
                <h3 className="font-heading font-bold text-sm mb-2">Cum ajungi la noi</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ne aflăm în zona Băneasa/Pipera, accesibil de pe Șoseaua București-Ploiești. Dispunem de parcare
                  pentru clienți.
                </p>
                <a
                  href={BUSINESS.geo.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2"
                >
                  Obține indicații <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
