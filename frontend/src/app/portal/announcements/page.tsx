'use client';

import { useState, useEffect } from 'react';
import { Megaphone, Tag } from 'lucide-react';
import { announcementsAPI } from '@/lib/api';

interface Announcement {
  id: number;
  title: string;
  content: string;
  category: string;
  author_name: string;
  target_audience: string;
  created_at: string;
}

export default function PortalAnnouncements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  useEffect(() => { loadAnnouncements(); }, []);

  const loadAnnouncements = async () => {
    try {
      const response = await announcementsAPI.getAll({ limit: 30 });
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
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
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">School Announcements</h1>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
        </div>
      ) : announcements.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <Megaphone className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500 text-lg">No announcements at the moment.</p>
          <p className="text-gray-400">Check back later for updates!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-sm border p-5 cursor-pointer transition-all hover:shadow-md ${
                item.category === 'urgent' ? 'border-l-4 border-l-red-500' : 'border-gray-100'
              }`}
              onClick={() => setSelectedAnnouncement(selectedAnnouncement?.id === item.id ? null : item)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(item.created_at).toLocaleDateString('en-NG', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  
                  {selectedAnnouncement?.id === item.id ? (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{item.content}</p>
                      {item.author_name && (
                        <p className="text-sm text-gray-500 mt-4">Posted by: {item.author_name}</p>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.content}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
