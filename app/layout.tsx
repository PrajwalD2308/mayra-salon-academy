import "./globals.css";
import LayoutClient from "./LayoutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mayrasalonandacademy.com"),

  title: {
    default:
      "Best Unisex Salon & Makeup Academy in Amravati | Mayra Salon and Academy",
    template: "%s | Mayra Unisex Salon & Makeup Academy",
  },
  description:
    "Mayra Unisex Salon & Makeup Academy in Amravati offering bridal makeup, hair styling, skin treatments, and certified makeup artist courses. Book your appointment today.",
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
    url: "https://www.mayrasalonandacademy.com",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Amravati",
    "geo.position": "20.9374;77.7796",
    ICBM: "20.9374, 77.7796",
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
              url: "https://www.mayrasalonandacademy.com",
              telephone: "+919923603601",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Mayra unisex salon, Near Domino's front of Dussehra maidan Dominos, near, Badnera Rd, Amravati, Maharashtra 444605",
                addressLocality: "Amravati",
                addressRegion: "MH",
                postalCode: "444605",
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
