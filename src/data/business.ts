export const BUSINESS = {
  name: "GoRacing",
  legalName: "GoRacing SRL",
  cui: "22223887",
  address: {
    street: "Bulevardul Ion Ionescu de la Brad 4",
    locality: "București",
    region: "Sector 1",
    postalCode: "013813",
    country: "RO",
    full: "Bulevardul Ion Ionescu de la Brad 4, Sector 1, 013813 București",
  },
  phone: "+40761320240",
  phoneFormatted: "0761.320.240",
  email: "stefan@goracing.ro",
  whatsapp: {
    number: "40761320240",
    message: "Bună, doresc să fac o programare la service.",
  },
  hours: {
    weekdays: { open: "10:00", close: "18:00", label: "Luni – Vineri: 10:00 – 18:00" },
    saturday: null,
    sunday: null,
  },
  geo: {
    lat: 44.501782,
    lng: 26.0766354,
    placeId: "0x40b203ccf3387619:0x907bc408cb2c69f0",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.3!2d26.0740605!3d44.501782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203ccf3387619%3A0x907bc408cb2c69f0!2sGoRacing!5e0!3m2!1sro!2sro!4v1",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=44.501782,26.0766354",
  },
  social: {
    facebook: "https://www.facebook.com/GoRacing.ro/",
  },
  website: "https://goracing.ro",
  rating: { value: "4.8", count: "280" },
  priceRange: "$$",
} as const;
