/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: "Small Business Starter",
  email: "info@caricoxpress.com",
  phoneForTel: "+58 414 1018217",
  phoneFormatted: "(+58) 414 1018217",
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: "Lic# 123456",
  address: {
    lineOne: "8239 NW ",
    lineTwo: "68th St",
    city: "Miami",
    state: "FL",
    zip: "33166",
    country: "US",
    mapLink: "https://maps.app.goo.gl/2SdbdGQMD87GRHyG6",
  },
  socials: {
    instagram: "https://www.instagram.com/caricoxpress/",
    google: "https://maps.app.goo.gl/2SdbdGQMD87GRHyG6",
  },
  domain: "https://www.caricoxpress.com",
} as const;

export type Client = typeof client;
