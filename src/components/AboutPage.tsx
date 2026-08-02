'use client';

import Link from 'next/link';
import {useLanguage} from '@/components/LanguageProvider';
import {site} from '@/data/site';

export function AboutPage(){
  const {t}=useLanguage();
  return <>
    <section className="page-head"><p className="eyebrow">{t('about.eyebrow')}</p><h1>{t('about.title')}</h1><p>{t('about.copy')}</p></section>
    <section className="section about-intro">
      <div><p className="eyebrow">Our role</p><h2>A focused B2B sourcing and manufacturing partner.</h2></div>
      <div><p>{site.name} works with professional buyers building small home appliance ranges for wholesale, retail and cross-border channels. Our core work covers product selection, specification alignment, make-to-order production, private-label execution, inspection coordination, export packing and shipment preparation.</p><p>We do not position this website as a retail store. Every programme is reviewed around order quantity, destination standards, voltage, plug type, packaging and the buyer’s channel requirements.</p></div>
    </section>
    <section className="about-visual"><img src="/images/appliance-production-quality-control.webp" width="1600" height="760" loading="lazy" alt="Home appliance assembly, inspection and export packing process"/><div><span>Production</span><span>Function testing</span><span>Private label</span><span>Export packing</span></div></section>
    <section className="section"><div className="capability-grid">
      <article><span>01</span><h2>{t('about.modelTitle')}</h2><p>{t('about.modelCopy')}</p></article>
      <article><span>02</span><h2>{t('about.customTitle')}</h2><p>{t('about.customCopy')}</p></article>
      <article><span>03</span><h2>{t('about.marketTitle')}</h2><p>{t('about.marketCopy')}</p></article>
    </div></section>
    <section className="section section-muted"><div className="section-heading narrow"><div><p className="eyebrow">How we work</p><h2>A practical order workflow for international buyers.</h2></div></div><ol className="workflow-list"><li><b>Requirement review</b><span>Product, market, quantity, certification needs and target price range.</span></li><li><b>Model and specification confirmation</b><span>Voltage, plug, function, accessories, colour and private-label scope.</span></li><li><b>Sample and artwork approval</b><span>Sample terms, logo position, packaging artwork and written sign-off.</span></li><li><b>Production and quality checks</b><span>Schedule, key-stage checks, function testing and packing verification.</span></li><li><b>Shipment preparation</b><span>Final documents, shipping marks and handover to the agreed freight channel.</span></li></ol></section>
    <section className="cta-section"><div><p className="eyebrow light">B2B sourcing</p><h2>Discuss your next private-label appliance programme with SHANWU.</h2></div><Link className="button white" href="/contact/">Request quotation</Link></section>
  </>;
}
