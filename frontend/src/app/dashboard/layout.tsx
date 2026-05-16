'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { LayoutDashboard, Users, Megaphone, Calendar, MessageSquare, LogOut, GraduationCap } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  const navItems = [
    { href: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { href: '/dashboard/students', icon: Users, label: 'Students' },
    { href: '/dashboard/announcements', icon: Megaphone, label: 'Announcements' },
    { href: '/dashboard/events', icon: Calendar, label: 'Events & Calendar' },
    { href: '/dashboard/messages', icon: MessageSquare, label: 'Messages' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-900 text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-primary-700">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-7 w-7 text-accent-400" />
            <span className="font-bold text-lg">Admin Panel</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-primary-700 hover:text-white transition-colors"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-primary-700">
          <div className="text-sm text-gray-400 mb-2">Logged in as:</div>
          <div className="text-sm font-medium">{user.first_name} {user.last_name}</div>
          <button
            onClick={() => { logout(); router.push('/'); }}
            className="mt-3 flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <div className="md:hidden bg-primary-900 text-white p-4 flex items-center justify-between">
          <span className="font-bold">Admin Panel</span>
          <button onClick={() => { logout(); router.push('/'); }} className="text-gray-300 hover:text-white">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
        {/* Mobile Nav */}
        <div className="md:hidden bg-primary-800 overflow-x-auto">
          <div className="flex px-2 py-2 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 rounded text-xs text-gray-300 hover:bg-primary-700 hover:text-white whitespace-nowrap"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
