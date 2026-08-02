'use client';

import Link from 'next/link';
import {quoteWhatsappUrl, site} from '@/data/site';
import {useLanguage} from '@/components/LanguageProvider';

export function Footer(){
  const {t}=useLanguage();
  return <>
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/brand/shanwu-logo.png" width="948" height="351" alt="SHANWU home appliance wholesale supplier" loading="lazy"/>
          <p>{t('footer.tagline')}</p>
          <p className="footer-muted">{site.businessModel}</p>
        </div>
        <div>
          <h2>{t('footer.products')}</h2>
          <Link href="/products/?category=personal-care">{t('nav.hair')}</Link>
          <Link href="/products/?category=kitchen">{t('nav.kitchen')}</Link>
          <Link href="/products/?category=ironing">{t('nav.ironing')}</Link>
        </div>
        <div>
          <h2>{t('footer.company')}</h2>
          <Link href="/about/">About Us</Link>
          <Link href="/#factory">{t('nav.factory')}</Link>
          <Link href="/#custom-service">{t('nav.custom')}</Link>
          <Link href="/faq/">{t('nav.faq')}</Link>
        </div>
        <div>
          <h2>{t('footer.policies')}</h2>
          <Link href="/privacy-policy/">{t('footer.privacy')}</Link>
          <Link href="/terms-of-service/">{t('footer.terms')}</Link>
          <Link href="/shipping-payment/">{t('footer.shipping')}</Link>
        </div>
        <div className="footer-contact">
          <h2>{t('footer.contact')}</h2>
          <a href={quoteWhatsappUrl} target="_blank" rel="noreferrer">WhatsApp: +{site.whatsapp}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <address>{site.address}</address>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.name} {t('footer.rights')}</span>
        <span>{t('footer.disclaimer')}</span>
      </div>
    </footer>
    <a className="whatsapp-float" href={quoteWhatsappUrl} target="_blank" rel="noreferrer" aria-label={t('product.askWhatsapp')}>
      <span>WA</span><b>{t('nav.whatsapp')}</b>
    </a>
  </>;
}
