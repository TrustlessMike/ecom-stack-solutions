import Link from "next/link";

export default function EmailMarketingPillar() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Email Marketing for Ecommerce: Complete Guide</h1>
        <p className="text-xl text-gray-600 mb-8">
          Build your email list, automate campaigns, and drive repeat purchases with the best email marketing platforms for online stores.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We earn commissions from qualifying purchases at no extra cost to you.
          </p>
        </div>

        {/* Why Email Marketing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Email Marketing is Critical for Ecommerce</h2>
          <p className="text-gray-700 mb-4">
            Email marketing delivers the highest ROI of any digital marketing channel. For ecommerce stores, email drives:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>40:1 average ROI</strong> - $40 return for every $1 spent</li>
            <li><strong>20-30% of revenue</strong> from email for top stores</li>
            <li><strong>Automated flows</strong> that sell while you sleep</li>
            <li><strong>Customer retention</strong> and lifetime value growth</li>
          </ul>
          <p className="text-gray-700">
            The right email platform can transform your store from one-time purchases to loyal, repeat customers.
          </p>
        </section>

        {/* Top Email Marketing Platforms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Email Marketing Platforms for Ecommerce</h2>
          
          <div className="space-y-8">
            {/* Klaviyo */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🏆 Klaviyo - Best Overall</h3>
              <p className="text-gray-700 mb-3">
                Klaviyo is the gold standard for ecommerce email marketing. Deep Shopify integration, advanced segmentation, 
                and powerful analytics make it the top choice for growing stores.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Advanced customer segmentation</li>
                <li>Predictive analytics (LTV, churn risk)</li>
                <li>SMS marketing included</li>
                <li>Pre-built flow templates</li>
                <li>Robust A/B testing</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Free up to 250 contacts, then pay-as-you-grow</p>
            </div>

            {/* Omnisend */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-3">🥈 Omnisend - Best for Automation</h3>
              <p className="text-gray-700 mb-3">
                Omnisend focuses on pre-built automation workflows designed specifically for ecommerce. 
                Great for stores that want to launch quickly without complex setup.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Ready-made automation templates</li>
                <li>SMS + push notifications</li>
                <li>Product picker in emails</li>
                <li>Audience segmentation</li>
                <li>Easy Shopify integration</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Free up to 250 contacts, paid plans from $16/mo</p>
            </div>

            {/* Privy */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🥉 Privy - Best for List Building</h3>
              <p className="text-gray-700 mb-3">
                Privy excels at capturing emails through popups, spin wheels, and onsite forms. 
                Perfect for stores focused on growing their email list.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>High-converting popups</li>
                <li>Spin-to-win wheels</li>
                <li>Basic email campaigns</li>
                <li>Exit-intent technology</li>
                <li>A/B testing for forms</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Free up to 100 contacts, paid from $24/mo</p>
            </div>

            {/* ConvertKit */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-3">ConvertKit - Best for Creators</h3>
              <p className="text-gray-700 mb-3">
                ConvertKit serves creators and info-product sellers. Visual automation builder 
                makes it easy to create sophisticated email sequences.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Visual automation builder</li>
                <li>Tag-based segmentation</li>
                <li>Digital product delivery</li>
                <li>Creator-focused features</li>
                <li>Sunday newsletter tools</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Free up to 1,000 subscribers, paid from $15/mo</p>
            </div>

            {/* Gorgias */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Gorgias - Best for Helpdesk + Email</h3>
              <p className="text-gray-700 mb-3">
                Gorgias combines customer support with email marketing. Ideal for stores that want 
                to unify support and marketing communications.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Helpdesk + email marketing</li>
                <li>Unified customer view</li>
                <li>Automated support macros</li>
                <li>Revenue attribution</li>
                <li>Multi-channel support</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $60/mo (14-day free trial)</p>
            </div>
          </div>
        </section>

        {/* Essential Email Flows */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Essential Email Flows Every Store Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">🛒 Abandoned Cart</h4>
              <p className="text-sm text-gray-600">Recover 10-15% of abandoned carts with 3-email sequence</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">👋 Welcome Series</h4>
              <p className="text-sm text-gray-600">Introduce your brand and offer first-purchase discount</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">⭐ Post-Purchase</h4>
              <p className="text-sm text-gray-600">Request reviews and encourage repeat purchases</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">📦 Browse Abandonment</h4>
              <p className="text-sm text-gray-600">Retarget visitors who viewed products but didn't add to cart</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">💳 Winback Campaign</h4>
              <p className="text-sm text-gray-600">Re-engage customers who haven't purchased in 90+ days</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">🎂 VIP Program</h4>
              <p className="text-sm text-gray-600">Reward top customers with exclusive offers</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-4 py-3 text-left">Feature</th>
                  <th className="border px-4 py-3 text-left">Klaviyo</th>
                  <th className="border px-4 py-3 text-left">Omnisend</th>
                  <th className="border px-4 py-3 text-left">Privy</th>
                  <th className="border px-4 py-3 text-left">ConvertKit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-3 font-medium">Ecommerce Integration</td>
                  <td className="border px-4 py-3">✅ Excellent</td>
                  <td className="border px-4 py-3">✅ Excellent</td>
                  <td className="border px-4 py-3">✅ Good</td>
                  <td className="border px-4 py-3">⚠️ Basic</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-3 font-medium">SMS Marketing</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">❌ No</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Advanced Segmentation</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">⚠️ Basic</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-3 font-medium">Pre-built Flows</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">✅ Excellent</td>
                  <td className="border px-4 py-3">⚠️ Limited</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Free Plan</td>
                  <td className="border px-4 py-3">250 contacts</td>
                  <td className="border px-4 py-3">250 contacts</td>
                  <td className="border px-4 py-3">100 contacts</td>
                  <td className="border px-4 py-3">1,000 subscribers</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/best-email-marketing-ecommerce" className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-2">Best Email Marketing for Ecommerce 2026</h3>
              <p className="text-sm text-gray-600">In-depth comparison of top platforms</p>
            </Link>
            <Link href="/blog/email-marketing-tools-comparison" className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-2">Email Marketing Tools Comparison</h3>
              <p className="text-sm text-gray-600">Head-to-head feature analysis</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
