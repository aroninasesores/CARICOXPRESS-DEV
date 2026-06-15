export const brand = {
  name: "CaricoXpress",
  tagline: "Envíos",
  tagline2: "Miami",
  tagline3: " → ",
  tagline4: "Caracas",
  description:
    "Infraestructura logística para conectar sus compras y cargas corporativas desde el exterior hasta Venezuela, con tarifas claras y total resguardo.",
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
