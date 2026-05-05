'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';

const contactDetails = [
  { icon: FiPhone, label: 'Phone', value: '(555) 123-4567', sub: 'Mon-Fri 8 AM - 8 PM' },
  { icon: FiPhone, label: 'Emergency', value: '(555) 911-0000', sub: '24/7 Emergency Line' },
  { icon: FiMail, label: 'Email', value: 'info@medicare.example', sub: 'Reply within 24 hours' },
  { icon: FiMapPin, label: 'Address', value: '123 Health Avenue', sub: 'Care City, Country 10001' },
  { icon: FiClock, label: 'Hours', value: 'Mon-Fri: 8 AM - 8 PM', sub: 'Weekends: 10 AM - 4 PM' },
];

export default function HospitalContact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-brand-700 to-brand-500 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl space-y-3">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="text-brand-100">
            We are here to help. Reach out through any channel below.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-10 px-6 py-12">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactDetails.map(({ icon: Icon, label, value, sub }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon size={18} />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {label}
                </div>
                <div className="mt-0.5 text-sm font-semibold text-gray-800">{value}</div>
                <div className="mt-0.5 text-xs text-gray-500">{sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-lg font-semibold text-gray-800">Send a Message</h2>
            {sent ? (
              <div className="flex flex-col items-center justify-center space-y-3 py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <FiSend size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Message Sent!</h3>
                <p className="text-sm text-gray-500">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                  }}
                  className="mt-2 text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    name="name"
                    aria-label="Full Name"
                    value={form.name}
                    onChange={onChange}
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                  <input
                    name="email"
                    aria-label="Email Address"
                    value={form.email}
                    onChange={onChange}
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    name="phone"
                    aria-label="Phone (optional)"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Phone (optional)"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                  <select
                    name="subject"
                    aria-label="Subject"
                    value={form.subject}
                    onChange={onChange}
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-600 transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  >
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Appointment Help</option>
                    <option>Billing Question</option>
                    <option>Medical Records</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  aria-label="Your message"
                  value={form.message}
                  onChange={onChange}
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-300"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  <FiSend size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map Placeholder + Emergency */}
          <div className="space-y-4">
            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="flex h-52 flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-50 to-blue-100">
                <FiMapPin size={36} className="text-brand-400" />
                <p className="text-sm font-medium text-brand-600">123 Health Avenue, Care City</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-500 underline hover:text-brand-700"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Emergency Box */}
            <div className="space-y-2 rounded-2xl border border-red-100 bg-red-50 p-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
                <h3 className="text-sm font-semibold text-red-700">Emergency? Call Now</h3>
              </div>
              <p className="text-4xl font-extrabold text-red-600">(555) 911-0000</p>
              <p className="text-xs text-red-500">Available 24 hours, 7 days a week</p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-700">Quick Links</h3>
              <div className="flex flex-col gap-1">
                <Link
                  href="/appointment"
                  className="text-sm text-brand-600 hover:text-brand-700 hover:underline"
                >
                  → Book an Appointment
                </Link>
                <Link
                  href="/dashboard"
                  className="text-sm text-brand-600 hover:text-brand-700 hover:underline"
                >
                  → Go to Dashboard
                </Link>
                <Link
                  href="/hospital/about"
                  className="text-sm text-brand-600 hover:text-brand-700 hover:underline"
                >
                  → About Our Hospital
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
