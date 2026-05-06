'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'node_modules/react-i18next';
import { FiBell } from 'react-icons/fi';

import { Button } from '../ui/Button';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import { useAppStore } from '@/store/useAppStore';

export function Header() {
  const { user } = useAppStore();
  const pathname = usePathname();
  const { t } = useTranslation('common');
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-lg font-bold text-brand-600" id="header-logo-link">
          MediCare
        </Link>
      </div>
      <LocaleSwitcher className="rounded-lg border bg-white p-1" />
      <nav className="hidden gap-6 text-sm font-medium text-gray-600 md:flex">
        <Link
          href="/"
          id="nav-home-link"
          className={pathname === '/' ? 'text-brand-600' : 'hover:text-gray-900'}
        >
          {t('nav.home')}
        </Link>
        <Link
          href="/dashboard"
          id="nav-dashboard-link"
          className={pathname.startsWith('/dashboard') ? 'text-brand-600' : 'hover:text-gray-900'}
        >
          {t('nav.dashboard')}
        </Link>
        <Link
          href="/appointment"
          id="nav-appointment-link"
          className={pathname.startsWith('/appointment') ? 'text-brand-600' : 'hover:text-gray-900'}
        >
          {t('nav.appointments')}
        </Link>
        <Link
          href="/hospital/about"
          id="nav-about-link"
          className={
            pathname.startsWith('/hospital/about') ? 'text-brand-600' : 'hover:text-gray-900'
          }
        >
          {t('nav.about')}
        </Link>
        <Link
          href="/hospital/contact"
          id="nav-contact-link"
          className={
            pathname.startsWith('/hospital/contact') ? 'text-brand-600' : 'hover:text-gray-900'
          }
        >
          {t('nav.contact')}
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
          <Link href="/login">
            <Button variant="primary" size="sm" id="sign-in-btn">
              {t('nav.signIn')}
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
