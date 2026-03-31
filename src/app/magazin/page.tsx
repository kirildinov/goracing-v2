import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Magazin Piese și Echipament Moto București | GoRacing",
  description: "Piese originale, accesorii și echipament moto de la branduri premium. Enduro, stradă, sport. Vizitează magazinul GoRacing în București.",
  alternates: { canonical: "/magazin" },
};

export default function MagazinPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/service-magazin.webp"
            alt="Magazin piese și echipament moto GoRacing"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="container-content relative z-10 py-16">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-3xl">
            Magazin Piese și Echipament Moto în București
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-4xl space-y-6 text-foreground leading-relaxed">
          <p>
            Cauți echipament moto sau accesorii pentru motociclete? La GoRacing găsești o ofertă variată, de la enduro la
            stradă, de la piese tehnice la echipament complet de protecție. Ca service autorizat și magazin specializat,
            oferim avantajul unic de a putea instala imediat orice produs pe care îl achiziționezi.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-8">Categorii de Produse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Piese motor și transmisie",
              "Consumabile (uleiuri, filtre, plăcuțe frână, bujii)",
              "Anvelope moto (stradă, sport, enduro, touring)",
              "Echipament protecție (căști, geci, pantaloni, cizme)",
              "Mănuși moto (vară, iarnă, racing)",
              "Accesorii (genti laterale, suporturi telefon, protecții)",
              "Piese caroserie și carenaje",
              "Sisteme de eșapament aftermarket",
            ].map((cat) => (
              <div key={cat} className="bg-muted rounded-md p-4 text-sm font-medium">{cat}</div>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-bold mt-8">Branduri</h2>
          <p>
            Lucrăm cu branduri premium recunoscute în industria moto: Ipone (uleiuri și produse chimice), Kenny (echipament
            enduro și off-road), Furygan (geci, mănuși și echipament road), Authentic Spirit (accesorii și piese custom).
            De asemenea, avem acces la cataloagele complete ale producătorilor OEM pentru piese originale.
          </p>

          <h2 className="font-heading text-2xl font-bold mt-8">Avantajul Nostru</h2>
          <p>
            Spre deosebire de un magazin online, la GoRacing poți încerca echipamentul, poți primi sfaturi personalizate de
            la mecanici cu experiență, și poți beneficia de montaj profesional pe loc. Cumperi anvelope? Le montăm și
            echilibrăm imediat. Cumperi un eșapament nou? Îl instalăm și reglăm pe dyno. Această integrare între magazin
            și service este avantajul principal al GoRacing.
          </p>
          <p>
            Dacă nu avem un produs în stoc, îl putem comanda pentru tine. Majoritatea pieselor ajung în 1-3 zile lucrătoare.
            Pentru piese rare sau specifice, timpul poate fi de 5-10 zile. Contactează-ne cu detalii despre ce cauți și te
            vom ajuta să găsești exact ce ai nevoie.
          </p>
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="container-content text-center">
          <h2 className="font-heading text-2xl font-bold text-secondary-foreground mb-4">
            Ai nevoie de piese sau echipament?
          </h2>
          <p className="text-secondary-foreground/80 mb-6">Sună-ne sau vino în magazin pentru consultanță personalizată.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+40761320240" className="btn-primary py-3 px-6">
              <Phone className="h-5 w-5" /> Sună: 0761.320.240
            </a>
            <Link href="/contact" className="btn-hero-secondary py-3 px-6">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
