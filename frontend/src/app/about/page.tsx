import { GraduationCap, Target, Heart, Eye, Award, BookOpen, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Crystal City School</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Over 25 years of excellence in education, shaping generations of leaders and innovators.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded in 1998, Crystal City School began with a simple vision: to provide quality education accessible to every child. What started as a small school with 30 students has grown into one of the most respected educational institutions in the region.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Today, with over 500 students and 50 dedicated staff members, we continue to uphold the values of academic excellence, character development, and community service that have defined us from the beginning.
              </p>
              <p className="text-gray-600 text-lg">
                Our alumni have gone on to excel in various fields including medicine, engineering, law, business, and the arts, carrying with them the values and knowledge they gained at Crystal City School.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <Award className="h-10 w-10 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-700">25+</div>
                  <div className="text-gray-600 text-sm">Years of Excellence</div>
                </div>
                <div className="text-center p-4">
                  <Users className="h-10 w-10 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-700">2000+</div>
                  <div className="text-gray-600 text-sm">Alumni Network</div>
                </div>
                <div className="text-center p-4">
                  <BookOpen className="h-10 w-10 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-700">98%</div>
                  <div className="text-gray-600 text-sm">Pass Rate</div>
                </div>
                <div className="text-center p-4">
                  <GraduationCap className="h-10 w-10 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-700">50+</div>
                  <div className="text-gray-600 text-sm">Expert Teachers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide a nurturing and stimulating learning environment that empowers every student to achieve their full potential academically, socially, and morally.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be a leading educational institution recognized for excellence in teaching, innovation in learning, and the development of globally competitive graduates.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-primary-700 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, Excellence, Respect, Innovation, and Community. These core values guide everything we do and shape the character of our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Leadership Team</h2>
            <p className="text-gray-600 text-lg">Experienced educators dedicated to your child&apos;s success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Adebayo Johnson', role: 'Principal', desc: 'Ph.D. in Education with 20+ years of experience in school administration.' },
              { name: 'Mrs. Grace Okonkwo', role: 'Vice Principal (Academics)', desc: 'M.Ed. specialist in curriculum development and student assessment.' },
              { name: 'Mr. Samuel Ade', role: 'Vice Principal (Admin)', desc: 'MBA with expertise in educational management and institutional development.' },
            ].map((leader, i) => (
              <div key={i} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{leader.name}</h3>
                <p className="text-primary-500 font-medium mb-2">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
