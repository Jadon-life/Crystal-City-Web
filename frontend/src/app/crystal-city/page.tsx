import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Leaf,
  Zap,
  Recycle,
  Sparkles,
  Play,
  ShoppingBag,
} from 'lucide-react';

import SodaCan from './SodaCan';
import Cherry from './Cherry';
import BubbleField from './BubbleField';

export const metadata: Metadata = {
  title: 'Crystal City — Refreshingly Clean. Zero Sugar Craft Soda.',
  description:
    'Crystal City is a premium zero-sugar craft soda. Crisp, refreshing, designed for the bold — refreshment redefined in every bubble.',
};

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#ingredients', label: 'Ingredients' },
  { href: '#taste', label: 'Taste' },
  { href: '#sizes', label: 'Sizes' },
  { href: '#texture', label: 'Texture' },
];

const FLAVORS = [
  { name: 'Cherry Burst', dot: 'bg-crystal-cherry', price: '$2.99', active: true },
  { name: 'Citrus Twist', dot: 'bg-lime-400', price: '$2.49', active: false },
  { name: 'Mint Chill', dot: 'bg-emerald-300', price: '$2.99', active: false },
];

const FEATURES = [
  {
    icon: Zap,
    title: 'Zero Sugar',
    body: 'All the crisp, none of the crash. Natural sweetness, real flavor.',
  },
  {
    icon: Leaf,
    title: 'Real Botanicals',
    body: 'Brewed with hand-picked guaraná, real cherry essence and pure spring water.',
  },
  {
    icon: Sparkles,
    title: 'Crisp Carbonation',
    body: 'Micro-bubble brewing process for a cleaner, longer-lasting fizz.',
  },
  {
    icon: Recycle,
    title: '100% Recyclable',
    body: 'Aluminum cans built to circle back. Drink it, recycle it, repeat.',
  },
];

