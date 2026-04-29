'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiBell, FiMenu, FiX } from 'react-icons/fi';

import { Button } from '../ui/Button';

import { useAppStore } from '@/store/useAppStore';

export function Header() {
  const { sidebarOpen, toggleSidebar, user } = useAppStore();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          id="sidebar-toggle-btn"
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100"
        >
          {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
        <Link href="/" className="text-lg font-bold text-brand-600" id="header-logo-link">
          🏥 MediCare
        </Link>
      </div>

      <nav className="hidden gap-6 text-sm font-medium text-gray-600 md:flex">
        <Link
          href="/"
          id="nav-home-link"
          className={pathname === '/' ? 'text-brand-600' : 'hover:text-gray-900'}
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          id="nav-dashboard-link"
          className={pathname.startsWith('/dashboard') ? 'text-brand-600' : 'hover:text-gray-900'}
        >
          Dashboard
        </Link>
        <Link
          href="/appointment"
          id="nav-appointment-link"
          className={pathname.startsWith('/appointment') ? 'text-brand-600' : 'hover:text-gray-900'}
        >
          Appointments
        </Link>
        <Link
          href="/hospital/about"
          id="nav-about-link"
          className={
            pathname.startsWith('/hospital/about') ? 'text-brand-600' : 'hover:text-gray-900'
          }
        >
          About
        </Link>
        <Link
          href="/hospital/contact"
          id="nav-contact-link"
          className={
            pathname.startsWith('/hospital/contact') ? 'text-brand-600' : 'hover:text-gray-900'
          }
        >
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-2">
        <button
          id="notifications-btn"
          aria-label="Notifications"
          className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100"
        >
          <FiBell size={18} />
        </button>
        {user ? (
          <span className="text-sm font-medium text-gray-700">{user.name}</span>
        ) : (
          <Button variant="primary" size="sm" id="sign-in-btn">
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
}
