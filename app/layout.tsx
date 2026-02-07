import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "My Ecommerce Shop",
  description: "Ecommerce shop with various items to buy: from sweatshirts to smartphones",
  openGraph: {
    title: "Let's shop with My Ecommerce Shop!",
    description: "fast shipping, unique items and flawless shopping process only in My Ecommerce Shop!",
    siteName: "My Ecommerce Shop",
    locale: "en_US",
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar/>
        <main className="grow container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
