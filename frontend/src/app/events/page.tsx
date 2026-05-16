'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';
import { eventsAPI, announcementsAPI } from '@/lib/api';

interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  location: string;
  category: string;
}

interface Announcement {
  id: number;
  title: string;
  content: string;
  category: string;
  author_name: string;
  created_at: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [activeTab, setActiveTab] = useState<'events' | 'news'>('events');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [eventsRes, announcementsRes] = await Promise.allSettled([
        eventsAPI.getAll({ upcoming: 'true', limit: 20 }),
        announcementsAPI.getAll({ limit: 20 }),
      ]);

      if (eventsRes.status === 'fulfilled') setEvents(eventsRes.value.data.events);
      if (announcementsRes.status === 'fulfilled') setAnnouncements(announcementsRes.value.data.announcements);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      general: 'bg-blue-100 text-blue-700',
      academic: 'bg-green-100 text-green-700',
      sports: 'bg-orange-100 text-orange-700',
      event: 'bg-purple-100 text-purple-700',
      urgent: 'bg-red-100 text-red-700',
    };
    return colors[category] || colors.general;
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & News</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Stay up to date with the latest happenings at Crystal City School.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex space-x-4 mb-8 border-b">
            <button
              onClick={() => setActiveTab('events')}
              className={`pb-3 px-4 font-semibold transition-colors ${
                activeTab === 'events'
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`pb-3 px-4 font-semibold transition-colors ${
                activeTab === 'news'
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Announcements & News
            </button>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto"></div>
              <p className="mt-4 text-gray-500">Loading...</p>
            </div>
          ) : (
            <>
              {/* Events Tab */}
              {activeTab === 'events' && (
                <div className="space-y-6">
                  {events.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                      <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
                      <p className="text-gray-400">Check back soon for updates!</p>
                    </div>
                  ) : (
                    events.map((event) => (
                      <div key={event.id} className="card flex flex-col md:flex-row gap-6">
                        <div className="bg-primary-50 rounded-lg p-4 text-center min-w-[100px]">
                          <div className="text-sm text-primary-500 font-medium">
                            {new Date(event.event_date).toLocaleDateString('en-NG', { month: 'short' })}
                          </div>
                          <div className="text-3xl font-bold text-primary-700">
                            {new Date(event.event_date).getDate()}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDate(event.event_date)}</span>
                            {event.event_time && <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {event.event_time}</span>}
                            {event.location && <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {event.location}</span>}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* News/Announcements Tab */}
              {activeTab === 'news' && (
                <div className="grid md:grid-cols-2 gap-6">
                  {announcements.length === 0 ? (
                    <div className="col-span-2 text-center py-12 bg-gray-50 rounded-xl">
                      <Tag className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-lg">No announcements yet.</p>
                      <p className="text-gray-400">Check back soon for news!</p>
                    </div>
                  ) : (
                    announcements.map((announcement) => (
                      <div key={announcement.id} className="card">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(announcement.category)}`}>
                            {announcement.category}
                          </span>
                          <span className="text-xs text-gray-400">{formatDate(announcement.created_at)}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{announcement.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-3">{announcement.content}</p>
                        {announcement.author_name && (
                          <p className="text-xs text-gray-400 mt-3">Posted by: {announcement.author_name}</p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
