import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ironmark Capital — A Long-Term Home for Great Businesses",
    template: "%s | Ironmark Capital",
  },
  description:
    "We partner with exceptional owners to preserve what works, improve what doesn't, and build companies meant to last. Long-term partners, not private equity.",
  metadataBase: new URL("https://ironmark.capital"),
  openGraph: {
    title: "Ironmark Capital — A Long-Term Home for Great Businesses",
    description:
      "We partner with exceptional owners to preserve what works, improve what doesn't, and build companies meant to last.",
    url: "https://ironmark.capital",
    siteName: "Ironmark Capital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ironmark Capital",
    description:
      "Long-term partners, not private equity. We buy great businesses and hold them.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PageTransition />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
