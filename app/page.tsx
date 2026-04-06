import Link from 'next/link';
import { CheckCircle, BarChart3, ShoppingBag, Shield, Clock, TrendingUp, ArrowRight, Star, Package, Zap, ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { PlatformsIcon, EmailIcon, ReviewsIcon, AnalyticsIcon, ShippingIcon, ConversionIcon } from '../components/CategoryIcons';
import HeroVisual from '../components/HeroVisual';

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

const categoryIcons = [PlatformsIcon, EmailIcon, ReviewsIcon, AnalyticsIcon, ShippingIcon, ConversionIcon];

const categories = [
  {
    icon: ShoppingBag,
    href: '/pillar/ecommerce-platforms',
    title: 'Ecommerce Platforms',
    description: 'Online store builders and hosting. Shopify, WooCommerce, BigCommerce, and more.',
    featured: true,
  },
  {
    icon: TrendingUp,
    href: '/pillar/email-marketing',
    title: 'Email Marketing',
    description: 'Email automation, newsletters, and campaigns. Klaviyo, Mailchimp, Omnisend, and others.',
  },
  {
    icon: Star,
    href: '/pillar/reviews',
    title: 'Product Reviews',
    description: 'Review collection and display apps. Yotpo, Judge.me, Loox, and review platforms.',
  },
  {
    icon: BarChart3,
    href: '/pillar/analytics',
    title: 'Analytics & Reporting',
    description: 'Store analytics, conversion tracking, and business intelligence tools.',
  },
  {
    icon: Package,
    href: '/pillar/shipping',
    title: 'Shipping & Fulfillment',
    description: 'Shipping software, label printing, and order fulfillment solutions.',
  },
  {
    icon: Zap,
    href: '/pillar/conversion',
    title: 'Conversion Optimization',
    description: 'A/B testing, popups, and CRO tools to boost your store\'s conversion rate.',
  },
];

const articles = [
  { href: '/blog', category: 'Comparison', title: 'Shopify vs WooCommerce: Which Platform Wins? (2026)', excerpt: 'Complete comparison of the two leading ecommerce platforms. Which one is right for your store?', date: 'Mar 2026' },
  { href: '/blog', category: 'Comparison', title: 'Klaviyo vs Mailchimp: Email Marketing Showdown', excerpt: 'Feature-by-feature comparison of Klaviyo and Mailchimp for ecommerce email marketing.', date: 'Mar 2026' },
  { href: '/blog', category: 'Comparison', title: 'Yotpo vs Judge.me: Product Reviews Comparison', excerpt: 'Which review platform is best for collecting and displaying customer reviews?', date: 'Mar 2026' },
  { href: '/blog', category: 'Guide', title: 'Best Ecommerce Platforms for Small Stores', excerpt: 'Our top picks for ecommerce platforms for small online stores, ranked by value.', date: 'Mar 2026' },
  { href: '/blog', category: 'Guide', title: 'Best Email Marketing for Ecommerce in 2026', excerpt: 'Complete guide to email marketing platforms for online stores.', date: 'Mar 2026' },
  { href: '/blog', category: 'Guide', title: 'Best Review Apps for Shopify Stores', excerpt: 'Budget-friendly review collection options for Shopify merchants.', date: 'Mar 2026' },
];

const comparisons = [
  { href: '/blog', title: 'Shopify vs WooCommerce', excerpt: 'Which ecommerce platform wins for small business? We break down pricing, features, and ease of use.' },
  { href: '/blog', title: 'Klaviyo vs Mailchimp', excerpt: 'Email marketing-focused: which is right for your ecommerce store?' },
  { href: '/blog', title: 'Yotpo vs Judge.me', excerpt: 'Review platform comparison for stores weighing collection options.' },
  { href: '/blog', title: 'Best Platforms for Small Stores', excerpt: 'Our top picks for ecommerce platforms, ranked by value and features.' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Inline keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative overflow-hidden bg-[#0a0a0a] dot-grid">
        {/* Subtle lime gradient orb */}
        <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-[rgba(200,255,0,0.04)] rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[rgba(200,255,0,0.03)] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-4xl lg:max-w-none">
              <ScrollReveal direction="up" duration={400}>
                <div className="inline-flex items-center gap-2 bg-[rgba(200,255,0,0.08)] text-[#c8ff00] px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-[rgba(200,255,0,0.2)]">
                  <Star className="h-4 w-4 fill-[#c8ff00]" />
                  Trusted by 50,000+ store owners
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={50} duration={400}>
                <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight text-[#e8e6e3]" style={{ fontFamily: 'var(--font-display)' }}>
                  The tools your
                  <br />
                  store <span className="text-[#c8ff00]">actually</span> needs.
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={100} duration={400}>
                <p className="text-xl text-[#a1a09e] mb-10 leading-relaxed max-w-2xl">
                  Independent, unbiased reviews of the best ecommerce tools for online stores.
                  Find the right platforms, email marketing, reviews, and analytics solutions.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={150} duration={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pillar/ecommerce-platforms"
                    className="btn-lime btn-pulse-glow px-8 py-4 text-lg gap-2"
                  >
                    Browse Platforms
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/pillar/email-marketing"
                    className="btn-outline-lime px-8 py-4 text-lg"
                  >
                    Email Marketing
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Hero Visual */}
            <ScrollReveal direction="right" delay={200} duration={600} className="flex-1 hidden lg:block">
              <HeroVisual />
            </ScrollReveal>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16 lg:mt-20">
            <div className="scroll-indicator flex flex-col items-center gap-1 text-[#52525b]">
              <span className="text-xs font-medium tracking-wide uppercase">Scroll</span>
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Lime accent line divider */}
        <div className="lime-line w-full" />
      </section>

      {/* ============================================
          STATS BAR
          ============================================ */}
      <section className="bg-[#0a0a0a] border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '86+', label: 'In-Depth Articles', icon: BarChart3 },
              { value: '50+', label: 'Tools Reviewed', icon: CheckCircle },
              { value: '100%', label: 'Unbiased Reviews', icon: Shield },
              { value: '2026', label: 'Latest Data', icon: Clock },
            ].map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 50} duration={400}>
                <div className="text-center">
                  <div className="stat-number text-4xl lg:text-5xl mb-2">{stat.value}</div>
                  <div className="text-sm text-[#a1a09e] font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CATEGORIES
          ============================================ */}
      <section className="py-20 bg-[#0a0a0a] dot-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={400}>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#e8e6e3] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Browse by Category
              </h2>
              <p className="text-[#a1a09e] text-lg">Find the right ecommerce solutions for your online store</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const CategorySvg = categoryIcons[i];
              return (
                <ScrollReveal key={i} direction="up" delay={i * 50} duration={400}>
                  <Link
                    href={cat.href}
                    className={`group card-dark card-hover-glow p-6 block ${cat.featured ? 'md:col-span-2 lg:col-span-3 border-[rgba(200,255,0,0.15)]' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${cat.featured ? 'bg-[#c8ff00] text-[#0a0a0a]' : 'bg-[rgba(200,255,0,0.1)] text-[#c8ff00]'} transition-colors group-hover:bg-[#c8ff00] group-hover:text-[#0a0a0a]`}>
                        <CategorySvg className="w-8 h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#e8e6e3] mb-1 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
                          {cat.title}
                          <ArrowRight className="h-4 w-4 text-[#52525b] group-hover:text-[#c8ff00] group-hover:translate-x-1 transition-all" />
                        </h3>
                        <p className="text-[#a1a09e] text-sm leading-relaxed">{cat.description}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lime line divider */}
      <div className="lime-line w-full" />

      {/* ============================================
          LATEST ARTICLES
          ============================================ */}
      <section className="py-20 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={400}>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#141413] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Latest Articles
              </h2>
              <p className="text-[#52525b] text-lg">Fresh insights and comparisons to help you choose the right ecommerce tools</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 50} duration={400}>
                <Link
                  href={article.href}
                  className="group block bg-white rounded-xl border border-[#e4e4e0] overflow-hidden hover:border-[#c8ff00] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
                >
                  <div className="p-5">
                    <span className="inline-block px-3 py-1 bg-[#0a0a0a] text-[#c8ff00] text-xs font-bold rounded-full mb-3 tracking-wide uppercase">
                      {article.category}
                    </span>
                    <h3 className="text-base font-bold mb-2 text-[#141413] group-hover:text-[#0a0a0a] transition leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                      {article.title}
                    </h3>
                    <p className="text-[#52525b] text-sm mb-3 leading-relaxed line-clamp-2">{article.excerpt}</p>
                    <p className="text-[#a1a09e] text-xs font-medium">{article.date}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300} duration={400}>
            <div className="text-center mt-12">
              <Link href="/blog" className="btn-dark px-6 py-3 text-base gap-2">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          COMPARISONS
          ============================================ */}
      <section className="relative py-20 bg-[#0a0a0a] dot-grid">
        {/* Diagonal clip top */}
        <div
          className="absolute top-0 left-0 w-full h-16 bg-[#fafaf9]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <ScrollReveal direction="up" duration={400}>
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#e8e6e3] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Head-to-Head <span className="text-[#c8ff00]">Comparisons</span>
              </h2>
              <p className="text-[#a1a09e] text-lg">Direct comparisons to help you make the right choice</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {comparisons.map((comp, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 50} duration={400}>
                <Link
                  href={comp.href}
                  className="group card-dark card-hover-glow p-6 block"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#e8e6e3]" style={{ fontFamily: 'var(--font-display)' }}>
                      {comp.title}
                    </h3>
                    <span className="text-xs font-bold px-2 py-1 bg-[rgba(255,107,74,0.15)] text-[#ff6b4a] rounded-full uppercase tracking-wide">
                      VS
                    </span>
                  </div>
                  <p className="text-[#a1a09e] text-sm leading-relaxed">{comp.excerpt}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Diagonal clip bottom */}
        <div
          className="absolute bottom-0 left-0 w-full h-16 bg-[#0a0a0a]"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
        />
      </section>

      {/* ============================================
          WHY TRUST US
          ============================================ */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" duration={400}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#e8e6e3] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Why Trust Our Reviews?
              </h2>
              <p className="text-[#a1a09e] text-lg max-w-2xl mx-auto">We&apos;re committed to providing honest, data-driven insights</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle,
                title: 'Independent Analysis',
                desc: 'We receive no funding from vendors. Our reviews are 100% unbiased and data-driven.',
              },
              {
                icon: TrendingUp,
                title: 'Always Current',
                desc: 'We update pricing and feature data monthly. No outdated information.',
              },
              {
                icon: ShoppingBag,
                title: 'Ecommerce Focus',
                desc: 'We specialize in tools for online stores. No enterprise bloat.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} direction="up" delay={i * 50} duration={400}>
                  <div className="text-center p-8 card-dark card-hover-glow">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(200,255,0,0.1)] rounded-xl mb-5">
                      <Icon className="h-7 w-7 text-[#c8ff00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#e8e6e3] mb-2" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                    <p className="text-[#a1a09e] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Lime line top */}
        <div className="lime-line w-full" />

        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[rgba(200,255,0,0.04)] rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 text-center">
          <ScrollReveal direction="up" duration={400}>
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 text-[#e8e6e3] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Ready to find the right
              <br />
              <span className="text-[#c8ff00]">ecommerce tools?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={50} duration={400}>
            <p className="text-lg text-[#a1a09e] mb-10 max-w-2xl mx-auto">
              Start with our most popular guides and comparisons. Everything you need to make an informed decision.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} duration={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pillar/ecommerce-platforms" className="btn-lime btn-pulse-glow px-8 py-4 text-lg gap-2">
                Start with Platforms
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/blog" className="btn-outline-lime px-8 py-4 text-lg">
                Browse All Articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
