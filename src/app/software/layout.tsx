import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Utility Software",
  description:
    "EMS, EMAC, Gridflex, MomasPay, Smart Breaker Controller and the MOMAS API — manage meters and customers, handle billing, vend secure tokens and monitor consumption remotely.",
  path: "/software",
  keywords: [
    "utility management software",
    "electricity billing software",
    "vending token software",
    "MOMAS API",
    "Gridflex",
    "MomasPay",
    "smart breaker controller",
  ],
});

export default function SoftwareLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
