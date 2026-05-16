'use client';

import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, BookOpen, Users } from 'lucide-react';
import { authAPI } from '@/lib/api';

interface UserProfile {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  phone: string;
  address: string;
  class_name: string;
  admission_number: string;
  parent_name: string;
  parent_phone: string;
  profile_image: string;
  created_at: string;
}

export default function PortalProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await authAPI.getMe();
      setProfile(response.data.user);
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!profile) {
    return <div className="text-center py-12 text-gray-500">Unable to load profile.</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">
              {profile.first_name[0]}{profile.last_name[0]}
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-900">{profile.first_name} {profile.last_name}</h2>
          <p className="text-primary-500 font-medium capitalize">{profile.role}</p>
          {profile.class_name && (
            <p className="text-gray-600 mt-1">Class: {profile.class_name}</p>
          )}
          {profile.admission_number && (
            <p className="text-sm text-gray-500 mt-1">Adm. No: {profile.admission_number}</p>
          )}
          <div className="mt-4 pt-4 border-t text-sm text-gray-500">
            Member since {new Date(profile.created_at).toLocaleDateString('en-NG', { year: 'numeric', month: 'long' })}
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-primary-500" /> Personal Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase">Full Name</label>
                <p className="text-gray-900 font-medium">{profile.first_name} {profile.last_name}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-1"><Mail className="h-3 w-3" /> Email</label>
                <p className="text-gray-900">{profile.email}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-1"><Phone className="h-3 w-3" /> Phone</label>
                <p className="text-gray-900">{profile.phone || 'Not provided'}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-1"><MapPin className="h-3 w-3" /> Address</label>
                <p className="text-gray-900">{profile.address || 'Not provided'}</p>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary-500" /> Academic Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase flex items-center gap-1"><GraduationCap className="h-3 w-3" /> Class</label>
                <p className="text-gray-900">{profile.class_name || 'Not assigned'}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase">Admission Number</label>
                <p className="text-gray-900">{profile.admission_number || 'Not assigned'}</p>
              </div>
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary-500" /> Parent/Guardian Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase">Parent Name</label>
                <p className="text-gray-900">{profile.parent_name || 'Not provided'}</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-500 uppercase">Parent Phone</label>
                <p className="text-gray-900">{profile.parent_phone || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
