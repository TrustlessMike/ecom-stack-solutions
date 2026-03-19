// JSON-LD Schema for Ecommerce Stack Solutions

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ecommerce Stack Solutions",
  "url": "https://ecomstacksolutions.com",
  "description": "Expert reviews of Shopify apps, email marketing, and conversion tools for ecommerce",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ecomstacksolutions.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ecommerce Stack Solutions",
  "url": "https://ecomstacksolutions.com",
  "description": "Ecommerce tool reviews and comparisons",
  "founder": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "dateFounded": "2026",
  "publishingPrinciples": "https://ecomstacksolutions.com/legal/terms"
};

export const articleSchema = (title: string, description: string, date: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "datePublished": date,
  "dateModified": date,
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ecommerce Stack Solutions",
    "url": "https://ecomstacksolutions.com"
  }
});

export const productReviewSchema = (productName: string, reviewBody: string, rating: number) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": productName,
  "description": reviewBody,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": rating,
    "bestRating": 5,
    "worstRating": 1
  }
});

export const faqSchema = (questions: Array<{q: string, a: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.a
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
