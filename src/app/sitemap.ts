import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/software", priority: 0.9, changeFrequency: "monthly" },
  { path: "/electric", priority: 0.9, changeFrequency: "monthly" },
  { path: "/enhancementPanel", priority: 0.8, changeFrequency: "monthly" },
  { path: "/servicepage", priority: 0.8, changeFrequency: "monthly" },
  { path: "/aboutus", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contactus", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mediapage/mediasection", priority: 0.6, changeFrequency: "weekly" },
  { path: "/mediapage/csr", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacyPolicy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/termsOfUse", priority: 0.3, changeFrequency: "yearly" },
  { path: "/refundPolicy", priority: 0.3, changeFrequency: "yearly" },
  {
    path: "/limitation-of-liability",
    priority: 0.3,
    changeFrequency: "yearly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority, changeFrequency }) => ({
    // "/" resolves to the bare origin so it matches the canonical Next emits
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
