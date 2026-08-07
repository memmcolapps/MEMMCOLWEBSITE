import type { Metadata } from "next";

/**
 * Canonical origin for the site. Override per-environment with
 * NEXT_PUBLIC_SITE_URL (e.g. a Vercel preview URL) so previews never emit
 * canonicals pointing at production.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://memmcol.com"
).replace(/\/$/, "");

export const siteName = "MEMMCOL";
export const legalName =
  "MOMAS Electricity Meters Manufacturing Company Limited";

export const siteDescription =
  "MEMMCOL manufactures smart prepaid and postpaid electricity meters, utility software and substation enhancement panels in Nigeria — with installation and support.";

export const contact = {
  email: "info@memmcol.com",
  phone: "+2349076661264",
  phoneDisplay: "+234 907 666 1264",
  street: "KM 40 Lagos/Ibadan Expressway, Orimerunmu",
  region: "Ogun State",
  country: "NG",
} as const;

export const socialProfiles = [
  "https://x.com/Momasmeters",
  "https://www.instagram.com/Momasmeters",
  "https://www.facebook.com/Momasmeters",
];

export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${siteName} — world-class metering, technology and innovation`,
};

type PageSeo = {
  title: string;
  description: string;
  /** Path with a leading slash, e.g. "/products". */
  path: string;
  keywords?: string[];
  /** Set for pages that should stay out of search results. */
  noIndex?: boolean;
};

/**
 * Build per-page metadata with a canonical URL and Open Graph/Twitter tags.
 * The title is passed through the root layout's `%s | MEMMCOL` template.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex,
}: PageSeo): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "website",
      url,
      siteName,
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage],
      locale: "en_NG",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [ogImage.url],
    },
  };
}
