import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Ellipsis from "@/components/ui/ellipses";
import Footer from "@/components/navigation/footer";
import ConditionalNavbar from "@/components/navigation/conditionalNav";
import ConditionalReadySection from "./(homapage)/readySection/conditionalReadySection";
import {
  contact,
  legalName,
  ogImage,
  siteDescription,
  siteName,
  siteUrl,
  socialProfiles,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Smart Electricity Meters & Utility Software in Nigeria`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "MEMMCOL",
    "Momas meters",
    "prepaid meter Nigeria",
    "smart electricity meter",
    "electricity meter manufacturer Nigeria",
    "MomasPay",
    "utility management software",
    "postpaid meter",
    "substation enhancement panel",
    "meter installation Nigeria",
  ],
  authors: [{ name: legalName, url: siteUrl }],
  creator: legalName,
  publisher: legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} — Smart Electricity Meters & Utility Software in Nigeria`,
    description: siteDescription,
    images: [ogImage],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    site: "@Momasmeters",
    creator: "@Momasmeters",
    title: `${siteName} — Smart Electricity Meters & Utility Software in Nigeria`,
    description: siteDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: true, address: true, email: true },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#37925E",
  colorScheme: "light",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  legalName,
  alternateName: ["Momas", "Momas Meters"],
  url: siteUrl,
  logo: `${siteUrl}/icons/icon-512.png`,
  image: `${siteUrl}${ogImage.url}`,
  description: siteDescription,
  foundingDate: "1995",
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    addressRegion: contact.region,
    addressCountry: contact.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: contact.phone,
      email: contact.email,
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: ["en"],
    },
  ],
  sameAs: socialProfiles,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  inLanguage: "en-NG",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen flex flex-col overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
        <ConditionalNavbar />
        <Ellipsis />
        <main className="flex-1 pt-24">{children}</main>
        <ConditionalReadySection />
        <Footer />
      </body>
    </html>
  );
}
