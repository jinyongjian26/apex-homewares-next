'use client';

import {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {Locale, messages} from '@/i18n/config';

type LanguageContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({children}: {children: React.ReactNode}) {
  const [locale, setLocale] = useState<Locale>('en');
  useEffect(() => { const saved = window.localStorage.getItem('site-language') as Locale | null; if (saved && saved in messages) setLocale(saved); }, []);
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'; window.localStorage.setItem('site-language', locale); }, [locale]);
  const value = useMemo(() => ({locale, setLocale, t: (key: string) => messages[locale][key] ?? messages.en[key] ?? key}), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
