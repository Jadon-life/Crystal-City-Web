import Link from 'next/link';
import { GraduationCap, Users, BookOpen, Trophy, ArrowRight, Star, Calendar, Phone } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Nurturing Minds,<br />
              <span className="text-accent-400">Building Futures</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Crystal City School provides world-class education, shaping students into confident, knowledgeable, and responsible leaders of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions" className="btn-accent text-center">
                Apply for Admission
              </Link>
              <Link href="/about" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10 text-center">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">500+</div>
              <div className="text-gray-600 mt-1">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">50+</div>
              <div className="text-gray-600 mt-1">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">25+</div>
              <div className="text-gray-600 mt-1">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500">98%</div>
              <div className="text-gray-600 mt-1">Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Why Choose Crystal City School?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide a holistic educational experience that prepares students for academic excellence and life beyond the classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Academic Excellence</h3>
              <p className="text-gray-600">
                Our rigorous curriculum and dedicated teachers ensure students achieve outstanding academic results year after year.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Character Development</h3>
              <p className="text-gray-600">
                We foster integrity, discipline, and leadership through our comprehensive character education programs.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary-700">Extracurricular Activities</h3>
              <p className="text-gray-600">
                Sports, arts, clubs, and competitions help students discover their passions and develop well-rounded skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Programs</h2>
            <p className="text-gray-600 text-lg">Comprehensive education from early years through secondary school</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-primary-100 rounded-xl p-8 hover:border-primary-300 transition-colors">
              <div className="text-primary-500 font-bold text-lg mb-2">Early Years</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Nursery & Primary</h3>
              <p className="text-gray-600 mb-4">Ages 3-11. Building strong foundations through play-based and structured learning.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> Small class sizes</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> Qualified teachers</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> Safe environment</li>
              </ul>
            </div>

            <div className="border-2 border-primary-300 rounded-xl p-8 bg-primary-50 relative">
              <div className="absolute -top-3 left-6 bg-accent-400 text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
              <div className="text-primary-500 font-bold text-lg mb-2">Middle School</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Junior Secondary</h3>
              <p className="text-gray-600 mb-4">Ages 11-14. Developing critical thinking and academic skills.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> STEM focus</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> Arts & Sports</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> Career guidance</li>
              </ul>
            </div>

            <div className="border-2 border-primary-100 rounded-xl p-8 hover:border-primary-300 transition-colors">
              <div className="text-primary-500 font-bold text-lg mb-2">Senior School</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Senior Secondary</h3>
              <p className="text-gray-600 mb-4">Ages 14-18. Preparing for university and beyond.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> Exam preparation</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> University counseling</li>
                <li className="flex items-center gap-2"><Star className="h-4 w-4 text-accent-500" /> Leadership programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Give Your Child the Best Education?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of families who trust Crystal City School for their children&apos;s future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-accent flex items-center justify-center gap-2">
              Start Application <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all">
              <Phone className="h-5 w-5" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