export default function CrystalCityLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden cc-radial-bg cc-grain font-sans text-white cc-respect-motion">
      {/* === Background ornaments (animated blobs) === */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-crystal-jade/30 blur-3xl animate-blob" />
        <div
          className="absolute top-40 -right-24 h-[560px] w-[560px] rounded-full bg-emerald-500/20 blur-3xl animate-blob"
          style={{ animationDelay: '4s' }}
        />
        <div
          className="absolute bottom-[-180px] left-1/4 h-[460px] w-[460px] rounded-full bg-teal-400/20 blur-3xl animate-blob"
          style={{ animationDelay: '8s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crystal-glow/10 blur-3xl animate-pulse-glow"
        />
      </div>

      {/* Rising bubbles */}
      <BubbleField />

      {/* === Top Navigation === */}
      <header className="relative z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-crystal-mint to-crystal-jade shadow-lg shadow-crystal-jade/30">
              <span className="absolute inset-1 rounded-full bg-crystal-deep" />
              <span className="relative font-serif text-sm font-bold text-crystal-mint">
                C
              </span>
            </span>
            <span className="hidden font-serif text-lg font-semibold tracking-wide text-white sm:inline">
              Crystal<span className="text-crystal-mint">.</span>
            </span>
          </Link>

          {/* Centered links */}
          <ul className="hidden items-center gap-1 rounded-full cc-glass px-2 py-1.5 text-sm font-medium md:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-crystal-deep shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 hover:bg-white"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </nav>
      </header>

      {/* === Hero === */}
      <section
        id="home"
        className="relative z-20 mx-auto max-w-7xl px-5 pb-24 pt-6 sm:px-8 sm:pb-32 sm:pt-10 lg:pt-14"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* === Left: copy === */}
          <div className="relative z-20 lg:col-span-6 animate-fade-up">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full cc-glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-crystal-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-crystal-mint shadow-[0_0_10px_#34d399]" />
              New · Cherry Burst Edition
            </div>

            {/* Title */}
            <h1 className="font-serif text-[3.4rem] leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.2rem]">
              <span className="block cc-text-gradient">Crystal</span>
              <span className="block italic text-white/95">
                City<span className="text-crystal-mint">.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              Unleash the crisp taste of zero sugar. Refreshment redefined in
              every bubble — all in one sleek design.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#shop"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-7 py-4 text-sm font-semibold text-crystal-deep shadow-2xl shadow-crystal-jade/20 transition-transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="h-4 w-4" />
                Shop Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-crystal-deep text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
                {/* Shimmer sheen */}
                <span className="pointer-events-none absolute inset-y-0 -inset-x-10 block">
                  <span className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
                </span>
              </a>

              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/90 backdrop-blur transition-colors hover:bg-white/10"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Watch the story
              </a>
            </div>

            {/* Stats strip */}
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { v: '0g', l: 'Sugar' },
                { v: '5kcal', l: 'Per can' },
                { v: '350ml', l: 'Volume' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-2xl font-semibold text-white sm:text-3xl">
                    {s.v}
                  </dt>
                  <dd className="text-xs uppercase tracking-widest text-white/50">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* === Right: product visual === */}
          <div className="relative lg:col-span-6 cc-perspective">
            <div className="relative mx-auto aspect-square w-full max-w-[560px]">
              {/* Soft glow disc behind can */}
              <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crystal-jade/30 blur-3xl animate-pulse-glow" />

              {/* Decorative orbital ring */}
              <div className="absolute inset-[6%] rounded-full border border-white/10 animate-spin-slow" />
              <div
                className="absolute inset-[14%] rounded-full border border-dashed border-white/10 animate-spin-slow"
                style={{ animationDirection: 'reverse', animationDuration: '40s' }}
              />

              {/* Cherry — back top-left */}
              <Cherry
                aria-hidden="true"
                className="absolute left-[6%] top-[8%] w-20 sm:w-24 animate-float-cherry"
                style={{
                  filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.5))',
                  animationDelay: '0.2s',
                }}
              />

              {/* Cherry — back top-right (large) */}
              <Cherry
                aria-hidden="true"
                className="absolute right-[2%] top-[2%] w-28 sm:w-36 animate-float-cherry"
                style={{
                  filter: 'drop-shadow(0 18px 24px rgba(0,0,0,0.55))',
                  animationDelay: '1.2s',
                  transform: 'rotate(14deg)',
                }}
              />

              {/* The hero can */}
              <SodaCan
                className="relative mx-auto h-full w-auto cc-shadow-can animate-float-can"
                style={{
                  transform: 'rotate(-8deg)',
                }}
              />

              {/* Cherry — front mid-right */}
              <Cherry
                aria-hidden="true"
                className="absolute right-[4%] top-[44%] w-20 sm:w-24 animate-float-cherry"
                style={{
                  filter: 'drop-shadow(0 14px 18px rgba(0,0,0,0.55))',
                  animationDelay: '2.4s',
                  transform: 'rotate(-12deg)',
                }}
              />

              {/* Cherry — front bottom-left (small) */}
              <Cherry
                aria-hidden="true"
                className="absolute bottom-[8%] left-[4%] w-16 sm:w-20 animate-float-cherry"
                style={{
                  filter: 'drop-shadow(0 12px 16px rgba(0,0,0,0.55))',
                  animationDelay: '3.6s',
                  transform: 'rotate(20deg)',
                }}
              />

              {/* Refreshingly Clean — script overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-2 right-0 z-30 select-none text-right leading-[0.85] font-script text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
              >
                <span className="block text-5xl sm:text-6xl lg:text-7xl animate-tilt origin-bottom-right">
                  Refreshingly
                </span>
                <span className="block -mt-2 text-6xl italic sm:text-7xl lg:text-8xl">
                  Clean
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* === Floating flavor selector (top-right) === */}
        <aside
          className="absolute right-6 top-28 hidden w-64 rounded-3xl cc-glass p-4 shadow-2xl shadow-black/40 animate-float-slow lg:block"
          aria-label="Available flavors"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">
              Flavors
            </p>
            <span className="text-[10px] text-white/40">3 available</span>
          </div>
          <ul className="mt-3 space-y-2">
            {FLAVORS.map((f) => (
              <li
                key={f.name}
                className={`flex items-center justify-between rounded-2xl px-3 py-2.5 transition-colors ${
                  f.active
                    ? 'bg-white/10 ring-1 ring-white/15'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-7 w-7 rounded-full ${f.dot} shadow-inner shadow-black/40`}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">{f.name}</p>
                    <p className="text-[11px] text-white/50">350ml · Slim Can</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-crystal-mint">
                  {f.price}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* === Award badge (bottom-left) === */}
        <div className="mt-10 flex items-center gap-3 lg:absolute lg:bottom-8 lg:left-8 lg:mt-0">
          <span className="flex h-10 w-10 items-center justify-center rounded-full cc-glass">
            <Award className="h-5 w-5 text-crystal-mint" />
          </span>
          <div className="leading-tight">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">
              Design Awards
            </p>
            <p className="text-sm font-semibold tracking-wide text-white">
              Premium Beverage 2021
            </p>
          </div>
        </div>
      </section>

      {/* === Below the fold: feature strip === */}
      <section
        id="ingredients"
        className="relative z-10 border-t border-white/5 bg-crystal-deep/40 py-20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-crystal-mint">
                Why Crystal City
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Crafted for the bold.
                <br />
                <span className="italic text-white/70">Brewed for the calm.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/60">
              Every can is the result of three years of taste-testing, sourcing
              and bubble-engineering. No shortcuts. No sugar. Just the cleanest
              fizz you have ever tasted.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-3xl cc-glass p-6 transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-crystal-jade/20 ring-1 ring-crystal-jade/30">
                  <Icon className="h-5 w-5 text-crystal-mint" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Footer === */}
      <footer
        id="contact"
        className="relative z-10 border-t border-white/5 bg-crystal-deep/70 py-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-white/50 sm:flex-row sm:px-8">
          <p className="font-serif text-base text-white">
            Crystal City<span className="text-crystal-mint">.</span>
          </p>
          <p className="text-xs uppercase tracking-[0.25em]">
            Refreshment redefined · {new Date().getFullYear()}
          </p>
          <div className="flex gap-5 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              TikTok
            </a>
            <a href="#" className="hover:text-white">
              Press
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
