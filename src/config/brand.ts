export const brand = {
  name: "CaricoXpress",
  tagline: "Envíos puerta a puerta",
  tagline2: "Miami",
  tagline3: " → ",
  tagline4: "Venezuela",
  description:
    "Envíos puerta a puerta desde Miami hasta Venezuela para compras, paquetes y carga comercial, con opciones aéreas, marítimas y casillero internacional.",
  url: "https://caricoxpress.com",
  locale: "es_VE",
  fonts: {
    body: "Archivo",
    display: "Plus Jakarta Sans",
  },
  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "9999px",
  },
} as const;

export type Brand = typeof brand;
