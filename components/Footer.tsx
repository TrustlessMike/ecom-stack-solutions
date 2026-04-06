import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Categories */}
          <div className="col-span-2 md:col-span-1">
            <h4
              className="text-[#e8e6e3] font-bold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pillar/ecommerce-platforms" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Ecommerce Platforms
                </Link>
              </li>
              <li>
                <Link href="/pillar/email-marketing" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/pillar/reviews" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/pillar/analytics" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/pillar/shipping" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons */}
          <div>
            <h4
              className="text-[#e8e6e3] font-bold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Comparisons
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Shopify vs WooCommerce
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Klaviyo vs Mailchimp
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Yotpo vs Judge.me
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  All Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="text-[#e8e6e3] font-bold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-[#e8e6e3] font-bold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/legal/privacy" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/affiliate-disclosure" className="text-[#71717a] hover:text-[#c8ff00] transition text-sm">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a19] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#52525b] text-sm">
              &copy; 2026 Stack Labs LLC. All rights reserved.
            </p>
            <p className="text-[#3f3f46] text-xs">
              We may earn commissions from qualifying purchases. This does not affect our reviews.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
