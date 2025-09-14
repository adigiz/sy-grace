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
  return (
    <html lang="en">
      <body className={`${rubik.variable} font-rubik antialiased`}>
        {children}
      </body>
    </html>
  );
}
