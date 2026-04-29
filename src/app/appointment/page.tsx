import type { Metadata } from 'next';
import { FiCalendar, FiClock, FiCheckCircle, FiPhoneCall } from 'react-icons/fi';

import AppointmentForm from '@/components/ui/AppointmentForm';

export const metadata: Metadata = {
  title: 'Book Appointment | MediCare Hospital',
};

const upcomingAppointments = [
  {
    id: 'APT-007',
    patient: 'John Smith',
    doctor: 'Dr. Emily Chen',
    dept: 'Cardiology',
    date: 'May 1, 2026',
    time: '09:00 AM',
    status: 'confirmed',
  },
  {
    id: 'APT-008',
    patient: 'Alice Park',
    doctor: 'Dr. James Wilson',
    dept: 'Orthopedics',
    date: 'May 2, 2026',
    time: '02:00 PM',
    status: 'pending',
  },
  {
    id: 'APT-009',
    patient: 'Tom Harris',
    doctor: 'Dr. Priya Patel',
    dept: 'Pediatrics',
    date: 'May 3, 2026',
    time: '11:00 AM',
    status: 'confirmed',
  },
];

const steps = [
  { step: '1', title: 'Fill the Form', desc: 'Enter your details and choose a department' },
  { step: '2', title: 'Get Confirmed', desc: 'We confirm your slot within 2 hours' },
  { step: '3', title: 'Visit Us', desc: 'Arrive 10 min early with your ID' },
];

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-brand-700 to-brand-500 px-6 py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold">Book an Appointment</h1>
            <p className="max-w-md text-sm text-brand-100">
              Schedule a visit with our specialists. Same-day appointments available for urgent
              cases.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/20 px-5 py-3 backdrop-blur-sm">
            <FiPhoneCall size={22} className="text-white" />
            <div>
              <div className="text-xs text-brand-100">Emergency Line</div>
              <div className="text-lg font-bold">(555) 911-0000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-10 px-6 py-10">
        {/* How it works */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {steps.map(({ step, title, desc }) => (
            <div
              key={step}
              className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {step}
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">{title}</div>
                <div className="mt-0.5 text-xs text-gray-400">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form + Info Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Booking Form */}
          <div className="space-y-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
              <FiCalendar size={18} className="text-brand-600" />
              <h2 className="text-lg font-semibold text-gray-800">Appointment Request</h2>
            </div>
            <AppointmentForm />
          </div>

          {/* Info Panel */}
          <div className="space-y-4">
            {/* Hours */}
            <div className="space-y-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2">
                <FiClock size={16} className="text-brand-600" />
                <h3 className="text-sm font-semibold text-gray-800">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Mon – Fri', hours: '8:00 AM – 8:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM – 6:00 PM' },
                  { day: 'Sunday', hours: '10:00 AM – 4:00 PM' },
                  { day: 'Emergency', hours: '24 / 7' },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-gray-600">
                    <span className="text-gray-500">{day}</span>
                    <span className="font-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div className="space-y-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-800">Departments</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'General',
                  'Cardiology',
                  'Orthopedics',
                  'Pediatrics',
                  'Dermatology',
                  'Neurology',
                  'Ophthalmology',
                  'Dentistry',
                ].map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="flex gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
              <FiCheckCircle size={16} className="mt-0.5 flex-shrink-0 text-amber-500" />
              <p className="text-xs leading-relaxed text-amber-700">
                Please bring a valid photo ID and any previous medical records on the day of your
                visit.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments Table */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="border-b border-gray-100 p-5">
            <h2 className="font-semibold text-gray-800">Upcoming Appointments</h2>
            <p className="mt-0.5 text-xs text-gray-400">Scheduled for the next 7 days</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-5 py-3 text-left font-medium">Patient</th>
                  <th className="px-5 py-3 text-left font-medium">Doctor</th>
                  <th className="hidden px-5 py-3 text-left font-medium md:table-cell">
                    Department
                  </th>
                  <th className="hidden px-5 py-3 text-left font-medium sm:table-cell">
                    Date & Time
                  </th>
                  <th className="px-5 py-3 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {upcomingAppointments.map((apt) => (
                  <tr key={apt.id} className="transition-colors hover:bg-gray-50">
                    <td className="px-5 py-3.5">
                      <div className="font-medium text-gray-800">{apt.patient}</div>
                      <div className="text-xs text-gray-400">{apt.id}</div>
                    </td>
                    <td className="px-5 py-3.5 text-gray-600">{apt.doctor}</td>
                    <td className="hidden px-5 py-3.5 text-gray-500 md:table-cell">{apt.dept}</td>
                    <td className="hidden px-5 py-3.5 sm:table-cell">
                      <div className="text-gray-700">{apt.date}</div>
                      <div className="text-xs text-gray-400">{apt.time}</div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                      >
                        {apt.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
