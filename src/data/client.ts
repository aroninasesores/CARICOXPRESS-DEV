const whatsappMessage =
  "Hola, quisiera solicitar un presupuesto para un envío. ¿Me podrían dar más información?";

export const client = {
  name: "CaricoXpress",
  email: "info@caricoxpress.com",
  phoneForTel: "+584141018217",
  phoneFormatted: "(+58) 414 1018217",
  license: "",
  address: {
    lineOne: "8239 NW",
    lineTwo: "68th St",
    city: "Miami",
    state: "FL",
    zip: "33166",
    country: "US",
    mapLink: "https://maps.app.goo.gl/2SdbdGQMD87GRHyG6",
  },
  hours: [
    "Lunes - Viernes: 8:00 AM - 6:00 PM",
    "Sábado: 9:00 AM - 2:00 PM",
    "Domingo: Cerrado",
  ],
  socials: {
    instagram: "https://www.instagram.com/caricoxpress/",
    google: "https://maps.app.goo.gl/2SdbdGQMD87GRHyG6",
  },
  portal: {
    label: "Mi casillero",
    href: "/",
  },
  whatsapp: {
    number: "584141018217",
    message: whatsappMessage,
    href: `https://wa.me/584141018217?text=${encodeURIComponent(
      whatsappMessage,
    )}`,
  },
  domain: "https://www.caricoxpress.com",
} as const;

export type Client = typeof client;
