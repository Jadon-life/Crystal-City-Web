'use client';

import { useState, useEffect } from 'react';
import { Mail, MailOpen, Clock } from 'lucide-react';
import { adminAPI } from '@/lib/api';

interface Message {
  id: number;
  sender_name: string;
  sender_email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => { loadMessages(); }, []);

  const loadMessages = async () => {
    try {
      const response = await adminAPI.getMessages();
      setMessages(response.data.messages);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
        <p className="text-gray-600">Messages received from the contact form</p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
        </div>
      ) : messages.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No messages received yet.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Messages List */}
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setSelectedMessage(msg)}
                className={`bg-white rounded-xl shadow-sm border p-4 cursor-pointer transition-all hover:shadow-md ${
                  selectedMessage?.id === msg.id ? 'border-primary-500 ring-2 ring-primary-100' : 'border-gray-100'
                } ${!msg.is_read ? 'border-l-4 border-l-primary-500' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {msg.is_read ? <MailOpen className="h-4 w-4 text-gray-400" /> : <Mail className="h-4 w-4 text-primary-500" />}
                      <span className="font-medium text-gray-900 truncate">{msg.sender_name}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mt-1 truncate">{msg.subject}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate">{msg.message}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                    {new Date(msg.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Detail */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            {selectedMessage ? (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{selectedMessage.subject}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b">
                  <span><strong>From:</strong> {selectedMessage.sender_name}</span>
                  <span>{selectedMessage.sender_email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <Clock className="h-4 w-4" />
                  {new Date(selectedMessage.created_at).toLocaleString()}
                </div>
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {selectedMessage.message}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <a
                    href={`mailto:${selectedMessage.sender_email}?subject=Re: ${selectedMessage.subject}`}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" /> Reply via Email
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[300px] text-gray-400">
                <div className="text-center">
                  <Mail className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Select a message to view</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
