'use client';
import Link from 'next/link';
import {site} from '@/data/site';
import {languageOptions} from '@/i18n/config';
import {useLanguage} from '@/components/LanguageProvider';

export function Header(){const {locale,setLocale,t}=useLanguage();return <header className="header"><Link className="brand" href="/">{site.name}</Link><nav><Link href="/">{t('nav.home')}</Link><Link href="/products">{t('nav.products')}</Link><Link href="/about">{t('nav.about')}</Link><Link href="/contact">{t('nav.contact')}</Link><Link className="nav-cta" href="/contact">{t('nav.quote')}</Link></nav><div className="header-tools"><label className="language-select"><span className="sr-only">{t('nav.language')}</span><select value={locale} onChange={event=>setLocale(event.target.value as typeof locale)} aria-label={t('nav.language')}>{languageOptions.map(language=><option key={language.value} value={language.value}>{language.label}</option>)}</select></label><a className="header-email" href={`mailto:${site.email}`}>{site.email}</a></div></header>}
