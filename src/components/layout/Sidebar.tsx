import Link from 'next/link';
import { FiGrid, FiCalendar, FiInfo, FiPhone, FiHome } from 'react-icons/fi';

const navItems = [
  { href: '/', label: 'Home', icon: FiHome, id: 'sidebar-nav-home' },
  { href: '/dashboard', label: 'Dashboard', icon: FiGrid, id: 'sidebar-nav-dashboard' },
  { href: '/appointment', label: 'Appointments', icon: FiCalendar, id: 'sidebar-nav-appointment' },
  { href: '/hospital/about', label: 'About', icon: FiInfo, id: 'sidebar-nav-about' },
  { href: '/hospital/contact', label: 'Contact', icon: FiPhone, id: 'sidebar-nav-contact' },
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
