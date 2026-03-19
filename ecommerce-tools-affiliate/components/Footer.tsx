import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Categories */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pillar/ecommerce-platforms" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Ecommerce Platforms
                </Link>
              </li>
              <li>
                <Link href="/pillar/email-marketing" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="/pillar/reviews" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/pillar/analytics" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Analytics
                </Link>
              </li>
              <li>
                <Link href="/pillar/shipping" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>

          {/* Comparisons */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Comparisons</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Shopify vs WooCommerce
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Klaviyo vs Mailchimp
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Yotpo vs Judge.me
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  All Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/legal/privacy" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/affiliate-disclosure" className="text-gray-600 hover:text-amber-600 transition text-sm">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2026 Stack Labs LLC. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs">
              We may earn commissions from qualifying purchases. This does not affect our reviews.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
