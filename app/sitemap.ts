import type { MetadataRoute } from "next";
import { CONTACT } from "./contact";

/** Served at /sitemap.xml. One page today; new routes get an entry here. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: CONTACT.site, changeFrequency: "monthly", priority: 1 }];
}
