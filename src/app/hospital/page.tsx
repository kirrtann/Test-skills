import Link from 'next/link';

import AppointmentForm from '../../components/ui/AppointmentForm';

export default function HospitalHome() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">Hospital Appointment Booking</h1>
        <p className="text-gray-600">
          Book appointments with our departments quickly and securely.
        </p>

        <div className="space-y-4">
          <AppointmentForm />
        </div>

        <div className="flex gap-3 pt-6">
          <Link href="/hospital/about" className="btn-ghost">
            About
          </Link>
          <Link href="/hospital/contact" className="btn-ghost">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
