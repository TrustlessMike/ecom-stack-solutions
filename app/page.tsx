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

      {/* ============================================
          HERO — Full-width purple-to-pink gradient
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-500">
        {/* Decorative glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-yellow-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-yellow-400/20">
              <Star className="h-4 w-4 fill-yellow-300" />
              Trusted by 50,000+ store owners
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Ecommerce Tools for Growing Stores
            </h1>
            <p className="text-xl text-purple-100/90 mb-10 leading-relaxed max-w-2xl">
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

          {/* Animated stat counters row */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '86+', label: 'In-Depth Articles' },
              { value: '50+', label: 'Tools Reviewed' },
              { value: '100%', label: 'Unbiased Reviews' },
              { value: '2026', label: 'Latest Data' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${i * 0.15}s both`,
                }}
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-yellow-300 mb-1">{stat.value}</div>
                <div className="text-sm text-purple-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal divider */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-white"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
        />
      </section>

      {/* Inline keyframes for fade-in animation (server component safe) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

      {/* ============================================
          TRUST SIGNALS BAR
          ============================================ */}
      <section className="bg-white border-b border-purple-100">
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

      {/* ============================================
          CATEGORIES — Masonry grid, first card featured
          ============================================ */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Browse by Category"
            subtitle="Find the right ecommerce solutions for your online store"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured card — spans full width */}
            <div className="md:col-span-2 lg:col-span-3 rounded-2xl bg-gradient-to-r from-purple-900 to-pink-600 p-[2px] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="rounded-2xl bg-white hover:bg-purple-50/50 transition-colors duration-300">
                <FeatureCard
                  icon={<ShoppingBag className="h-8 w-8" />}
                  href="/pillar/ecommerce-platforms"
                  title="Ecommerce Platforms"
                  description="Online store builders and hosting. Shopify, WooCommerce, BigCommerce, and more."
                />
              </div>
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-purple-50/50">
              <FeatureCard
                icon={<TrendingUp className="h-8 w-8" />}
                href="/pillar/email-marketing"
                title="Email Marketing"
                description="Email automation, newsletters, and campaigns. Klaviyo, Mailchimp, Omnisend, and others."
              />
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-purple-50/50">
              <FeatureCard
                icon={<Star className="h-8 w-8" />}
                href="/pillar/reviews"
                title="Product Reviews"
                description="Review collection and display apps. Yotpo, Judge.me, Loox, and review platforms."
              />
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-purple-50/50">
              <FeatureCard
                icon={<BarChart3 className="h-8 w-8" />}
                href="/pillar/analytics"
                title="Analytics & Reporting"
                description="Store analytics, conversion tracking, and business intelligence tools."
              />
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-purple-50/50">
              <FeatureCard
                icon={<ShoppingBag className="h-8 w-8" />}
                href="/pillar/shipping"
                title="Shipping & Fulfillment"
                description="Shipping software, label printing, and order fulfillment solutions."
              />
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-purple-50/50">
              <FeatureCard
                icon={<CheckCircle className="h-8 w-8" />}
                href="/pillar/conversion"
                title="Conversion Optimization"
                description="A/B testing, popups, and CRO tools to boost your store's conversion rate."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal divider — purple accent */}
      <div className="relative h-16 bg-gradient-to-b from-purple-50/50 to-white">
        <div
          className="absolute inset-0 bg-white"
          style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)' }}
        />
      </div>

      {/* ============================================
          LATEST ARTICLES — 3-col grid
          ============================================ */}
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

      {/* ============================================
          COMPARISONS — 2-col grid with purple tint
          ============================================ */}
      <section className="relative py-20 bg-purple-50">
        {/* Top diagonal divider */}
        <div
          className="absolute top-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <SectionHeading
            title="Head-to-Head Comparisons"
            subtitle="Direct comparisons to help you make the right choice"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-white">
              <ComparisonCard
                href="/blog"
                title="Shopify vs WooCommerce"
                excerpt="Which ecommerce platform wins for small business? We break down pricing, features, and ease of use."
              />
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-white">
              <ComparisonCard
                href="/blog"
                title="Klaviyo vs Mailchimp"
                excerpt="Email marketing-focused: which is right for your ecommerce store?"
              />
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-white">
              <ComparisonCard
                href="/blog"
                title="Yotpo vs Judge.me"
                excerpt="Review platform comparison for stores weighing collection options."
              />
            </div>
            <div className="rounded-2xl border border-transparent hover:border-purple-300 transition-all duration-300 hover:bg-white">
              <ComparisonCard
                href="/blog"
                title="Best Platforms for Small Stores"
                excerpt="Our top picks for ecommerce platforms, ranked by value and features."
              />
            </div>
          </div>
        </div>

        {/* Bottom diagonal divider */}
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
      </section>

      {/* ============================================
          WHY TRUST US
          ============================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Trust Our Reviews?"
            subtitle="We're committed to providing honest, data-driven insights"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-purple-100 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl mb-5 shadow-lg shadow-purple-500/20">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Independent Analysis</h3>
              <p className="text-gray-600">We receive no funding from vendors. Our reviews are 100% unbiased and data-driven.</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-purple-100 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl mb-5 shadow-lg shadow-purple-500/20">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Always Current</h3>
              <p className="text-gray-600">We update pricing and feature data monthly. No outdated information.</p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-purple-100 hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl mb-5 shadow-lg shadow-purple-500/20">
                <ShoppingBag className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ecommerce Focus</h3>
              <p className="text-gray-600">We specialize in tools for online stores. No enterprise bloat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA — Gradient background
          ============================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600">
        {/* Top diagonal divider */}
        <div
          className="absolute top-0 left-0 w-full h-16 bg-white"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
        />

        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 text-center">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Ready to Find the Right Ecommerce Tools?
          </h2>
          <p className="text-lg text-purple-100/90 mb-10 max-w-2xl mx-auto">
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
