import Link from 'next/link';
import { ArrowRight, Twitter, Facebook, Linkedin } from 'lucide-react';

interface ArticleLayoutProps {
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  children: React.ReactNode;
  tocItems?: Array<{
    id: string;
    title: string;
    level: number;
  }>;
  relatedArticles?: Array<{
    title: string;
    href: string;
    excerpt?: string;
  }>;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
    href: string;
    badge?: string;
  };
}

export default function ArticleLayout({
  title,
  excerpt,
  category,
  date,
  children,
  tocItems = [],
  relatedArticles = [],
  cta,
}: ArticleLayoutProps) {
  return (
    <article className="min-h-screen">
      {/* Dark hero header for the article */}
      <div className="bg-[#0a0a0a] dot-grid border-b border-[#27272a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            {category && (
              <span className="inline-block px-3 py-1 bg-[rgba(200,255,0,0.1)] text-[#c8ff00] text-xs font-bold rounded-full mb-4 uppercase tracking-wider border border-[rgba(200,255,0,0.2)]">
                {category}
              </span>
            )}
            <h1
              className="text-4xl lg:text-5xl font-extrabold text-[#e8e6e3] mb-4 leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </h1>
            <p className="text-xl text-[#a1a09e] mb-6 leading-relaxed">
              {excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-[#52525b]">
              {date && <span>{date}</span>}
              {/* Social share */}
              <div className="flex items-center gap-2">
                <span className="text-[#52525b] font-medium">Share:</span>
                <a
                  href="#"
                  className="p-1.5 text-[#52525b] hover:text-[#c8ff00] transition"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-1.5 text-[#52525b] hover:text-[#c8ff00] transition"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-1.5 text-[#52525b] hover:text-[#c8ff00] transition"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Light background for article content (readability) */}
      <div className="bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                {children}
              </div>

              {/* CTA Box */}
              {cta && (
                <div className="cta-box my-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-[#e8e6e3]" style={{ fontFamily: 'var(--font-display)' }}>{cta.title}</h3>
                        {cta.badge && (
                          <span className="inline-block px-2.5 py-0.5 bg-[rgba(200,255,0,0.1)] text-[#c8ff00] text-xs font-bold rounded-full">
                            {cta.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[#a1a09e] text-sm">{cta.description}</p>
                    </div>
                    <Link href={cta.href} className="btn-lime px-6 py-3 text-sm gap-2 whitespace-nowrap">
                      {cta.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#e4e4e0]">
                  <h3
                    className="text-xl font-bold text-[#141413] mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Related Articles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedArticles.map((article, index) => (
                      <Link
                        key={index}
                        href={article.href}
                        className="group p-4 bg-white rounded-lg border border-[#e4e4e0] hover:border-[#c8ff00] hover:shadow-md transition-all"
                      >
                        <h4
                          className="text-sm font-bold text-[#141413] group-hover:text-[#0a0a0a] transition"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {article.title}
                        </h4>
                        {article.excerpt && (
                          <p className="text-[#52525b] text-xs mt-1 line-clamp-2">{article.excerpt}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar with Table of Contents */}
            {tocItems.length > 0 && (
              <div className="lg:col-span-4 hidden lg:block">
                <div className="sticky top-24">
                  <nav className="toc">
                    <h3>On this page</h3>
                    <ul>
                      {tocItems.map((item) => (
                        <li key={item.id} style={{ marginLeft: (item.level - 2) * 0.5 + 'rem' }}>
                          <a href={`#${item.id}`}>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
