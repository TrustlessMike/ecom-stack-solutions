import HomeContent from '../components/HomeContent';

export const metadata = {
  title: 'Ecommerce Stack Solutions | Best Ecommerce Tools Reviews 2026',
  description: 'Independent, unbiased reviews of ecommerce tools. Compare platforms, email marketing, reviews, analytics, and shipping solutions.',
  keywords: 'ecommerce platforms, Shopify, WooCommerce, email marketing, product reviews, analytics, shipping software',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ecommerce Stack Solutions",
  "url": "https://ecomstacksolutions.com",
  "description": "Independent reviews and comparisons of ecommerce tools for online stores",
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stack Labs LLC",
    "url": "https://ecomstacksolutions.com"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
