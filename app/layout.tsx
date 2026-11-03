import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Courier_Prime, Kalam, Source_Serif_4 } from "next/font/google";
import { CONTACT } from "./contact";
import "./globals.css";

// next/font downloads these at build time and serves them from this site,
// so visitors never make a request to Google.
const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const hand = Kalam({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// The typed layer: dates, captions and labels, like the typed tabs on an archive file.
const typed = Courier_Prime({
  variable: "--font-typed",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const title = "Rob Kaminsky, senior frontend & mobile engineer";
const description =
  "I code for people, not just for specs. Over ten years of React and React Native products, the design systems behind them, and the details that make them feel good to use.";

export const metadata: Metadata = {
  metadataBase: new URL(CONTACT.site),
  title,
  description,
  authors: [{ name: "Rob Kaminsky" }],
  creator: "Rob Kaminsky",
  openGraph: {
    title,
    description,
    url: CONTACT.site,
    siteName: "Rob Kaminsky",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${hand.variable} ${typed.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
