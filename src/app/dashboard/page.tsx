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
  FiTrendingUp,
  FiTrendingDown,
  FiPlus,
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
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    accent: 'border-l-blue-500',
  },
  {
    label: "Today's Appointments",
    value: '48',
    change: '6 pending',
    positive: true,
    icon: FiCalendar,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    accent: 'border-l-emerald-500',
  },
  {
    label: 'Available Doctors',
    value: '24',
    change: '3 on leave',
    positive: false,
    icon: FiActivity,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    accent: 'border-l-violet-500',
  },
  {
    label: 'Monthly Revenue',
    value: '$128,540',
    change: '+8.2% vs last month',
    positive: true,
    icon: FiDollarSign,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    accent: 'border-l-orange-500',
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
  {
    name: 'Dr. Emily Chen',
    dept: 'Cardiology',
    patients: 8,
    avatar: 'EC',
    available: true,
    avatarBg: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Dr. James Wilson',
    dept: 'Orthopedics',
    patients: 6,
    avatar: 'JW',
    available: true,
    avatarBg: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Dr. Priya Patel',
    dept: 'Pediatrics',
    patients: 10,
    avatar: 'PP',
    available: false,
    avatarBg: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'Dr. Alex Turner',
    dept: 'Neurology',
    patients: 5,
    avatar: 'AT',
    available: true,
    avatarBg: 'bg-orange-100 text-orange-700',
  },
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
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Hero Header */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-6 text-white shadow-lg">
          <div className="relative z-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-blue-100">Good morning 👋</p>
              <h1 className="mt-0.5 text-2xl font-bold">Hospital Dashboard</h1>
              <p className="mt-1 text-sm text-blue-100">Tuesday, April 29, 2026</p>
            </div>
            <Link
              href="/appointment"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <FiPlus size={16} />
              New Appointment
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-10 right-20 h-28 w-28 rounded-full bg-white/10" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(
            ({ label, value, change, positive, icon: Icon, iconBg, iconColor, accent }) => (
              <div
                key={label}
                className={`rounded-xl border-l-4 bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${accent}`}
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-lg p-2.5 ${iconBg}`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  {positive ? (
                    <FiTrendingUp size={16} className="text-emerald-500" />
                  ) : (
                    <FiTrendingDown size={16} className="text-red-400" />
                  )}
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="mt-0.5 text-sm text-gray-500">{label}</div>
                  <div
                    className={`mt-2 text-xs font-semibold ${positive ? 'text-emerald-600' : 'text-red-500'}`}
                  >
                    {change}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Recent Appointments */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm lg:col-span-2">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <div>
                <h2 className="font-semibold text-gray-900">Recent Appointments</h2>
                <p className="mt-0.5 text-xs text-gray-400">Today's schedule overview</p>
              </div>
              <Link
                href="/appointment"
                className="flex items-center gap-1 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-100"
              >
                View all <FiArrowRight size={12} />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50/70 text-xs uppercase tracking-wide text-gray-400">
                    <th className="px-6 py-3 text-left font-semibold">Patient</th>
                    <th className="px-6 py-3 text-left font-semibold">Doctor</th>
                    <th className="hidden px-6 py-3 text-left font-semibold md:table-cell">Dept</th>
                    <th className="hidden px-6 py-3 text-left font-semibold sm:table-cell">Time</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAppointments.map((apt, i) => {
                    const cfg = statusConfig[apt.status];
                    const StatusIcon = cfg.icon;
                    return (
                      <tr
                        key={apt.id}
                        className={`transition-colors hover:bg-indigo-50/40 ${i !== 0 ? 'border-t border-gray-50' : ''}`}
                      >
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-800">{apt.patient}</div>
                          <div className="text-xs text-gray-400">{apt.id}</div>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{apt.doctor}</td>
                        <td className="hidden px-6 py-4 text-gray-500 md:table-cell">{apt.dept}</td>
                        <td className="hidden px-6 py-4 text-gray-500 sm:table-cell">{apt.time}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${cfg.className}`}
                          >
                            <StatusIcon size={10} />
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

          {/* Right column */}
          <div className="flex flex-col gap-5">
            {/* Doctors on Duty */}
            <div className="rounded-2xl bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <h2 className="font-semibold text-gray-900">Doctors on Duty</h2>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  3 active
                </span>
              </div>
              <div className="space-y-1 p-3">
                {doctors.map(({ name, dept, patients, avatar, available, avatarBg }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarBg}`}
                    >
                      {avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold text-gray-800">{name}</div>
                      <div className="text-xs text-gray-400">
                        {dept} · {patients} patients
                      </div>
                    </div>
                    <span
                      className={`flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                        available ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {available ? 'Active' : 'Away'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Quick Actions
              </p>
              <div className="space-y-2.5">
                <Link
                  href="/appointment"
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/30 text-blue-300">
                    <FiCalendar size={14} />
                  </span>
                  Book Appointment
                </Link>
                <Link
                  href="/hospital/about"
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/30 text-violet-300">
                    <FiUsers size={14} />
                  </span>
                  View Doctors
                </Link>
                <Link
                  href="/hospital/contact"
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/30 text-red-300">
                    <FiActivity size={14} />
                  </span>
                  Emergency Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
