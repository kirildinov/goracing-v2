type TrackingEvent =
  | { event: "cta_click"; event_category: string; event_label: string; link_url?: string }
  | { event: "scroll_to_section"; event_category: string; section_id: string }
  | { event: "outbound_click"; event_category: string; event_label: string; link_url: string };

export function track(params: TrackingEvent): void {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(params);
  }
}
