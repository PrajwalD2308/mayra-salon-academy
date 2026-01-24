import "./globals.css";
import LayoutClient from "./LayoutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayrasalonacademy.com"),

  title: {
    default:
      "Mayra Unisex Salon & Makeup Academy | Services & Courses in Amravati",
    template: "%s | Mayra Unisex Salon & Makeup Academy",
  },
  description:
    "Mayra Unisex Salon & Makeup Academy in Amravati offers professional hair, skin, and makeup services along with certified makeup artist and beautician training courses.",
  keywords: [
    "Mayra Unisex Salon",
    "Makeup Academy in Amravati",
    "Unisex Salon in Amravati",
    "Makeup Artist Course in Amravati",
    "Beautician Course in Amravati",
    "Professional Makeup Services Amravati",
    "Salon Training Academy Amravati",
  ],
  authors: [{ name: "Mayra Unisex Salon & Makeup Academy" }],
  creator: "Mayra Unisex Salon & Makeup Academy",
  publisher: "Mayra Unisex Salon & Makeup Academy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title:
      "Mayra Unisex Salon & Makeup Academy | Services & Courses in Amravati",
    description:
      "Get premium salon & makeup services and learn professional makeup skills at Mayra Unisex Salon & Makeup Academy in Amravati.",
    url: "https://mayrasalonacademy.com",
    siteName: "Mayra Unisex Salon & Makeup Academy",
    images: [
      {
        url: "/images/Mayra_Logo.png",
        width: 1200,
        height: 630,
        alt: "Mayra Unisex Salon & Makeup Academy Amravati",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Mayra Unisex Salon & Makeup Academy",
              url: "https://mayrasalonacademy.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Amravati",
                addressRegion: "MH",
                addressCountry: "IN",
              },
              areaServed: "Amravati",
            }),
          }}
        />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
