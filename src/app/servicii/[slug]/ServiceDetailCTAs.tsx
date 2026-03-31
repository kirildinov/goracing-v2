"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { track } from "@/lib/tracking";

export function ServiceContactCTA() {
  return (
    <Link
      href="/contact"
      className="btn-primary py-3 px-6"
      onClick={() =>
        track({ event: "cta_click", event_category: "service_detail", event_label: "contact" })
      }
    >
      Programează-te Acum
    </Link>
  );
}

export function ServicePhoneCTA() {
  return (
    <a
      href="tel:+40761320240"
      className="btn-hero-secondary py-3 px-6"
      onClick={() =>
        track({ event: "cta_click", event_category: "service_detail", event_label: "phone" })
      }
    >
      <Phone className="h-5 w-5" />
      0761.320.240
    </a>
  );
}

export function ServiceWhatsAppCTA() {
  return (
    <a
      href="https://wa.me/40761320240?text=Bună, doresc să fac o programare la service."
      target="_blank"
      rel="noopener noreferrer"
      className="btn-hero-secondary py-3 px-6"
      onClick={() =>
        track({ event: "cta_click", event_category: "service_detail", event_label: "whatsapp" })
      }
    >
      WhatsApp
    </a>
  );
}
