import Link from 'next/link';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

const services = [
  { icon: '🫀', title: 'Cardiology', desc: 'Expert heart care and cardiac treatments' },
  { icon: '🧠', title: 'Neurology', desc: 'Advanced brain and nervous system care' },
  { icon: '🦴', title: 'Orthopedics', desc: 'Bone, joint and muscle treatments' },
  { icon: '👁️', title: 'Ophthalmology', desc: 'Comprehensive eye care services' },
  { icon: '🦷', title: 'Dentistry', desc: 'Complete dental health solutions' },
  { icon: '🤱', title: 'Pediatrics', desc: 'Specialized care for children' },
];

const stats = [
  { value: '10,000+', label: 'Patients Served' },
  { value: '150+', label: 'Specialists' },
  { value: '25+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-500 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Now Accepting New Patients
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Your Health Is Our
            <br />
            <span className="text-brand-200">Top Priority</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-brand-100 md:text-xl">
            MediCare Hospital provides world-class healthcare with compassionate doctors and modern
            facilities — 24/7.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
            <Link
              href="/appointment"
              className="rounded-xl bg-white px-8 py-3 font-semibold text-brand-700 shadow-lg transition-colors hover:bg-brand-50"
            >
              Book Appointment
            </Link>
            <Link
              href="/hospital/about"
              className="rounded-xl border border-white/50 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-brand-600">{value}</div>
              <div className="mt-1 text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-500">Comprehensive care across all major medical specialties</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {services.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-brand-100">
            Book your appointment today and get the best medical care.
          </p>
          <Link
            href="/appointment"
            className="inline-block rounded-xl bg-white px-8 py-3 font-semibold text-brand-700 shadow-md transition-colors hover:bg-brand-50"
          >
            Schedule an Appointment
          </Link>
        </div>
      </section>

      {/* Footer Strip */}
      <section className="bg-gray-900 px-6 py-8 text-sm text-gray-400">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <FiMapPin size={14} />
            123 Health Avenue, Care City
          </div>
          <div className="flex items-center gap-2">
            <FiPhone size={14} />
            (555) 123-4567
          </div>
          <div className="flex items-center gap-2">
            <FiClock size={14} />
            Open 24/7
          </div>
        </div>
      </section>
    </main>
  );
}
