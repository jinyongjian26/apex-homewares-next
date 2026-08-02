'use client';

import {InquiryForm} from '@/components/InquiryForm';
import {site,quoteWhatsappUrl} from '@/data/site';
import {useLanguage} from '@/components/LanguageProvider';

export function ContactPage(){
  const {t}=useLanguage();
  return <>
    <section className="page-head"><p className="eyebrow">{t('contact.eyebrow')}</p><h1>{t('contact.title')}</h1><p>{t('contact.copy')}</p></section>
    <section className="section contact-layout">
      <aside className="contact-panel">
        <p className="eyebrow">{t('contact.direct')}</p><h2>Wholesale & OEM enquiries</h2>
        <a className="contact-line" href={quoteWhatsappUrl} target="_blank" rel="noreferrer"><span>WhatsApp</span><b>+{site.whatsapp}</b></a>
        <a className="contact-line" href={`mailto:${site.email}`}><span>Email</span><b>{site.email}</b></a>
        <div className="contact-line"><span>Office</span><b>{site.address}</b></div>
        <p className="contact-note">{t('contact.fastQuote')}</p>
        <div className="response-card"><span>Response target</span><b>Within 1 business day</b><p>Complete product and quantity information helps us quote faster.</p></div>
      </aside>
      <div><p className="eyebrow">{t('contact.formEyebrow')}</p><InquiryForm/></div>
    </section>
  </>;
}
