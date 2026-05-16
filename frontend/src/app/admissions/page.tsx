import Link from 'next/link';
import { CheckCircle, FileText, Calendar, CreditCard, ArrowRight } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Join the Crystal City School family. We welcome students who are eager to learn and grow.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Admission Process</h2>
            <p className="text-gray-600 text-lg">Follow these simple steps to enroll your child</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FileText, step: '01', title: 'Submit Application', desc: 'Complete the online application form or collect a form from our office.' },
              { icon: Calendar, step: '02', title: 'Entrance Assessment', desc: 'Students take an age-appropriate assessment to determine placement.' },
              { icon: CheckCircle, step: '03', title: 'Interview', desc: 'Parents and students meet with our admissions team for an interview.' },
              { icon: CreditCard, step: '04', title: 'Enrollment', desc: 'Complete registration, pay fees, and receive your welcome pack.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="card text-center h-full">
                  <div className="text-4xl font-bold text-primary-100 mb-2">{item.step}</div>
                  <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="section-heading">Requirements</h2>
              <p className="text-gray-600 mb-6">Please prepare the following documents for the application:</p>
              <ul className="space-y-3">
                {[
                  'Completed application form',
                  'Birth certificate (original + photocopy)',
                  'Previous school report card',
                  'Transfer certificate (for transfer students)',
                  '4 recent passport photographs',
                  'Parent/Guardian valid ID card',
                  'Immunization records',
                  'Application fee receipt',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="section-heading">Fee Structure</h2>
              <p className="text-gray-600 mb-6">Our fees cover tuition, books, and extracurricular activities:</p>
              <div className="space-y-4">
                {[
                  { level: 'Nursery/Kindergarten', fee: 'Contact office for details' },
                  { level: 'Primary 1-3', fee: 'Contact office for details' },
                  { level: 'Primary 4-6', fee: 'Contact office for details' },
                  { level: 'Junior Secondary (JSS 1-3)', fee: 'Contact office for details' },
                  { level: 'Senior Secondary (SSS 1-3)', fee: 'Contact office for details' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                    <span className="font-medium text-gray-800">{item.level}</span>
                    <span className="text-primary-500 font-semibold">{item.fee}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">* Fees are subject to review. Contact us for the most current information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg text-gray-200 mb-6">Start your child&apos;s journey to excellence today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent">
              Contact Admissions Office
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all text-center">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
