'use client';
import { useTranslation } from 'react-i18next';

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
] as const;

export function LocaleSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage ?? i18n.language;

  return (
    <div className="flex gap-2">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          className={`rounded border px-3 py-1 text-sm transition-colors ${
            current === code
              ? 'bg-primary border-primary text-white'
              : 'text-foreground border-border hover:border-primary bg-transparent'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
