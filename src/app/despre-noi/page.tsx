import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Award, Wrench, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Despre GoRacing | Service Moto Autorizat RAR București",
  description: "Peste 15 ani de experiență în service moto. Autorizat RAR, service oficial KTM, echipă de mecanici pasionați în București.",
  alternates: { canonical: "/despre-noi" },
  openGraph: { type: "article" },
};

export default function DespreNoiPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-workshop.webp"
            alt="Echipa GoRacing în atelier"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container-content relative z-10 py-16">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl">
            Despre GoRacing — Service Moto Autorizat în București
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-4xl space-y-6 text-foreground leading-relaxed">
          <p>
            GoRacing a fost fondată din pasiunea pură pentru motociclete. Ce a început ca un mic atelier dedicat
            întreținerii și reparațiilor moto a crescut, de-a lungul a peste 15 ani, într-unul dintre cele mai respectate
            service-uri de motociclete din București — autorizat RAR și service oficial KTM.
          </p>
          <p>
            Povestea noastră este una de dedicare constantă: de la primele motociclete reparate într-un garaj modest,
            până la sediul actual de pe Bulevardul Ion Ionescu de la Brad, echipat cu dinamometru profesional, echipamente
            de diagnoză computerizată de ultimă generație și o echipă de mecanici cu experiență vastă.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-8">Echipa Noastră</h2>
          <p>
            Zdrobi, Ștefan și Ovidiu formează nucleul echipei GoRacing — mecanici cu ani de experiență, certificați KTM,
            pasionați de motociclete și dedicați excelentei tehnice. Comunicarea transparentă și onestă cu fiecare client
            este principiul pe care îl prețuim cel mai mult. Nu recomandăm lucrări inutile și explicăm întotdeauna ce facem
            și de ce.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-8">Certificări și Autorizări</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {[
              { icon: Shield, title: "Autorizat R.A.R.", desc: "Registrul Auto Român — cele mai înalte standarde de calitate și siguranță" },
              { icon: Award, title: "Service Oficial KTM", desc: "Acreditat de KTM pentru garanții, recall-uri și service complet" },
              { icon: Star, title: "4.8★ pe Google", desc: "Peste 280 de recenzii de la clienți mulțumiți" },
              { icon: Wrench, title: "2000+ Motociclete", desc: "Experiență vastă cu toate mărcile și modelele" },
            ].map((cert) => (
              <div key={cert.title} className="bg-muted rounded-md p-6 flex items-start gap-4">
                <cert.icon className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-bold text-base">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-bold mt-8">Filosofia Noastră</h2>
          <p>
            La GoRacing, calitatea este mai importantă decât viteza. Preferăm să ne luăm timpul necesar pentru a face
            o lucrare impecabilă, decât să grăbim procesul și să compromitem rezultatul. Folosim exclusiv piese originale
            sau de calitate echivalentă, și oferim garanție pentru toate lucrările efectuate. Transparența în prețuri și
            comunicarea deschisă cu clienții sunt valori pe care nu le negociem.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-8">Locație</h2>
          <p>
            Sediul nostru se află pe Bulevardul Ion Ionescu de la Brad 4, în Sectorul 1 al Bucureștiului, în zona
            Băneasa/Pipera, ușor accesibil de pe Șoseaua București-Ploiești. Dispunem de parcare pentru clienți
            și de un spațiu de așteptare confortabil.
          </p>
        </div>
      </section>
    </>
  );
}
