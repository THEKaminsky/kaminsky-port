import type { MetadataRoute } from "next";
import { CONTACT } from "./contact";

/** Served at /robots.txt: everything is crawlable, and crawlers are pointed at the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${CONTACT.site}/sitemap.xml`,
  };
}
