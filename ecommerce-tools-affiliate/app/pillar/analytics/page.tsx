import Link from "next/link";

export default function AnalyticsPillar() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Ecommerce Analytics: Data-Driven Growth</h1>
        <p className="text-xl text-gray-600 mb-8">
          Track performance, attribute revenue, and make data-driven decisions with powerful ecommerce analytics tools.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We earn commissions from qualifying purchases at no extra cost to you.
          </p>
        </div>

        {/* Why Analytics Matter */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Ecommerce Analytics Are Critical</h2>
          <p className="text-gray-700 mb-4">
            Data-driven decisions separate growing stores from stagnant ones. Proper analytics help you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Track ROAS</strong> across all marketing channels</li>
            <li><strong>Understand customer LTV</strong> and cohort behavior</li>
            <li><strong>Attribute revenue</strong> to the right touchpoints</li>
            <li><strong>Identify bottlenecks</strong> in the conversion funnel</li>
            <li><strong>Forecast inventory</strong> and cash flow needs</li>
          </ul>
          <p className="text-gray-700">
            What gets measured gets managed. The right analytics stack turns guesswork into predictable growth.
          </p>
        </section>

        {/* Top Analytics Platforms */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Ecommerce Analytics Tools</h2>
          
          <div className="space-y-8">
            {/* Google Analytics 4 */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🏆 Google Analytics 4 - Free & Powerful</h3>
              <p className="text-gray-700 mb-3">
                GA4 is the free standard for web analytics. Enhanced ecommerce tracking provides 
                deep insights into customer behavior and purchase paths.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Enhanced ecommerce tracking</li>
                <li>Customer journey analysis</li>
                <li>Audience segmentation</li>
                <li>Conversion funnel reports</li>
                <li>Free forever</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Free</p>
            </div>

            {/* Triple Whale */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-3">🥈 Triple Whale - Ecommerce Intelligence</h3>
              <p className="text-gray-700 mb-3">
                Triple Whale unifies data from ads, email, and Shopify into one dashboard. 
                Built specifically for DTC brands with attribution modeling.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Multi-touch attribution</li>
                <li>Creative analytics</li>
                <li>Cohort analysis</li>
                <li>Profit tracking</li>
                <li>Shopify native integration</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $129/mo (free trial available)</p>
            </div>

            {/* Northbeam */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🥉 Northbeam - Attribution Platform</h3>
              <p className="text-gray-700 mb-3">
                Northbeam provides multi-touch attribution for paid media. 
                Essential for brands spending $50k+/mo on ads.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Multi-touch attribution</li>
                <li>Cross-channel reporting</li>
                <li>Creative performance</li>
                <li>Incrementality testing</li>
                <li>API integrations</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $500/mo (custom pricing)</p>
            </div>

            {/* Lifetimely */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Lifetimely - Customer LTV Analytics</h3>
              <p className="text-gray-700 mb-3">
                Lifetimely focuses on customer lifetime value and cohort analysis. 
                Understand long-term customer behavior and profitability.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>LTV by cohort</li>
                <li>Repeat purchase rate</li>
                <li>Customer profitability</li>
                <li>Churn analysis</li>
                <li>Forecasting tools</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $49/mo (14-day free trial)</p>
            </div>

            {/* Daasity */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Daasity - Ecommerce Analytics Platform</h3>
              <p className="text-gray-700 mb-3">
                Daasity unifies data from Shopify, ads, email, and more into executive dashboards. 
                Built for growing DTC brands.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Executive dashboards</li>
                <li>Multi-channel attribution</li>
                <li>Cohort analysis</li>
                <li>Inventory forecasting</li>
                <li>Custom metrics</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $299/mo (custom pricing)</p>
            </div>

            {/* Peel Analytics */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Peel - Retention Analytics</h3>
              <p className="text-gray-700 mb-3">
                Peel focuses on customer retention and repeat purchase behavior. 
                Understand what drives long-term customer value.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Retention curves</li>
                <li>Repeat purchase analysis</li>
                <li>Cohort LTV</li>
                <li>Product affinity</li>
                <li>Churn prediction</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $99/mo (free trial available)</p>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Ecommerce Metrics to Track</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">💰 Conversion Rate</h4>
              <p className="text-sm text-gray-600">Percentage of visitors who purchase</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">🛒 AOV (Average Order Value)</h4>
              <p className="text-sm text-gray-600">Revenue per transaction</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">📊 CAC (Customer Acquisition Cost)</h4>
              <p className="text-sm text-gray-600">Cost to acquire new customer</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">💎 LTV (Lifetime Value)</h4>
              <p className="text-sm text-gray-600">Total revenue per customer</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">🔄 Repeat Purchase Rate</h4>
              <p className="text-sm text-gray-600">% of customers who buy again</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">📈 ROAS (Return on Ad Spend)</h4>
              <p className="text-sm text-gray-600">Revenue per ad dollar spent</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">🛍️ Cart Abandonment Rate</h4>
              <p className="text-sm text-gray-600">% of carts not completed</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">📦 Inventory Turnover</h4>
              <p className="text-sm text-gray-600">How fast inventory sells</p>
            </div>
          </div>
        </section>

        {/* Attribution Models */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Attribution Models Explained</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">Last Click</h4>
              <p className="text-sm text-gray-700">Credits the final touchpoint before purchase. Simple but undervalues top-of-funnel.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold mb-2">First Click</h4>
              <p className="text-sm text-gray-700">Credits the first touchpoint. Good for awareness campaigns but ignores nurture.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">Linear</h4>
              <p className="text-sm text-gray-700">Equal credit to all touchpoints. Fair but may overvalue irrelevant touches.</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h4 className="font-bold mb-2">Time Decay</h4>
              <p className="text-sm text-gray-700">More credit to recent touches. Good for short sales cycles.</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">Multi-Touch (Data-Driven)</h4>
              <p className="text-sm text-gray-700">Algorithmic attribution based on actual conversion paths. Most accurate but complex.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tool Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-4 py-3 text-left">Tool</th>
                  <th className="border px-4 py-3 text-left">Primary Focus</th>
                  <th className="border px-4 py-3 text-left">Starting Price</th>
                  <th className="border px-4 py-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-3 font-medium">Google Analytics 4</td>
                  <td className="border px-4 py-3">Web Analytics</td>
                  <td className="border px-4 py-3">Free</td>
                  <td className="border px-4 py-3">All stores (essential)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-3 font-medium">Triple Whale</td>
                  <td className="border px-4 py-3">Ecommerce Intelligence</td>
                  <td className="border px-4 py-3">$129/mo</td>
                  <td className="border px-4 py-3">DTC brands</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Northbeam</td>
                  <td className="border px-4 py-3">Attribution</td>
                  <td className="border px-4 py-3">$500/mo</td>
                  <td className="border px-4 py-3">$50k+/mo ad spend</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-3 font-medium">Lifetimely</td>
                  <td className="border px-4 py-3">Customer LTV</td>
                  <td className="border px-4 py-3">$49/mo</td>
                  <td className="border px-4 py-3">Retention focus</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Daasity</td>
                  <td className="border px-4 py-3">Executive Dashboards</td>
                  <td className="border px-4 py-3">$299/mo</td>
                  <td className="border px-4 py-3">Growing brands</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/best-ecommerce-analytics" className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-2">Best Ecommerce Analytics Tools 2026</h3>
              <p className="text-sm text-gray-600">Complete guide to analytics platforms</p>
            </Link>
            <Link href="/pillar/shopify-apps" className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-2">Best Shopify Apps</h3>
              <p className="text-sm text-gray-600">Essential apps including analytics</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
