import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { services } from "@/data/services";
import { BUSINESS } from "@/data/business";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-content py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Image src="/logo.webp" alt="GoRacing" className="h-12 w-auto mb-4" width={310} height={95} />
          <p className="text-sm text-gray-300 leading-relaxed">
            Service moto autorizat RAR și service oficial KTM în București. Peste 15 ani de experiență
            în reparații, întreținere și tuning motociclete.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-secondary-foreground">Servicii</h3>
          <ul className="space-y-2">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicii/${s.slug}`}
                  className="text-sm text-gray-300 hover:text-primary hover:opacity-100 transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/servicii"
                className="text-sm text-secondary-foreground font-medium hover:text-primary transition-colors"
              >
                Toate serviciile →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-secondary-foreground">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>{BUSINESS.address.full}</span>
            </li>
            <li>
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                {BUSINESS.phoneFormatted}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-300">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <div>
                <p>{BUSINESS.hours.weekdays.label}</p>
                <p>Sâmbătă – Duminică: Închis</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold mb-4 text-secondary-foreground">Informații</h3>
          <ul className="space-y-2 mb-6">
            <li>
              <Link href="/despre-noi" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Despre Noi
              </Link>
            </li>
            <li>
              <Link href="/politica-confidentialitate" className="text-sm text-gray-300 hover:text-primary transition-colors">
                Politica de Confidențialitate
              </Link>
            </li>
          </ul>

          <h4 className="font-heading text-sm font-bold mb-3 text-secondary-foreground">Social</h4>
          <a
            href={BUSINESS.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors"
          >
            <Facebook className="h-5 w-5" />
            Facebook
          </a>

          <div className="mt-6">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(BUSINESS.whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-go-dark-lighter">
      <div className="container-content py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        <p>© {new Date().getFullYear()} {BUSINESS.name} | CUI: {BUSINESS.cui}</p>
        <Link href="/politica-confidentialitate" className="hover:text-primary transition-colors mt-1 md:mt-0">
          Politica de Confidențialitate
        </Link>
      </div>
      <div className="container-content"><div className="border-t border-go-dark-lighter" /></div>
      <p className="text-center text-xs text-gray-500 py-4">Website developed by Creative House.</p>
    </div>
  </footer>
);

export default Footer;
