'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white px-3 py-1.5 rounded-lg font-bold text-lg shadow-sm group-hover:shadow-md transition-all duration-300">
              Ecom Stack
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/pillar/ecommerce-platforms" className="text-gray-600 hover:text-amber-600 transition font-medium">
              Platforms
            </Link>
            <Link href="/pillar/email-marketing" className="text-gray-600 hover:text-amber-600 transition font-medium">
              Email Marketing
            </Link>
            <Link href="/pillar/reviews" className="text-gray-600 hover:text-amber-600 transition font-medium">
              Reviews
            </Link>
            <Link href="/pillar/analytics" className="text-gray-600 hover:text-amber-600 transition font-medium">
              Analytics
            </Link>
            <Link href="/pillar/shipping" className="text-gray-600 hover:text-amber-600 transition font-medium">
              Shipping
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-amber-600 transition font-medium">
              Articles
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/pillar/ecommerce-platforms" className="block text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition py-3 px-3 rounded-lg font-medium">
              Platforms
            </Link>
            <Link href="/pillar/email-marketing" className="block text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition py-3 px-3 rounded-lg font-medium">
              Email Marketing
            </Link>
            <Link href="/pillar/reviews" className="block text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition py-3 px-3 rounded-lg font-medium">
              Reviews
            </Link>
            <Link href="/pillar/analytics" className="block text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition py-3 px-3 rounded-lg font-medium">
              Analytics
            </Link>
            <Link href="/pillar/shipping" className="block text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition py-3 px-3 rounded-lg font-medium">
              Shipping
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition py-3 px-3 rounded-lg font-medium">
              Articles
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
