import Link from 'next/link';
import { FiGrid, FiUsers, FiSettings, FiHome } from 'react-icons/fi';

const navItems = [
  { href: '/', label: 'Home', icon: FiHome, id: 'sidebar-nav-home' },
  { href: '/dashboard', label: 'Dashboard', icon: FiGrid, id: 'sidebar-nav-dashboard' },
  { href: '/dashboard/users', label: 'Users', icon: FiUsers, id: 'sidebar-nav-users' },
  { href: '/dashboard/settings', label: 'Settings', icon: FiSettings, id: 'sidebar-nav-settings' },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-60 flex-col border-r border-gray-200 bg-white">
      <nav className="flex flex-col gap-1 p-3">
        {navItems.map(({ href, label, icon: Icon, id }) => (
          <Link
            key={href}
            href={href}
            id={id}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
