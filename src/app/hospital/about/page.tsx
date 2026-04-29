import type { Metadata } from 'next';
import Link from 'next/link';
import { FiAward, FiHeart, FiShield, FiUsers, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About Us | MediCare Hospital',
};

const stats = [
  { value: '1998', label: 'Founded' },
  { value: '150+', label: 'Specialists' },
  { value: '10K+', label: 'Patients/Year' },
  { value: '98%', label: 'Satisfaction' },
];

const values = [
  {
    icon: FiHeart,
    title: 'Compassionate Care',
    desc: 'Every patient is treated with dignity, empathy, and genuine concern for their wellbeing.',
  },
  {
    icon: FiShield,
    title: 'Safety First',
    desc: 'We uphold the highest standards of clinical safety and evidence-based medical practice.',
  },
  {
    icon: FiAward,
    title: 'Excellence',
    desc: 'Continuously striving for the best outcomes through research, education, and innovation.',
  },
  {
    icon: FiUsers,
    title: 'Community Focus',
    desc: 'Rooted in the community, we serve all patients regardless of background or circumstance.',
  },
];

const team = [
  { name: 'Dr. Emily Chen', role: 'Chief of Cardiology', avatar: 'EC', exp: '20 years' },
  { name: 'Dr. James Wilson', role: 'Head of Orthopedics', avatar: 'JW', exp: '17 years' },
  { name: 'Dr. Priya Patel', role: 'Director of Pediatrics', avatar: 'PP', exp: '15 years' },
  { name: 'Dr. Alex Turner', role: 'Chief Neurologist', avatar: 'AT', exp: '22 years' },
  { name: 'Dr. Maria Lopez', role: 'Head of Dermatology', avatar: 'ML', exp: '12 years' },
  { name: 'Dr. Samuel Osei', role: 'Lead Surgeon', avatar: 'SO', exp: '18 years' },
];

export default function HospitalAbout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-800 to-brand-500 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-extrabold md:text-5xl">About MediCare Hospital</h1>
          <p className="mx-auto max-w-xl text-lg text-brand-100">
            Delivering world-class healthcare to our community since 1998. Trusted by thousands,
            dedicated to all.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="/appointment"
              className="rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-brand-700 shadow-md transition-colors hover:bg-brand-50"
            >
              Book Appointment
            </Link>
            <Link
              href="/hospital/contact"
              className="rounded-xl border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-gray-100 bg-white px-6 py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-brand-600">{value}</div>
              <div className="mt-1 text-sm text-gray-500">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-14 px-6 py-12">
        {/* Mission */}
        <section className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Our Mission
            </span>
            <h2 className="text-3xl font-bold leading-snug text-gray-900">
              Healing with Compassion & Excellence
            </h2>
            <p className="leading-relaxed text-gray-600">
              At MediCare Hospital, our mission is to deliver high-quality, patient-centered
              healthcare with respect and integrity. We believe that every person deserves access to
              exceptional medical care, and we work tirelessly to make that a reality.
            </p>
            <p className="leading-relaxed text-gray-600">
              Our multidisciplinary team of specialists collaborates to provide holistic treatment
              plans tailored to each patient's unique needs, ensuring the best possible outcomes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="space-y-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="space-y-6">
          <div className="space-y-1 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
              Our Specialists
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Meet the Team</h2>
            <p className="mx-auto max-w-md text-sm text-gray-500">
              Expert doctors dedicated to providing the best care for every patient.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {team.map(({ name, role, avatar, exp }) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-lg font-bold text-white">
                  {avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{name}</div>
                  <div className="mt-0.5 text-xs font-medium text-brand-600">{role}</div>
                  <div className="mt-1 text-xs text-gray-400">{exp} experience</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-4 rounded-2xl bg-brand-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">Ready to Experience Our Care?</h2>
          <p className="mx-auto max-w-md text-sm text-brand-100">
            Book an appointment with one of our specialists today and take the first step toward
            better health.
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-md transition-colors hover:bg-brand-50"
          >
            <FiCalendar size={16} />
            Schedule Appointment
          </Link>
        </section>
      </div>
    </div>
  );
}
