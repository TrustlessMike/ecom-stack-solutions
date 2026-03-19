import Link from "next/link";

export default function ReviewsUGCPillar() {
  return (
    <main className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">Product Reviews & UGC: Build Trust and Boost Sales</h1>
        <p className="text-xl text-gray-600 mb-8">
          Collect authentic product reviews and user-generated content to increase conversions, improve SEO, and build customer trust.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-sm text-gray-700">
            <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We earn commissions from qualifying purchases at no extra cost to you.
          </p>
        </div>

        {/* Why Reviews Matter */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Product Reviews Are Essential</h2>
          <p className="text-gray-700 mb-4">
            Social proof is the #1 factor influencing purchase decisions. Product reviews:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Increase conversion rates by 15-20%</strong></li>
            <li><strong>Improve SEO</strong> with fresh, keyword-rich content</li>
            <li><strong>Build trust</strong> with authentic customer feedback</li>
            <li><strong>Reduce returns</strong> by setting accurate expectations</li>
            <li><strong>Generate UGC</strong> for social media and ads</li>
          </ul>
          <p className="text-gray-700">
            93% of customers say reviews influence their purchase decisions. The right review app makes collection automatic and effortless.
          </p>
        </section>

        {/* Top Review Apps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Product Review Apps for Shopify</h2>
          
          <div className="space-y-8">
            {/* Judge.me */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🏆 Judge.me - Best Value</h3>
              <p className="text-gray-700 mb-3">
                Judge.me offers the best features-to-price ratio. Unlimited reviews, photo reviews, 
                and Q&A functionality make it perfect for stores of all sizes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Unlimited review requests</li>
                <li>Photo and video reviews</li>
                <li>Q&A functionality</li>
                <li>Google Shopping feed integration</li>
                <li>Customizable review widgets</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Free plan available, Awesome plan $15/mo</p>
            </div>

            {/* Loox */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-3">🥈 Loox - Best for Photo Reviews</h3>
              <p className="text-gray-700 mb-3">
                Loox specializes in photo review collection with automated review requests. 
                Beautiful widgets and strong social proof features.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Automated photo review requests</li>
                <li>Discount incentives for reviews</li>
                <li>Beautiful review widgets</li>
                <li>Review syndication to ads</li>
                <li>Referral program integration</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $9.99/mo (14-day free trial)</p>
            </div>

            {/* Yotpo */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">🥉 Yotpo - Best for Enterprise</h3>
              <p className="text-gray-700 mb-3">
                Yotpo is an enterprise-grade platform with review syndication across channels. 
                Ideal for high-volume stores with complex needs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Multi-channel syndication</li>
                <li>Advanced analytics</li>
                <li> loyalty program integration</li>
                <li>VIP review programs</li>
                <li>Enterprise support</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Custom pricing (contact sales)</p>
            </div>

            {/* Stamped.io */}
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-bold mb-3">Stamped.io - All-in-One Platform</h3>
              <p className="text-gray-700 mb-3">
                Stamped combines reviews, loyalty programs, and referral marketing in one platform. 
                Great for stores wanting unified customer engagement.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Reviews + loyalty + referrals</li>
                <li>Social Instagram feed</li>
                <li>Automated review requests</li>
                <li>Coupon incentives</li>
                <li>Customizable widgets</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> Free plan available, paid from $19/mo</p>
            </div>

            {/* Okendo */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Okendo - Premium Reviews</h3>
              <p className="text-gray-700 mb-3">
                Okendo focuses on high-quality review collection with customizable questionnaires. 
                Perfect for brands that want detailed customer feedback.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Custom review questions</li>
                <li>Attribute ratings</li>
                <li>Photo and video reviews</li>
                <li>Quiz-style review collection</li>
                <li>Advanced segmentation</li>
              </ul>
              <p className="text-sm text-gray-600"><strong>Pricing:</strong> From $19/mo (14-day free trial)</p>
            </div>
          </div>
        </section>

        {/* UGC Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Types of User-Generated Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">⭐ Product Reviews</h4>
              <p className="text-sm text-gray-600">Written feedback with ratings on product pages</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">📸 Photo Reviews</h4>
              <p className="text-sm text-gray-600">Customer photos showing products in use</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">🎥 Video Reviews</h4>
              <p className="text-sm text-gray-600">Video testimonials and unboxings</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">❓ Q&amp;A</h4>
              <p className="text-sm text-gray-600">Customer questions answered by buyers</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">📱 Social Mentions</h4>
              <p className="text-sm text-gray-600">Instagram and TikTok brand mentions</p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-bold mb-2">✉️ Email Testimonials</h4>
              <p className="text-sm text-gray-600">Customer success stories for marketing</p>
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
                  <th className="border px-4 py-3 text-left">Judge.me</th>
                  <th className="border px-4 py-3 text-left">Loox</th>
                  <th className="border px-4 py-3 text-left">Yotpo</th>
                  <th className="border px-4 py-3 text-left">Stamped</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-3 font-medium">Photo Reviews</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-3 font-medium">Video Reviews</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">❌ No</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Q&amp;A</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">❌ No</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">❌ No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-3 font-medium">Google Shopping Feed</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">❌ No</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">❌ No</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 font-medium">Free Plan</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                  <td className="border px-4 py-3">❌ No</td>
                  <td className="border px-4 py-3">⚠️ Limited</td>
                  <td className="border px-4 py-3">✅ Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-3 font-medium">Starting Price</td>
                  <td className="border px-4 py-3">$15/mo</td>
                  <td className="border px-4 py-3">$9.99/mo</td>
                  <td className="border px-4 py-3">Custom</td>
                  <td className="border px-4 py-3">$19/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Best Practices for Review Collection</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Automate review requests</strong> - Send 7-14 days after delivery</li>
            <li><strong>Offer incentives</strong> - Discount codes for honest reviews</li>
            <li><strong>Make it easy</strong> - One-click review submission</li>
            <li><strong>Ask for photos</strong> - Visual reviews convert 2x better</li>
            <li><strong>Respond to reviews</strong> - Show you value feedback</li>
            <li><strong>Display prominently</strong> - Show reviews on product pages and homepage</li>
            <li><strong>Use negative reviews</strong> - Address concerns publicly</li>
          </ol>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/best-product-review-apps" className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-2">Best Product Review Apps 2026</h3>
              <p className="text-sm text-gray-600">Judge.me vs Loox vs Yotpo comparison</p>
            </Link>
            <Link href="/blog/review-apps-comparison" className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="font-bold mb-2">Review Apps Comparison</h3>
              <p className="text-sm text-gray-600">Head-to-head feature analysis</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
