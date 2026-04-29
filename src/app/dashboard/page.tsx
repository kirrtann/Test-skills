import type { Metadata } from 'next';
import Link from 'next/link';
import {
  FiUsers,
  FiCalendar,
  FiActivity,
  FiDollarSign,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiArrowRight,
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Dashboard | MediCare Hospital',
};

const stats = [
  {
    label: 'Total Patients',
    value: '3,842',
    change: '+12% this month',
    positive: true,
    icon: FiUsers,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: "Today's Appointments",
    value: '48',
    change: '6 pending',
    positive: true,
    icon: FiCalendar,
    color: 'bg-green-50 text-green-600',
  },
  {
    label: 'Available Doctors',
    value: '24',
    change: '3 on leave',
    positive: false,
    icon: FiActivity,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    label: 'Monthly Revenue',
    value: '$128,540',
    change: '+8.2% vs last month',
    positive: true,
    icon: FiDollarSign,
    color: 'bg-orange-50 text-orange-600',
  },
];

const recentAppointments = [
  {
    id: 'APT-001',
    patient: 'Sarah Johnson',
    doctor: 'Dr. Emily Chen',
    dept: 'Cardiology',
    time: '09:00 AM',
    status: 'confirmed',
  },
  {
    id: 'APT-002',
    patient: 'Michael Brown',
    doctor: 'Dr. James Wilson',
    dept: 'Orthopedics',
    time: '10:30 AM',
    status: 'in-progress',
  },
  {
    id: 'APT-003',
    patient: 'Emma Davis',
    doctor: 'Dr. Priya Patel',
    dept: 'Pediatrics',
    time: '11:00 AM',
    status: 'confirmed',
  },
  {
    id: 'APT-004',
    patient: 'Robert Miller',
    doctor: 'Dr. Alex Turner',
    dept: 'Neurology',
    time: '01:00 PM',
    status: 'pending',
  },
  {
    id: 'APT-005',
    patient: 'Olivia Wilson',
    doctor: 'Dr. Emily Chen',
    dept: 'Cardiology',
    time: '02:30 PM',
    status: 'cancelled',
  },
  {
    id: 'APT-006',
    patient: 'Daniel Garcia',
    doctor: 'Dr. Maria Lopez',
    dept: 'Dermatology',
    time: '03:00 PM',
    status: 'confirmed',
  },
];

const doctors = [
  { name: 'Dr. Emily Chen', dept: 'Cardiology', patients: 8, avatar: 'EC', available: true },
  { name: 'Dr. James Wilson', dept: 'Orthopedics', patients: 6, avatar: 'JW', available: true },
  { name: 'Dr. Priya Patel', dept: 'Pediatrics', patients: 10, avatar: 'PP', available: false },
  { name: 'Dr. Alex Turner', dept: 'Neurology', patients: 5, avatar: 'AT', available: true },
];

const statusConfig: Record<string, { label: string; className: string; icon: React.ElementType }> =
  {
    confirmed: {
      label: 'Confirmed',
      className: 'bg-green-100 text-green-700',
      icon: FiCheckCircle,
    },
    'in-progress': {
      label: 'In Progress',
      className: 'bg-blue-100 text-blue-700',
      icon: FiActivity,
    },
    pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700', icon: FiClock },
    cancelled: { label: 'Cancelled', className: 'bg-red-100 text-red-700', icon: FiAlertCircle },
  };

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hospital Dashboard</h1>
            <p className="mt-0.5 text-sm text-gray-500">Tuesday, April 29, 2026</p>
          </div>
          <Link
            href="/appointment"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            <FiCalendar size={16} />
            New Appointment
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, change, positive, icon: Icon, color }) => (
            <div key={label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className={`rounded-xl p-2.5 ${color}`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="mt-0.5 text-sm text-gray-500">{label}</div>
                <div
                  className={`mt-2 text-xs font-medium ${positive ? 'text-green-600' : 'text-red-500'}`}
                >
                  {change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent Appointments */}
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <h2 className="font-semibold text-gray-800">Recent Appointments</h2>
              <Link
                href="/appointment"
                className="flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                View all <FiArrowRight size={14} />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-5 py-3 text-left font-medium">Patient</th>
                    <th className="px-5 py-3 text-left font-medium">Doctor</th>
                    <th className="hidden px-5 py-3 text-left font-medium md:table-cell">Dept</th>
                    <th className="hidden px-5 py-3 text-left font-medium sm:table-cell">Time</th>
                    <th className="px-5 py-3 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentAppointments.map((apt) => {
                    const cfg = statusConfig[apt.status];
                    const StatusIcon = cfg.icon;
                    return (
                      <tr key={apt.id} className="transition-colors hover:bg-gray-50">
                        <td className="px-5 py-3.5">
                          <div className="font-medium text-gray-800">{apt.patient}</div>
                          <div className="text-xs text-gray-400">{apt.id}</div>
                        </td>
                        <td className="px-5 py-3.5 text-gray-600">{apt.doctor}</td>
                        <td className="hidden px-5 py-3.5 text-gray-500 md:table-cell">
                          {apt.dept}
                        </td>
                        <td className="hidden px-5 py-3.5 text-gray-500 sm:table-cell">
                          {apt.time}
                        </td>
                        <td className="px-5 py-3.5">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${cfg.className}`}
                          >
                            <StatusIcon size={11} />
                            {cfg.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Doctors on Duty */}
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
            <div className="border-b border-gray-100 p-5">
              <h2 className="font-semibold text-gray-800">Doctors on Duty</h2>
            </div>
            <div className="space-y-3 p-4">
              {doctors.map(({ name, dept, patients, avatar, available }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
                    {avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-gray-800">{name}</div>
                    <div className="text-xs text-gray-400">
                      {dept} · {patients} patients
                    </div>
                  </div>
                  <span
                    className={`h-2.5 w-2.5 flex-shrink-0 rounded-full ${available ? 'bg-green-400' : 'bg-gray-300'}`}
                  />
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 border-t border-gray-100 p-4">
              <p className="mb-3 px-1 text-xs font-medium uppercase tracking-wide text-gray-400">
                Quick Actions
              </p>
              <Link
                href="/appointment"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                <FiCalendar size={14} /> Book Appointment
              </Link>
              <Link
                href="/hospital/about"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                <FiUsers size={14} /> View Doctors
              </Link>
              <Link
                href="/hospital/contact"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-600"
              >
                <FiActivity size={14} /> Emergency Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
