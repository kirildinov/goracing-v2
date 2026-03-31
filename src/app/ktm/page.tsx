import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Oficial KTM București | GoRacing",
  description: "Service oficial KTM în București. Mecanici acreditați, piese originale, garanții și recall-uri. Programări: 0761.320.240",
  alternates: { canonical: "/ktm" },
  openGraph: { type: "article" },
};

const ktmSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Service Oficial KTM",
  provider: { "@type": "MotorcycleRepair", name: "GoRacing", url: "https://goracing.ro" },
  areaServed: { "@type": "City", name: "București" },
  description: "Service oficial KTM în București. Garanții, recall-uri, întreținere și reparații cu piese originale.",
};

export default function KTMPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container-content">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Service Oficial KTM în București
          </h1>
          <p className="text-secondary-foreground/80 text-lg">
            Mecanici acreditați KTM • Piese originale • Garanții și recall-uri
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-4xl">
          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              GoRacing este service oficial KTM în București, ceea ce înseamnă că suntem autorizați direct de producătorul
              austriac să efectuăm toate tipurile de lucrări pe motocicletele KTM: de la întreținere periodică și garanții,
              până la recall-uri și reparații complexe. Această acreditare confirmă că echipa noastră îndeplinește cele mai
              înalte standarde de competență tehnică impuse de KTM.
            </p>
            <p>
              Ca service oficial, avem acces la: software-ul de diagnoză KTM de ultimă generație, toate buletinele tehnice
              și actualizările software, baza de date completă cu specificații tehnice pentru fiecare model, piese originale
              KTM PowerParts cu livrare rapidă, training și certificare continuă din partea KTM.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-8">Modele KTM Deservite</h2>
            <p>
              Acoperim întreaga gamă KTM: seria Duke (125, 200, 390, 690, 790, 890, 1290 Super Duke R), seria Adventure
              (390, 790, 890, 1290 Super Adventure), seria RC (125, 200, 390), seria EXC și EXC-F (enduro/competiție),
              seria Freeride (250F, 350), precum și modelele SX și SX-F de motocross. Indiferent dacă aveți un Duke 125
              pentru oraș sau un 1290 Super Adventure pentru călătorii lungi, suntem pregătiți.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-8">Garanții și Recall-uri</h2>
            <p>
              Procesul de garanție KTM este simplu la GoRacing: aduceți motocicleta, diagnosticăm problema, și dacă aceasta
              intră sub incidența garanției, efectuăm reparația complet gratuit, folosind exclusiv piese originale KTM.
              Nu aveți niciun cost suplimentar. La fel și pentru recall-urile tehnice — verificăm baza de date KTM pentru
              motocicleta dumneavoastră și efectuăm toate actualizările necesare.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-8">Echipa Noastră KTM</h2>
            <p>
              Mecanicii noștri — Zdrobi și Ștefan — sunt cei mai vechi specialiști KTM acreditați din București, cu ani de
              experiență pe întreaga gamă de modele. Au participat la cursuri de formare KTM și au acces la cele mai noi
              tehnici de diagnoză și reparație. Comunicarea transparentă și atenția la detalii sunt valorile lor de bază
              — exact ceea ce clienții noștri apreciază cel mai mult, conform recenziilor.
            </p>

            <h2 className="font-heading text-2xl font-bold mt-8">Piese Originale KTM</h2>
            <p>
              Folosim exclusiv piese originale KTM PowerParts și KTM PowerWear. Avem un stoc permanent de consumabile
              și piese uzuale, iar piesele speciale le comandăm direct de la KTM cu livrare în 2-5 zile lucrătoare.
              Garanția pieselor originale vă oferă siguranța calității și compatibilității perfecte.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="container-content text-center">
          <h2 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
            Ai nevoie de service KTM?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary py-3 px-6">Programează-te</Link>
            <a href="tel:+40761320240" className="btn-hero-secondary py-3 px-6">
              <Phone className="h-5 w-5" /> 0761.320.240
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ktmSchema) }}
      />
    </>
  );
}
