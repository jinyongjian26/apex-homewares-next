'use client';

import {useState} from 'react';
import Link from 'next/link';
import {site, quoteWhatsappUrl} from '@/data/site';
import {languageOptions} from '@/i18n/config';
import {useLanguage} from '@/components/LanguageProvider';
import styles from './Header.module.css';

const productLinks = [
  {href:'/products/?category=personal-care#catalog', key:'nav.hair'},
  {href:'/products/?category=kitchen#catalog', key:'nav.kitchen'},
  {href:'/products/?category=ironing#catalog', key:'nav.ironing'},
];

export function Header(){
  const {locale,setLocale,t}=useLanguage();
  const [open,setOpen]=useState(false);
  const close=()=>setOpen(false);

  return <header className={styles.shell}>
    <div className={styles.topline}>
      <div className={styles.toplineInner}>
        <span>{site.identity}</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </div>
    <div className={styles.header}>
      <Link className={styles.brandLogo} href="/" aria-label={`${site.shortName} home`} onClick={close}>
        <img src="/brand/shanwu-logo.png" width="948" height="351" alt="SHANWU - Ningbo Shanwu Technology Co., Ltd."/>
      </Link>
      <button className={styles.menuButton} type="button" aria-expanded={open} aria-label={t('nav.menu')} onClick={()=>setOpen(value=>!value)}>
        <span></span><span></span><span></span>
      </button>
      <nav className={`${styles.nav} ${open?styles.open:''}`} aria-label="Main navigation">
        {productLinks.map(link=><Link key={link.key} href={link.href} onClick={close}>{t(link.key)}</Link>)}
        <Link href="/#factory" onClick={close}>{t('nav.factory')}</Link>
        <Link href="/#custom-service" onClick={close}>{t('nav.custom')}</Link>
        <Link href="/faq/" onClick={close}>{t('nav.faq')}</Link>
        <Link href="/contact/" onClick={close}>{t('nav.contact')}</Link>
      </nav>
      <div className={styles.actions}>
        <label className={styles.languageSelect}>
          <span className="sr-only">{t('nav.language')}</span>
          <select value={locale} onChange={event=>setLocale(event.target.value as typeof locale)} aria-label={t('nav.language')}>
            {languageOptions.map(language=><option key={language.value} value={language.value}>{language.label}</option>)}
          </select>
        </label>
        <a className={styles.whatsappButton} href={quoteWhatsappUrl} target="_blank" rel="noreferrer">{t('nav.whatsapp')}</a>
        <Link className={styles.quoteButton} href="/contact/">{t('nav.quote')}</Link>
      </div>
    </div>
  </header>;
}
