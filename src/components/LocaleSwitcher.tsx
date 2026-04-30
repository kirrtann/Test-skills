import { useTranslation } from 'react-i18next';

import { LANGUAGES, changeLang } from '@/i18n';
import type { LangCode } from '@/i18n';

interface Props {
  className?: string;
}

export function LocaleSwitcher({ className }: Props) {
  const { i18n } = useTranslation();
  const current = i18n.language as LangCode;

  return (
    <select
      value={current}
      onChange={(e) => changeLang(e.target.value as LangCode)}
      className={className}
      aria-label="Select language"
    >
      {(Object.entries(LANGUAGES) as [LangCode, string][]).map(([code, label]) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}
