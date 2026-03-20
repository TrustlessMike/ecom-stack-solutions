import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce Tools - Best Shopify Apps, Email Marketing & Conversion Tools",
  description: "Discover the best ecommerce tools for Shopify apps, email marketing, conversion optimization, fulfillment software, and analytics. Expert reviews and comparisons.",
  keywords: "Shopify apps, email marketing ecommerce, product reviews, conversion optimization, fulfillment software, ecommerce analytics",
  authors: [{ name: "Ecommerce Tools" }],
  openGraph: {
    title: "Ecommerce Tools - Best Shopify Apps & Ecommerce Software",
    description: "Expert reviews of the best ecommerce tools for Shopify, email marketing, CRO, fulfillment, and analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Tools - Best Shopify Apps & Ecommerce Software",
    description: "Expert reviews of the best ecommerce tools for Shopify, email marketing, CRO, fulfillment, and analytics.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "googleaba55ef7f6fa4725",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <GoogleAnalytics gaId="G-ZBHJYTD4PX" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="text-2xl font-bold text-gray-900">Ecommerce Tools</div>
              <nav className="hidden md:flex space-x-8">
                <a href="/pillar/shopify-apps" className="text-gray-700 hover:text-gray-900">Shopify Apps</a>
                <a href="/pillar/email-marketing" className="text-gray-700 hover:text-gray-900">Email Marketing</a>
                <a href="/pillar/reviews-ugc" className="text-gray-700 hover:text-gray-900">Reviews & UGC</a>
                <a href="/pillar/conversions-cro" className="text-gray-700 hover:text-gray-900">CRO</a>
                <a href="/pillar/fulfillment" className="text-gray-700 hover:text-gray-900">Fulfillment</a>
                <a href="/pillar/analytics" className="text-gray-700 hover:text-gray-900">Analytics</a>
                <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Ecommerce Tools</h3>
                <p className="text-gray-400 text-sm">Expert reviews and comparisons of the best ecommerce tools for Shopify stores.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Pillar Pages</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/pillar/shopify-apps" className="hover:text-white">Shopify Apps</a></li>
                  <li><a href="/pillar/email-marketing" className="hover:text-white">Email Marketing</a></li>
                  <li><a href="/pillar/reviews-ugc" className="hover:text-white">Reviews & UGC</a></li>
                  <li><a href="/pillar/conversions-cro" className="hover:text-white">CRO</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/legal/privacy" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="/legal/terms" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="/legal/disclosure" className="hover:text-white">Affiliate Disclosure</a></li>
                  <li><a href="/legal/about" className="hover:text-white">About Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
                  <li><a href="/llms.txt" className="hover:text-white">LLMs.txt</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} Ecommerce Tools. All rights reserved.</p>
              <p className="mt-2">Disclosure: We earn commissions from qualifying purchases.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
