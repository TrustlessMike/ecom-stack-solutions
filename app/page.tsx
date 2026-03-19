import Link from 'next/link';
import { CheckCircle, BarChart3, ShoppingBag, Shield, Clock, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { FeatureCard, ArticleCard, ComparisonCard, CTAButton, TrustSignal, SectionHeading } from '@/components/ui';

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
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Trusted by 50,000+ store owners
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ecommerce Tools for Growing Stores
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Independent, unbiased reviews of the best ecommerce tools for online stores.
              Find the right platforms, email marketing, reviews, and analytics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/pillar/ecommerce-platforms" variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Browse Platforms
              </CTAButton>
              <CTAButton href="/pillar/email-marketing" variant="outline" size="lg">
                Browse Email Marketing
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustSignal 
              value="86" 
              label="In-depth articles" 
              icon={<BarChart3 className="h-6 w-6" />}
            />
            <TrustSignal 
              value="50+" 
              label="Ecommerce tools reviewed" 
              icon={<CheckCircle className="h-6 w-6" />}
            />
            <TrustSignal 
              value="100%" 
              label="Unbiased reviews" 
              icon={<Shield className="h-6 w-6" />}
            />
            <TrustSignal 
              value="2026" 
              label="Latest pricing data" 
              icon={<Clock className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Browse by Category" 
            subtitle="Find the right ecommerce solutions for your online store"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<ShoppingBag className="h-8 w-8" />}
              href="/pillar/ecommerce-platforms"
              title="Ecommerce Platforms"
              description="Online store builders and hosting. Shopify, WooCommerce, BigCommerce, and more."
            />
            <FeatureCard 
              icon={<TrendingUp className="h-8 w-8" />}
              href="/pillar/email-marketing"
              title="Email Marketing"
              description="Email automation, newsletters, and campaigns. Klaviyo, Mailchimp, Omnisend, and others."
            />
            <FeatureCard 
              icon={<Star className="h-8 w-8" />}
              href="/pillar/reviews"
              title="Product Reviews"
              description="Review collection and display apps. Yotpo, Judge.me, Loox, and review platforms."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-8 w-8" />}
              href="/pillar/analytics"
              title="Analytics & Reporting"
              description="Store analytics, conversion tracking, and business intelligence tools."
            />
            <FeatureCard 
              icon={<ShoppingBag className="h-8 w-8" />}
              href="/pillar/shipping"
              title="Shipping & Fulfillment"
              description="Shipping software, label printing, and order fulfillment solutions."
            />
            <FeatureCard 
              icon={<CheckCircle className="h-8 w-8" />}
              href="/pillar/conversion"
              title="Conversion Optimization"
              description="A/B testing, popups, and CRO tools to boost your store's conversion rate."
            />
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Latest Articles" 
            subtitle="Fresh insights and comparisons to help you choose the right ecommerce tools"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard 
              href="/blog"
              category="Comparison"
              title="Shopify vs WooCommerce: Which Platform Wins? (2026)"
              excerpt="Complete comparison of the two leading ecommerce platforms. Which one is right for your store?"
              date="Mar 2026"
            />
            <ArticleCard 
              href="/blog"
              category="Comparison"
              title="Klaviyo vs Mailchimp: Email Marketing Showdown"
              excerpt="Feature-by-feature comparison of Klaviyo and Mailchimp for ecommerce email marketing."
              date="Mar 2026"
            />
            <ArticleCard 
              href="/blog"
              category="Comparison"
              title="Yotpo vs Judge.me: Product Reviews Comparison"
              excerpt="Which review platform is best for collecting and displaying customer reviews?"
              date="Mar 2026"
            />
            <ArticleCard 
              href="/blog"
              category="Guide"
              title="Best Ecommerce Platforms for Small Stores"
              excerpt="Our top picks for ecommerce platforms for small online stores, ranked by value."
              date="Mar 2026"
            />
            <ArticleCard 
              href="/blog"
              category="Guide"
              title="Best Email Marketing for Ecommerce in 2026"
              excerpt="Complete guide to email marketing platforms for online stores."
              date="Mar 2026"
            />
            <ArticleCard 
              href="/blog"
              category="Guide"
              title="Best Review Apps for Shopify Stores"
              excerpt="Budget-friendly review collection options for Shopify merchants."
              date="Mar 2026"
            />
          </div>
          <div className="text-center mt-12">
            <CTAButton href="/blog" variant="secondary" size="md">
              View All Articles
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Top Comparisons Section */}
      <section className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Head-to-Head Comparisons" 
            subtitle="Direct comparisons to help you make the right choice"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <ComparisonCard 
              href="/blog"
              title="Shopify vs WooCommerce"
              excerpt="Which ecommerce platform wins for small business? We break down pricing, features, and ease of use."
            />
            <ComparisonCard 
              href="/blog"
              title="Klaviyo vs Mailchimp"
              excerpt="Email marketing-focused: which is right for your ecommerce store?"
            />
            <ComparisonCard 
              href="/blog"
              title="Yotpo vs Judge.me"
              excerpt="Review platform comparison for stores weighing collection options."
            />
            <ComparisonCard 
              href="/blog"
              title="Best Platforms for Small Stores"
              excerpt="Our top picks for ecommerce platforms, ranked by value and features."
            />
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Why Trust Our Reviews?" 
            subtitle="We're committed to providing honest, data-driven insights"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Independent Analysis</h3>
              <p className="text-gray-600">We receive no funding from vendors. Our reviews are 100% unbiased and data-driven.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Current</h3>
              <p className="text-gray-600">We update pricing and feature data monthly. No outdated information.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-xl mb-4">
                <ShoppingBag className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ecommerce Focus</h3>
              <p className="text-gray-600">We specialize in tools for online stores. No enterprise bloat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Find the Right Ecommerce Tools?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with our most popular guides and comparisons. Everything you need to make an informed decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/pillar/ecommerce-platforms" variant="primary" size="lg">
              Start with Platforms
            </CTAButton>
            <CTAButton href="/blog" variant="outline" size="lg">
              Browse All Articles
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
