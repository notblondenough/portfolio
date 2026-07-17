import type { Metadata, Viewport } from "next";
import { Overpass, Overpass_Mono, Source_Serif_4 } from "next/font/google";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

/*
 * Type casting, in the film-credits sense:
 * — Overpass descends from Highway Gothic, the typeface of US road
 *   signage — every heading is set in the letters of the interstate.
 * — Source Serif 4 carries the body copy in the register of a letter
 *   read aloud on a long drive.
 * — Overpass Mono stamps the dates and mile markers.
 */
const overpass = Overpass({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

const overpassMono = Overpass_Mono({
  variable: "--font-mono-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
};

export const viewport: Viewport = {
  themeColor: "#0f1120",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${overpass.variable} ${sourceSerif.variable} ${overpassMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
