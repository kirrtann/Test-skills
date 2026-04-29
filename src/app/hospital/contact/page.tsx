import Link from 'next/link';

export default function HospitalContact() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">Contact Us</h1>

        <p className="text-gray-600">Phone: (555) 123-4567 · Email: info@hospital.example</p>

        <section className="pt-4">
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-gray-700">123 Health Ave, Care City, Country</p>
        </section>

        <div className="pt-6">
          <Link href="/hospital" className="btn-ghost">
            Back to Booking
          </Link>
        </div>
      </div>
    </main>
  );
}
