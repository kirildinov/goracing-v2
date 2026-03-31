"use client";

import { track } from "@/lib/tracking";
import { ExternalLink } from "lucide-react";
import { BUSINESS } from "@/data/business";

export function DirectionsLink() {
  return (
    <a
      href={BUSINESS.geo.directionsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2"
      onClick={() =>
        track({ event: "cta_click", event_category: "contact_page", event_label: "directions" })
      }
    >
      Obține indicații <ExternalLink className="h-3 w-3" />
    </a>
  );
}

export function ContactPhoneLink() {
  return (
    <a
      href={`tel:${BUSINESS.phone}`}
      className="text-primary text-sm"
      onClick={() =>
        track({ event: "cta_click", event_category: "contact_page", event_label: "phone" })
      }
    >
      {BUSINESS.phone}
    </a>
  );
}

export function ContactEmailLink() {
  return (
    <a
      href={`mailto:${BUSINESS.email}`}
      className="text-primary text-sm"
      onClick={() =>
        track({ event: "cta_click", event_category: "contact_page", event_label: "email" })
      }
    >
      {BUSINESS.email}
    </a>
  );
}

export function ContactFacebookLink() {
  return (
    <a
      href={BUSINESS.social.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary text-sm"
      onClick={() =>
        track({
          event: "outbound_click",
          event_category: "contact_page",
          event_label: "facebook",
          link_url: BUSINESS.social.facebook,
        })
      }
    >
      facebook.com/GoRacing.ro
    </a>
  );
}
