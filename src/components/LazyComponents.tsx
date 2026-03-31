"use client";

import dynamic from "next/dynamic";

export const LazyCookieConsent = dynamic(() => import("@/components/CookieConsent"), {
  ssr: false,
});
