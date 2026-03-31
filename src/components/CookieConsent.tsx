"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "goracing_consent";

function gtag(..._args: unknown[]): void {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function grantConsent(): void {
  gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
}

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "granted") {
      grantConsent();
    } else if (!stored) {
      setVisible(true);
    }
    // "denied" → do nothing, consent stays at default denied
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    grantConsent();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] bg-secondary text-secondary-foreground shadow-[0_-2px_12px_rgba(0,0,0,0.2)]">
      <div className="container-content py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          Folosim cookie-uri pentru a analiza traficul site-ului.{" "}
          <Link
            href="/politica-confidentialitate"
            className="text-secondary-foreground underline hover:text-primary transition-colors"
          >
            Politica de Confidențialitate
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="btn-secondary text-sm py-2 px-4 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
          >
            Refuză
          </button>
          <button onClick={handleAccept} className="btn-primary text-sm py-2 px-4">
            Acceptă
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
