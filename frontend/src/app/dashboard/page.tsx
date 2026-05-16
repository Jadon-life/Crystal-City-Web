'use client';

import { useState, useEffect } from 'react';
import { Users, Megaphone, Calendar, MessageSquare, TrendingUp } from 'lucide-react';
import { adminAPI } from '@/lib/api';

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalAnnouncements: 0,
    upcomingEvents: 0,
    unreadMessages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await adminAPI.getStats();
      setStats(response.data);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { label: 'Total Students', value: stats.totalStudents, icon: Users, color: 'bg-blue-500', bgLight: 'bg-blue-50' },
    { label: 'Announcements', value: stats.totalAnnouncements, icon: Megaphone, color: 'bg-green-500', bgLight: 'bg-green-50' },
    { label: 'Upcoming Events', value: stats.upcomingEvents, icon: Calendar, color: 'bg-purple-500', bgLight: 'bg-purple-50' },
    { label: 'Unread Messages', value: stats.unreadMessages, icon: MessageSquare, color: 'bg-orange-500', bgLight: 'bg-orange-50' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening at Crystal City School.</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgLight} p-3 rounded-lg`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color.replace('bg-', '')}`} style={{ color: stat.color === 'bg-blue-500' ? '#3b82f6' : stat.color === 'bg-green-500' ? '#22c55e' : stat.color === 'bg-purple-500' ? '#a855f7' : '#f97316' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary-500" /> Quick Actions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="/dashboard/students" className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Manage Students</span>
              </a>
              <a href="/dashboard/announcements" className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center">
                <Megaphone className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Post Announcement</span>
              </a>
              <a href="/dashboard/events" className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center">
                <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">Add Event</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
