'use client';

import Link from 'next/link';
import {ProductCard} from '@/components/ProductCard';
import {useLanguage} from '@/components/LanguageProvider';
import {products} from '@/data/products';
import {quoteWhatsappUrl} from '@/data/site';
import styles from '@/app/home.module.css';

const featuredSlugs=['handheld-garment-steamer','ceramic-steam-iron','hb-96','hs-218','hc-71'];
const featuredProducts=featuredSlugs.flatMap(slug=>{const product=products.find(item=>item.slug===slug);return product?[product]:[]});

const faqKeys=['1','2','3','4','5','6'];

export function HomePage(){
  const {t}=useLanguage();
  return <>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className="eyebrow light">{t('home.eyebrow')}</p>
          <h1>{t('home.title')}</h1>
          <p>{t('home.copy')}</p>
          <div className="button-row">
            <Link className="button primary" href="/products/">{t('home.explore')}</Link>
            <a className="button white" href={quoteWhatsappUrl} target="_blank" rel="noreferrer">{t('home.quote')}</a>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.trustBar} aria-label="B2B supply capabilities">
      {[['01','home.trust.source'],['02','home.trust.make'],['03','home.trust.private'],['04','home.trust.export']].map(item=><div key={item[0]}><span>{item[0]}</span><b>{t(item[1])}</b></div>)}
    </section>

    <section className="section">
      <div className="section-heading">
        <div><p className="eyebrow">{t('home.categoryEyebrow')}</p><h2>{t('home.categoryTitle')}</h2></div>
      </div>
      <div className={styles.categoryGrid}>
        <Link href="/products/?category=personal-care#catalog" className={styles.categoryCard}>
          <img src="/personal-care/hb-96.webp" width="960" height="960" loading="lazy" alt="Wholesale hair styling appliances and hot air brushes from China"/>
          <div><span>01</span><h3>{t('home.categoryHair')}</h3><p>{t('home.categoryHairCopy')}</p><b>{t('home.viewAll')} →</b></div>
        </Link>
        <Link href="/products/?category=kitchen#catalog" className={styles.categoryCard}>
          <img src="/images/air-fryer-wholesale.webp" width="960" height="960" loading="lazy" alt="Private label air fryer factory and wholesale supplier China"/>
          <div><span>02</span><h3>{t('home.categoryKitchen')}</h3><p>{t('home.categoryKitchenCopy')}</p><b>{t('home.viewAll')} →</b></div>
        </Link>
        <Link href="/products/?category=ironing#catalog" className={styles.categoryCard}>
          <img src="/images/garment-steamer-wholesale.webp" width="960" height="960" loading="lazy" alt="Bulk garment steamer and electric iron wholesale supplier"/>
          <div><span>03</span><h3>{t('home.categoryIroning')}</h3><p>{t('home.categoryIroningCopy')}</p><b>{t('home.viewAll')} →</b></div>
        </Link>
      </div>
    </section>

    <section className="section section-muted">
      <div className="section-heading">
        <div><p className="eyebrow">{t('home.hotEyebrow')}</p><h2>{t('home.hotTitle')}</h2></div>
        <Link href="/products/">{t('home.viewAll')} →</Link>
      </div>
      <div className={`product-grid ${styles.featuredGrid}`}>{featuredProducts.map(product=><ProductCard key={product.slug} product={product}/>)}</div>
    </section>

    <section className={styles.factory} id="factory">
      <div className={styles.factoryVisual}>
        <img src="/images/appliance-production-quality-control.webp" width="1600" height="760" loading="lazy" alt="Small home appliance production, function testing and export packing workflow"/>
        <span>Manufacturing workflow visual</span>
      </div>
      <div className={styles.factoryCopy}>
        <p className="eyebrow">{t('home.factoryEyebrow')}</p>
        <h2>{t('home.factoryTitle')}</h2>
        <p>{t('home.factoryCopy')}</p>
        <div className={styles.processGrid}>
          {['1','2','3','4'].map(number=><article key={number}><span>0{number}</span><h3>{t(`home.process${number}`)}</h3><p>{t(`home.process${number}Copy`)}</p></article>)}
        </div>
        <Link className="text-link" href="/about/">Learn about our B2B process →</Link>
      </div>
    </section>

    <section className="section" id="custom-service">
      <div className="section-heading narrow"><div><p className="eyebrow">{t('home.customEyebrow')}</p><h2>{t('home.customTitle')}</h2></div></div>
      <div className={styles.serviceGrid}>
        {[['01','Logo','home.customLogo','home.customLogoCopy'],['02','Box','home.customBox','home.customBoxCopy'],['03','Function','home.customFunction','home.customFunctionCopy'],['04','Carton','home.customPack','home.customPackCopy']].map(item=><article key={item[0]}><span>{item[0]}</span><small>{item[1]}</small><h3>{t(item[2])}</h3><p>{t(item[3])}</p></article>)}
      </div>
    </section>

    <section className={styles.markets}>
      <div><p className="eyebrow light">{t('home.marketEyebrow')}</p><h2>{t('home.marketTitle')}</h2><p>{t('home.marketCopy')}</p></div>
      <div className={styles.marketCards}><article><span>EU / NA</span><h3>{t('home.marketWest')}</h3><p>Importers · wholesalers · retail chains · private-label buyers</p></article><article><span>ME</span><h3>{t('home.marketMiddleEast')}</h3><p>Distributors · stores · traders · cross-border sellers</p></article></div>
    </section>

    <section className="section" id="faq">
      <div className="section-heading narrow"><div><p className="eyebrow">{t('home.faqEyebrow')}</p><h2>{t('home.faqTitle')}</h2></div></div>
      <div className="faq-list">{faqKeys.map((key,index)=><details key={key} open={index===0}><summary><span>0{index+1}</span>{t(`faq.q${key}`)}</summary><p>{t(`faq.a${key}`)}</p></details>)}</div>
    </section>

    <section className="cta-section">
      <div><p className="eyebrow light">{t('home.ctaEyebrow')}</p><h2>{t('home.ctaTitle')}</h2></div>
      <div className="button-row"><Link className="button white" href="/contact/">{t('home.ctaButton')}</Link><a className="button whatsapp-button" href={quoteWhatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
    </section>
  </>;
}
