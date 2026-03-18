import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://isolatiekenner.nl"),
  title: {
    template: "%s | Isolatiekenner.nl",
    default: "Isolatie Kosten, Besparing & Subsidies 2026 | Isolatiekenner.nl",
  },
  description:
    "Ontdek alles over woningisolatie in Nederland. Vergelijk isolatievormen, bereken kosten en besparing, check ISDE subsidies en verbeter je energielabel. 100% gratis en onafhankelijk.",
  keywords: [
    "isolatie",
    "woningisolatie",
    "dakisolatie",
    "spouwmuurisolatie",
    "vloerisolatie",
    "energielabel",
    "ISDE subsidie",
    "kosten isolatie",
    "besparing isolatie",
  ],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://isolatiekenner.nl",
    siteName: "Isolatiekenner.nl",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://isolatiekenner.nl",
    languages: {
      "nl-NL": "https://isolatiekenner.nl",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        {/* Geo Meta Tags */}
        <meta name="geo.placename" content="Nederland" />
        <meta name="geo.position" content="52.1326;5.2913" />
        <meta name="ICBM" content="52.1326, 5.2913" />

        {/* Google Analytics - vervang G-XXXXXXX met je echte GA4 ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}} />
        */}

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://isolatiekenner.nl#website",
                  url: "https://isolatiekenner.nl",
                  name: "Isolatiekenner",
                  description:
                    "Vergelijk isolatie, bereken besparing en check subsidies",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://isolatiekenner.nl?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://isolatiekenner.nl#organization",
                  name: "Isolatiekenner",
                  url: "https://isolatiekenner.nl",
                  logo: "https://isolatiekenner.nl/logo.png",
                  description:
                    "100% onafhankelijk isolatieadvies en calculator",
                  sameAs: [],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-surface`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
