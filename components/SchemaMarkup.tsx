export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ecommerce Tools",
    "description": "Expert reviews and comparisons of the best ecommerce tools for Shopify stores",
    "url": "https://ecommerce-tools-affiliate.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ecommerce-tools-affiliate.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Ecommerce Tools Blog",
    "description": "Reviews and comparisons of ecommerce tools",
    "url": "https://ecommerce-tools-affiliate.vercel.app/blog"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
