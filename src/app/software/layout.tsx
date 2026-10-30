import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Utility Software",
  description:
    "Explore MEMMCOL software: the MEMMCOL API, Gridflex, Smart Breaker Controller and MomasPay for metering, network control and electricity payments.",
  path: "/software",
  keywords: [
    "utility management software",
    "electricity billing software",
    "vending token software",
    "MEMMCOL API",
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
