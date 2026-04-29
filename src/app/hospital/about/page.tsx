import Link from 'next/link';

export default function HospitalAbout() {
  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">About Our Hospital</h1>
        <p className="text-gray-600">
          We provide compassionate care with modern facilities and experienced staff.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="text-gray-700">
            Deliver high-quality patient-centered healthcare with respect and integrity.
          </p>
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
