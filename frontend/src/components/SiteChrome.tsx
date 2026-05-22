'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Routes that should render fully immersive (no school Navbar/Footer).
 * Add path prefixes here to opt routes into the chrome-less experience.
 */
const IMMERSIVE_PREFIXES = ['/crystal-city'];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? '/';
  const immersive = IMMERSIVE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (immersive) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
