import { pageMetadata } from "@/lib/seo";

export default function NewsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}

export const metadata = pageMetadata({
  title: "News & Media",
  description:
    "The latest from MEMMCOL — factory visits, partnerships, product launches and press coverage of Nigeria's leading smart electricity meter manufacturer.",
  path: "/mediapage/mediasection",
  keywords: [
    "MEMMCOL news",
    "MOMAS meters press",
    "smart metering Nigeria news",
    "MEMMCOL media",
  ],
});
