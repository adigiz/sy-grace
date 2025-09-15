import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "SY Grace Caribbean West Indian Supermarket | Authentic Caribbean Foods & Fresh Seafood",
  description:
    "Authentic Caribbean supermarket in the Bronx featuring fresh Caribbean seafood, tropical produce, and traditional West Indian foods. Breadfruit, callaloo, red snapper & more.",
  keywords:
    "caribbean supermarket, west indian foods, caribbean seafood, tropical produce, breadfruit, callaloo, red snapper, mackerel, bronx supermarket",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Grocery",
    name: "SY Grace Caribbean West Indian Supermarket",
    description:
      "Authentic Caribbean supermarket with fresh seafood, tropical produce, and West Indian specialties",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4008 Boston Rd, Shopwell Plaza",
      addressLocality: "Bronx",
      addressRegion: "NY",
      postalCode: "10475",
    },
    telephone: "(718) 671-5544",
    openingHours: "Mo-Su 07:00-22:00",
    hasMenu: "https://sygrace.com/caribbean-menu",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${rubik.variable} font-rubik antialiased`}>
        {children}
      </body>
    </html>
  );
}
