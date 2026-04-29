import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | setup-testing',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Your dashboard content goes here.</p>
      </div>
    </div>
  );
}
