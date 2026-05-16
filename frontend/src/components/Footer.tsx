import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-accent-400" />
              <span className="text-xl font-bold">Crystal City School</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Providing quality education and nurturing young minds to become responsible, innovative, and compassionate leaders of tomorrow.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Education Lane, Crystal City</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +234 800 123 4567</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@crystalcity.edu</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events & News</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Student Portal</Link></li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-400">School Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday</li>
              <li className="font-semibold text-white">7:30 AM - 3:30 PM</li>
              <li className="mt-4">Office Hours</li>
              <li className="font-semibold text-white">8:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Crystal City School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
