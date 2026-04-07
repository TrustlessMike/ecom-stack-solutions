'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckCircle, BarChart3, ShoppingBag, Shield, Clock, TrendingUp, ArrowRight, Star, Package, Zap, ChevronDown } from 'lucide-react';
import { PlatformsIcon, EmailIcon, ReviewsIcon, AnalyticsIcon, ShippingIcon, ConversionIcon } from './CategoryIcons';
import HeroVisual from './HeroVisual';
import AnimatedCounter from './AnimatedCounter';
import TiltCard from './TiltCard';
import StaggerReveal from './StaggerReveal';
import GlowOrb from './GlowOrb';

const categoryIcons = [PlatformsIcon, EmailIcon, ReviewsIcon, AnalyticsIcon, ShippingIcon, ConversionIcon];

const categoryImages = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
  'https://images.unsplash.com/photo-1533750446969-255bbf191920?w=400&q=80',
  'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=400&q=80',
  'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&q=80',
  'https://images.unsplash.com/photo-1573207535342-8c0f9506112e?w=400&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
];

const articleImages = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
  'https://images.unsplash.com/photo-1533750446969-255bbf191920?w=400&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80',
];

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

/* Magnetic button component */
function MagneticButton({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
}

/* Hero line animation variants */
const heroLine = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.2 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HomeContent() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <main className="min-h-screen">
      {/* ============================================
          HERO
          ============================================ */}
      <section className="relative overflow-hidden bg-[#0a0a0a] dot-grid">
        {/* Floating GlowOrbs */}
        <GlowOrb color="lime" size={600} className="top-[-200px] right-[-100px]" />
        <GlowOrb color="coral" size={400} className="bottom-[-100px] left-[-100px]" />
        <GlowOrb color="lime" size={300} className="top-[200px] left-[30%]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-4xl lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 bg-[rgba(200,255,0,0.08)] text-[#c8ff00] px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-[rgba(200,255,0,0.2)]"
              >
                <Star className="h-4 w-4 fill-[#c8ff00]" />
                Trusted by 50,000+ store owners
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight text-[#e8e6e3]"
                style={{ fontFamily: 'var(--font-display)' }}
                initial="hidden"
                animate="visible"
              >
                <motion.span className="block" variants={heroLine} custom={0}>
                  The tools your
                </motion.span>
                <motion.span className="block" variants={heroLine} custom={1}>
                  store{' '}
                  <span className="relative inline-block">
                    <span className="text-[#c8ff00]">actually</span>
                    <motion.span
                      className="absolute bottom-0 left-0 h-[3px] bg-[#c8ff00] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </span>{' '}
                  needs.
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl text-[#a1a09e] mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Independent, unbiased reviews of the best ecommerce tools for online stores.
                Find the right platforms, email marketing, reviews, and analytics solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <MagneticButton
                  href="/pillar/ecommerce-platforms"
                  className="btn-lime btn-pulse-glow px-8 py-4 text-lg gap-2 inline-flex items-center justify-center"
                >
                  Browse Platforms
                  <ArrowRight className="h-5 w-5" />
                </MagneticButton>
                <MagneticButton
                  href="/pillar/email-marketing"
                  className="btn-outline-lime px-8 py-4 text-lg inline-flex items-center justify-center"
                >
                  Email Marketing
                </MagneticButton>
              </motion.div>
            </div>

            {/* Hero Visual with floating animation + glow */}
            <motion.div
              className="flex-1 hidden lg:block relative"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Lime glow underneath */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-[rgba(200,255,0,0.12)] blur-2xl rounded-full" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HeroVisual />
              </motion.div>
              {/* Floating ecommerce image */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-24 rounded-xl overflow-hidden border-2 border-[rgba(200,255,0,0.3)] shadow-lg glow-lime"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Ecommerce dashboard"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="flex justify-center mt-16 lg:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="scroll-indicator flex flex-col items-center gap-1 text-[#52525b]">
              <span className="text-xs font-medium tracking-wide uppercase">Scroll</span>
              <ChevronDown className="h-5 w-5" />
            </div>
          </motion.div>
        </div>

        {/* Lime accent line divider */}
        <div className="lime-line w-full" />
      </section>

      {/* ============================================
          STATS BAR
          ============================================ */}
      <section className="bg-[#0a0a0a] border-b border-[#27272a]">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="glass-dark rounded-2xl px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { target: 86, suffix: '+', label: 'In-Depth Articles' },
                { target: 50, suffix: '+', label: 'Tools Reviewed' },
                { target: 100, suffix: '%', label: 'Unbiased Reviews' },
                { target: 2026, suffix: '', label: 'Latest Data' },
              ].map((stat, i) => (
                <div key={i} className="text-center relative">
                  {/* Pulse ring behind counter */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={statsInView ? { scale: [0, 2, 2.5], opacity: [0.4, 0.15, 0] } : {}}
                    transition={{ delay: 0.5 + i * 0.15, duration: 1.2, ease: 'easeOut' }}
                    style={{ background: 'rgba(200,255,0,0.2)' }}
                  />
                  <div className="relative mb-2">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2 + i * 0.2} />
                  </div>
                  <div className="text-sm text-[#a1a09e] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CATEGORIES
          ============================================ */}
      <section className="py-20 bg-[#0a0a0a] dot-grid relative overflow-hidden">
        <GlowOrb color="coral" size={350} className="top-[10%] right-[-100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#e8e6e3] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Browse by Category
            </h2>
            <p className="text-[#a1a09e] text-lg">Find the right ecommerce solutions for your online store</p>
          </motion.div>

          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.05}>
            {categories.map((cat, i) => {
              const CategorySvg = categoryIcons[i];
              return (
                <TiltCard key={i} intensity={12} className="rounded-xl">
                  <Link
                    href={cat.href}
                    className={`group card-dark card-hover-glow p-0 block overflow-hidden ${cat.featured ? 'md:col-span-2 lg:col-span-3 border-[rgba(200,255,0,0.15)]' : ''}`}
                  >
                    {/* Category image */}
                    <div className="relative h-36 overflow-hidden image-zoom-container">
                      <Image
                        src={categoryImages[i]}
                        alt={cat.title}
                        fill
                        className="object-cover image-zoom"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a19] via-[#1a1a19]/60 to-transparent" />
                    </div>
                    <div className="p-5">
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
                    </div>
                  </Link>
                </TiltCard>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Lime line divider */}
      <div className="lime-line w-full" />

      {/* ============================================
          LATEST ARTICLES
          ============================================ */}
      <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
        <GlowOrb color="lime" size={300} className="top-[20%] left-[-80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#e8e6e3] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Latest Articles
            </h2>
            <p className="text-[#a1a09e] text-lg">Fresh insights and comparisons to help you choose the right ecommerce tools</p>
          </motion.div>

          <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.05}>
            {articles.map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="group block bg-[#141413] rounded-xl border border-[#27272a] overflow-hidden hover:border-[rgba(200,255,0,0.4)] transition-all duration-300 hover:-translate-y-0.5 article-card-glow"
              >
                {/* Article image */}
                <div className="relative h-44 overflow-hidden image-zoom-container">
                  <Image
                    src={articleImages[i % articleImages.length]}
                    alt={article.title}
                    fill
                    className="object-cover image-zoom"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-[rgba(200,255,0,0.1)] text-[#c8ff00] text-xs font-bold rounded-full mb-3 tracking-wide uppercase">
                    {article.category}
                  </span>
                  <h3 className="text-base font-bold mb-2 text-[#e8e6e3] group-hover:text-[#c8ff00] transition leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
                    {article.title}
                  </h3>
                  <p className="text-[#a1a09e] text-sm mb-3 leading-relaxed line-clamp-2">{article.excerpt}</p>
                  <p className="text-[#52525b] text-xs font-medium">{article.date}</p>
                </div>
              </Link>
            ))}
          </StaggerReveal>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link href="/blog" className="btn-outline-lime px-6 py-3 text-base gap-2">
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          COMPARISONS
          ============================================ */}
      <section className="relative py-20 bg-[#0a0a0a] dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#e8e6e3] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Head-to-Head <span className="text-[#c8ff00]">Comparisons</span>
            </h2>
            <p className="text-[#a1a09e] text-lg">Direct comparisons to help you make the right choice</p>
          </motion.div>

          <StaggerReveal className="grid md:grid-cols-2 gap-5" staggerDelay={0.05}>
            {comparisons.map((comp, i) => (
              <TiltCard key={i} intensity={10} className="rounded-xl">
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
              </TiltCard>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ============================================
          WHY TRUST US
          ============================================ */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#e8e6e3] mb-3 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Why Trust Our Reviews?
            </h2>
            <p className="text-[#a1a09e] text-lg max-w-2xl mx-auto">We&apos;re committed to providing honest, data-driven insights</p>
          </motion.div>

          <StaggerReveal className="grid md:grid-cols-3 gap-6" staggerDelay={0.05}>
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
                <TiltCard key={i} intensity={8} className="rounded-xl">
                  <div className="text-center p-8 card-dark card-hover-glow">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(200,255,0,0.1)] rounded-xl mb-5">
                      <Icon className="h-7 w-7 text-[#c8ff00]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#e8e6e3] mb-2" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                    <p className="text-[#a1a09e] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* ============================================
          FINAL CTA
          ============================================ */}
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        {/* Lime line top */}
        <div className="lime-line w-full" />

        {/* GlowOrbs */}
        <GlowOrb color="lime" size={500} className="top-[-100px] left-[20%]" />
        <GlowOrb color="coral" size={350} className="bottom-[-80px] right-[10%]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 text-center">
          <motion.h2
            className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight animated-gradient-text"
            style={{ fontFamily: 'var(--font-display)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to find the right
            <br />
            ecommerce tools?
          </motion.h2>
          <motion.p
            className="text-lg text-[#a1a09e] mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Start with our most popular guides and comparisons. Everything you need to make an informed decision.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <MagneticButton href="/pillar/ecommerce-platforms" className="btn-lime btn-pulse-glow px-8 py-4 text-lg gap-2 inline-flex items-center justify-center">
              Start with Platforms
              <ArrowRight className="h-5 w-5" />
            </MagneticButton>
            <MagneticButton href="/blog" className="btn-outline-lime px-8 py-4 text-lg inline-flex items-center justify-center">
              Browse All Articles
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
