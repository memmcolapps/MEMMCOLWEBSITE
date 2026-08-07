import { contact, legalName, pageMetadata, siteName, siteUrl } from "@/lib/seo";
import { FAQ_ITEMS } from "./faqs";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with MEMMCOL — call +234 907 666 1264, email info@memmcol.com, or visit us at KM 40 Lagos/Ibadan Expressway, Orimerunmu, Ogun State.",
  path: "/contactus",
  keywords: [
    "contact MEMMCOL",
    "MEMMCOL phone number",
    "MEMMCOL address",
    "buy prepaid meter Nigeria",
    "meter support",
  ],
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contactus#contactpage`,
  url: `${siteUrl}/contactus`,
  name: `Contact ${siteName}`,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  mainEntity: {
    "@type": "Organization",
    name: legalName,
    telephone: contact.phone,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      addressRegion: contact.region,
      addressCountry: contact.country,
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/contactus#faq`,
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactPageSchema, faqSchema]),
        }}
      />
      {children}
    </>
  );
}
