import {brand} from "./brand";
import {client} from "../data/client";

export const absoluteUrl = (path: string) => new URL(path, client.domain).toString();

export const seo = {
  home: {
    title: "Envíos Miami Venezuela",
    description:
      "CaricoXpress ofrece envíos puerta a puerta desde Miami a Venezuela, casillero internacional, carga aérea, carga marítima y consolidación de paquetes.",
  },
  services: {
    title: "Servicios de envíos Miami Venezuela",
    description:
      "Servicios logísticos desde Miami hacia Venezuela: envíos aéreos express, carga marítima consolidada, casillero internacional, prealertas y preparación de paquetes.",
  },
  about: {
    title: "Empresa de logística Miami Venezuela",
    description:
      "Conozca a CaricoXpress, empresa de logística y envíos puerta a puerta entre Miami y Venezuela, con atención personalizada y manejo seguro de carga.",
  },
  reviews: {
    title: "Reseñas de clientes",
    description:
      "Opiniones de clientes sobre los servicios de envíos Miami Venezuela, casillero internacional, carga aérea y carga marítima de CaricoXpress.",
  },
  blog: {
    title: "Blog de envíos e importaciones",
    description:
      "Guías y consejos sobre envíos desde Miami a Venezuela, compras online, casillero internacional, embalaje, carga aérea y carga marítima.",
  },
  contact: {
    title: "Contacto y cotizaciones",
    description:
      "Contacte a CaricoXpress para cotizar envíos desde Miami a Venezuela, resolver dudas sobre casillero internacional o solicitar información logística.",
  },
};

export const serviceCatalog = [
  {
    name: "Envíos aéreos express desde Miami a Venezuela",
    description:
      "Traslado rápido de paquetes y compras urgentes desde Miami hacia Venezuela con atención puerta a puerta.",
  },
  {
    name: "Carga marítima consolidada Miami Venezuela",
    description:
      "Servicio marítimo para mercancía pesada, cajas grandes, compras comerciales y carga de mayor volumen.",
  },
  {
    name: "Casillero internacional en Miami",
    description:
      "Dirección física en Miami para recibir compras online y preparar envíos hacia Venezuela.",
  },
  {
    name: "Prealerta y consolidación de paquetes",
    description:
      "Registro, identificación y agrupación de paquetes para optimizar costos y agilizar despachos.",
  },
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": absoluteUrl("/#localbusiness"),
  name: client.name,
  alternateName: brand.name,
  description: seo.home.description,
  url: client.domain,
  logo: absoluteUrl("/favicon.svg"),
  image: absoluteUrl("/og-image.png"),
  telephone: client.phoneForTel,
  email: client.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${client.address.lineOne} ${client.address.lineTwo}`,
    addressLocality: client.address.city,
    addressRegion: client.address.state,
    postalCode: client.address.zip,
    addressCountry: client.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "Place", name: "Miami" },
    { "@type": "Country", name: "Venezuela" },
    { "@type": "City", name: "Caracas" },
  ],
  sameAs: [client.socials.instagram, client.socials.google],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios logísticos de CaricoXpress",
    itemListElement: serviceCatalog.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: "Venezuela",
        provider: {
          "@id": absoluteUrl("/#localbusiness"),
        },
      },
    })),
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: brand.name,
  url: client.domain,
  inLanguage: "es-VE",
  publisher: {
    "@id": absoluteUrl("/#localbusiness"),
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: client.name,
  url: client.domain,
  logo: absoluteUrl("/favicon.svg"),
  sameAs: [client.socials.instagram, client.socials.google],
};

export const servicePageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Envíos Miami Venezuela",
  description: seo.services.description,
  provider: {
    "@id": absoluteUrl("/#localbusiness"),
  },
  areaServed: [
    { "@type": "Place", name: "Miami" },
    { "@type": "Country", name: "Venezuela" },
  ],
  hasOfferCatalog: localBusinessSchema.hasOfferCatalog,
};
