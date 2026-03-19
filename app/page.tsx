import Link from 'next/link';
import { ShoppingBag, Mail, Star, TrendingUp, Package, BarChart } from 'lucide-react';

export const metadata = {
  title: 'Ecommerce Stack Solutions | Best Shopify Apps & Ecommerce Tools 2026',
  description: 'Expert reviews of Shopify apps, email marketing platforms, review tools, and conversion optimization for ecommerce stores.',
  keywords: 'Shopify apps, email marketing, review apps, conversion optimization, ecommerce tools',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ecommerce Stack Solutions",
  "url": "https://ecomstacksolutions.com",
  "description": "Expert reviews of Shopify apps, email marketing, and conversion tools for ecommerce",
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

const categories = [
  { name: 'Shopify Apps', href: '/pillar/shopify-apps', icon: ShoppingBag, desc: 'Apps to grow your Shopify store' },
  { name: 'Email Marketing', href: '/pillar/email-marketing', icon: Mail, desc: 'Email platforms for ecommerce' },
  { name: 'Reviews & UGC', href: '/pillar/reviews-ugc', icon: Star, desc: 'Product reviews and user content' },
  { name: 'Conversion CRO', href: '/pillar/conversions-cro', icon: TrendingUp, desc: 'Optimize conversion rates' },
  { name: 'Fulfillment', href: '/pillar/fulfillment', icon: Package, desc: 'Shipping and fulfillment software' },
  { name: 'Analytics', href: '/pillar/analytics', icon: BarChart, desc: 'Ecommerce analytics and reporting' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero - Vibrant Green + Emerald ecommerce gradient */}
      <section className="bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white py-24 relative overflow-hidden">
        {/* Animated wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/10" style="clip-path: polygon(0 100%, 100 100%, 100% 0);"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium mb-6 border border-white/30">
            🚀 Grow your Shopify store
          </div>
          <h1 className="text-6xl font-bold mb-6 tracking-tight">
            Ecommerce Tools<br/>
            <span className="text-emerald-200">for Shopify</span>
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl leading-relaxed">
            Expert reviews of Shopify apps, email marketing platforms, review tools, 
            and conversion optimization. Grow your store with the right tech stack.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/blog/best-shopify-apps-2026" className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition shadow-xl">
              See Top Picks
            </Link>
            <Link href="/pillar" className="bg-white/10 backdrop-blur border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition">
              Browse Categories
            </Link>
          </div>
          
          {/* Trust signals */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
            <div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm text-emerald-100">Apps reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-emerald-100">Unbiased analysis</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2026</div>
              <div className="text-sm text-emerald-100">Latest data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group p-6 border border-gray-200 rounded-xl hover:border-green-300 hover:shadow-lg transition">
                <cat.icon className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/best-shopify-apps-2026" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-green-600 font-medium">Shopify</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Best Shopify Apps for Conversion 2026</h3>
              <p className="text-gray-600 text-sm">Top apps to boost your store revenue.</p>
            </Link>
            <Link href="/blog/klaviyo-vs-privy-email-marketing" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-green-600 font-medium">Email</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Klaviyo vs Privy: Email Marketing</h3>
              <p className="text-gray-600 text-sm">Which email platform wins?</p>
            </Link>
            <Link href="/blog/judge-me-vs-loox-review-apps" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <span className="text-sm text-green-600 font-medium">Reviews</span>
              <h3 className="text-lg font-semibold mt-2 mb-3">Judge.me vs Loox: Review Apps</h3>
              <p className="text-gray-600 text-sm">Best Shopify review solutions.</p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-green-600 font-semibold hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white mb-4">Ecommerce Stack</h4>
              <p className="text-sm">Expert Shopify app reviews.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pillar/shopify-apps" className="hover:text-white">Shopify Apps</Link></li>
                <li><Link href="/pillar/email-marketing" className="hover:text-white">Email Marketing</Link></li>
                <li><Link href="/pillar/reviews-ugc" className="hover:text-white">Reviews</Link></li>
                <li><Link href="/pillar/conversions-cro" className="hover:text-white">CRO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/legal/about" className="hover:text-white">About</Link></li>
                <li><Link href="/legal/disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/legal/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-sm">Stack Labs LLC</p>
              <p className="text-sm">malik@stack-labs.net</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
            © 2026 Stack Labs LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
