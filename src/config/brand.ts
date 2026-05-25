/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit when adapting the theme for a new client.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro 6 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Color format: use hex (#1a1a2e) or CSS color values.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ─────────────────────────────F─────────────────────────────
  name: "Caricoxpress",
  tagline: "Envíos",
  tagline2: "Miami",
  tagline3: " → ",
  tagline4: "Caracas",
  description:
    "Infraestructura logística para conectar sus compras y cargas corporativas desde el exterior hasta Venezuela, con tarifas claras y total resguardo.",
  url: "https://caricoxpress.com",
  locale: "es_VE",

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: "Archivo",
    display: "Plus Jakarta Sans",
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  // These values are written to CSS custom properties in theme.css.
  // Tailwind v4 @theme picks them up automatically.
  colors: {
    primary: "#0D2B55", // Azul Marino Ancla (Base corporativa)
    primaryLight: "#16437E", // Variación azul para hovers/acentos sutiles
    primaryFg: "#ffffff",

    accent: "#E85D20", // Naranja Refinado Principal (Acción/Llamados)
    accentFg: "#ffffff",

    background: "#ffffff",
    surface: "#F5F5F5", // Neutro Claro para fondos de secciones y tarjetas
    border: "#E2E8F0",

    text: "#0F172A", // Slate oscuro para máxima lectura
    textMuted: "#475569",

    dark: "#0D2B55", // Consistencia con el azul institucional oscuro
    darkSurface: "#091E3B",
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm: "0.375rem",
    md: "0.625rem",
    lg: "1rem",
    full: "9999px",
  },
} as const;

export type Brand = typeof brand;
