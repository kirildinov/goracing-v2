"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const COOKIE_KEY = "goracing_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "consent_accepted" });
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] bg-secondary text-secondary-foreground shadow-[0_-2px_12px_rgba(0,0,0,0.2)]">
      <div className="container-content py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-80 text-center sm:text-left">
          Folosim cookie-uri pentru a analiza traficul site-ului.{" "}
          <Link href="/politica-confidentialitate" className="text-secondary-foreground underline hover:text-primary transition-colors">
            Politica de Confidențialitate
          </Link>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={handleReject} className="btn-secondary text-sm py-2 px-4 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
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
