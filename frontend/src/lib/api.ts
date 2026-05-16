import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;

// Auth API
export const authAPI = {
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  register: (data: any) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
};

// Announcements API
export const announcementsAPI = {
  getAll: (params?: { limit?: number; offset?: number; category?: string }) => api.get('/announcements', { params }),
  create: (data: any) => api.post('/announcements', data),
  update: (id: number, data: any) => api.put(`/announcements/${id}`, data),
  delete: (id: number) => api.delete(`/announcements/${id}`),
};

// Events API
export const eventsAPI = {
  getAll: (params?: { upcoming?: string; limit?: number }) => api.get('/events', { params }),
  create: (data: any) => api.post('/events', data),
  update: (id: number, data: any) => api.put(`/events/${id}`, data),
  delete: (id: number) => api.delete(`/events/${id}`),
};

// Calendar API
export const calendarAPI = {
  getAll: (params?: { month?: number; year?: number }) => api.get('/events/calendar', { params }),
  create: (data: any) => api.post('/events/calendar', data),
};

// Contact API
export const contactAPI = {
  submit: (data: { sender_name: string; sender_email: string; subject: string; message: string }) => api.post('/contact', data),
};

// Admin API
export const adminAPI = {
  getStats: () => api.get('/admin/stats'),
  getStudents: (params?: any) => api.get('/admin/students', { params }),
  createStudent: (data: any) => api.post('/admin/students', data),
  updateStudent: (id: number, data: any) => api.put(`/admin/students/${id}`, data),
  deleteStudent: (id: number) => api.delete(`/admin/students/${id}`),
  getMessages: () => api.get('/admin/messages'),
};
