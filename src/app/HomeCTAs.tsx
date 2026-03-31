"use client";

import { Phone } from "lucide-react";
import { track } from "@/lib/tracking";

export function HeroPhoneCTA() {
  return (
    <a
      href="tel:+40761320240"
      className="btn-primary text-base py-4 px-8"
      onClick={() =>
        track({ event: "cta_click", event_category: "hero", event_label: "phone" })
      }
    >
      <Phone className="h-5 w-5" />
      Sună: 0761.320.240
    </a>
  );
}

export function HeroWhatsAppCTA() {
  return (
    <a
      href="https://wa.me/40761320240?text=Bun%C4%83,%20doresc%20s%C4%83%20fac%20o%20programare%20la%20service."
      target="_blank"
      rel="noopener noreferrer"
      className="btn-hero-secondary text-base py-4 px-8"
      onClick={() =>
        track({ event: "cta_click", event_category: "hero", event_label: "whatsapp" })
      }
    >
      Scrie pe WhatsApp
    </a>
  );
}

export function BottomPhoneCTA() {
  return (
    <a
      href="tel:+40761320240"
      className="btn-primary text-base py-4 px-8"
      onClick={() =>
        track({ event: "cta_click", event_category: "cta_section", event_label: "phone" })
      }
    >
      <Phone className="h-5 w-5" />
      Sună Acum
    </a>
  );
}

export function BottomWhatsAppCTA() {
  return (
    <a
      href="https://wa.me/40761320240?text=Bună, doresc să fac o programare la service."
      target="_blank"
      rel="noopener noreferrer"
      className="btn-hero-secondary text-base py-4 px-8"
      onClick={() =>
        track({ event: "cta_click", event_category: "cta_section", event_label: "whatsapp" })
      }
    >
      WhatsApp
    </a>
  );
}

export function GoogleReviewsCTA() {
  return (
    <a
      href="https://maps.app.goo.gl/KAo8hQ5F9wLTbVBY7"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary text-sm"
      onClick={() =>
        track({
          event: "outbound_click",
          event_category: "testimonials",
          event_label: "google_reviews",
          link_url: "https://maps.app.goo.gl/KAo8hQ5F9wLTbVBY7",
        })
      }
    >
      Verifică toate recenziile pe Google
    </a>
  );
}
