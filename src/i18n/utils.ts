import i18n from './config';
import type { LangCode } from './config';

/** Switch language and persist to localStorage. No URL change. */
export async function changeLang(lang: LangCode): Promise<void> {
  await i18n.changeLanguage(lang);
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  // RTL support
  document.documentElement.dir = ['ar', 'he', 'fa', 'ur'].includes(lang) ? 'rtl' : 'ltr';
}

/** Get current active language code. */
export function getCurrentLang(): LangCode {
  return (i18n.language as LangCode) ?? 'en';
}

/** Format a date in the current locale. */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = { dateStyle: 'medium' }
): string {
  return new Intl.DateTimeFormat(getCurrentLang(), options).format(new Date(date));
}

/** Format a number in the current locale. */
export function formatNumber(value: number, options: Intl.NumberFormatOptions = {}): string {
  return new Intl.NumberFormat(getCurrentLang(), options).format(value);
}

/** Format currency in the current locale. */
export function formatCurrency(value: number, currency = 'EUR'): string {
  return new Intl.NumberFormat(getCurrentLang(), { style: 'currency', currency }).format(value);
}
