import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-50 to-white p-8">
      <div className="card max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          🚀 <span className="text-brand-500">setup-testing</span>
        </h1>
        <p className="text-lg text-gray-600">
          Next.js 14 · Tailwind CSS · Zustand · TanStack Query · TanStack Table · Playwright · Husky
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 text-sm text-left">
          {[
            { label: 'Framework', value: 'Next.js 14 App Router' },
            { label: 'Styling', value: 'Tailwind CSS' },
            { label: 'State', value: 'Zustand' },
            { label: 'Data Fetching', value: 'TanStack Query v5' },
            { label: 'Tables', value: 'TanStack Table v8' },
            { label: 'Testing', value: 'Playwright E2E' },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-gray-100 bg-gray-50 p-3">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</p>
              <p className="mt-1 font-medium text-gray-800">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center pt-2">
          <Link
            href="/dashboard"
            className="btn-primary text-sm font-medium"
            id="go-to-dashboard-link"
          >
            Go to Dashboard →
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm font-medium"
            id="docs-link"
          >
            Documentation
          </a>
        </div>
      </div>
    </main>
  );
}
