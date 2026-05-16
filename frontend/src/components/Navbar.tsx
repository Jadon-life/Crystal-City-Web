'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Menu, X, GraduationCap, LogOut, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/events', label: 'Events & News' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-primary-700">Crystal City School</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-3">
                <Link
                  href={user.role === 'admin' ? '/dashboard' : '/portal'}
                  className="btn-primary text-sm py-2 px-4"
                >
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {user.role === 'admin' ? 'Dashboard' : 'Portal'}
                  </span>
                </Link>
                <button onClick={logout} className="text-gray-500 hover:text-red-500 transition-colors">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn-primary text-sm py-2 px-4">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-500 font-medium px-3 py-2 rounded-md hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    href={user.role === 'admin' ? '/dashboard' : '/portal'}
                    className="btn-primary text-sm text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {user.role === 'admin' ? 'Dashboard' : 'Student Portal'}
                  </Link>
                  <button onClick={() => { logout(); setIsOpen(false); }} className="text-red-500 font-medium px-3 py-2">
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="btn-primary text-sm text-center" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
