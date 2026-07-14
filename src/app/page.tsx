'use client';

import Link from 'next/link';
import {ProductCard} from '@/components/ProductCard';
import {useLanguage} from '@/components/LanguageProvider';
import {products} from '@/data/products';
import styles from './home.module.css';

const featuredSlugs=[
  'digital-air-fryer',
  'steel-kettle',
  'ceramic-steam-iron',
  'hb-96',
];

const featuredProducts=featuredSlugs.flatMap(slug=>{
  const product=products.find(item=>item.slug===slug);
  return product?[product]:[];
});

export default function Home(){
  const {t}=useLanguage();

  return <>
    <section className="hero">
      <div>
        <p className="eyebrow">{t('home.eyebrow')}</p>
        <h1>{t('home.title')}</h1>
        <p>{t('home.copy')}</p>
        <Link className="button gold" href="/products">{t('home.explore')}</Link>
      </div>
    </section>
    <section className="section">
      <div className="section-top">
        <div>
          <p className="eyebrow">{t('home.featuredEyebrow')}</p>
          <h2>{t('home.featuredTitle')}</h2>
        </div>
        <Link href="/products">{t('home.viewAll')}</Link>
      </div>
      <div className={styles.featuredGrid}>
        {featuredProducts.map(product=><ProductCard key={product.slug} product={product}/>) }
      </div>
    </section>
    <section className="split">
      <div>
        <p className="eyebrow">{t('home.partnerEyebrow')}</p>
        <h2>{t('home.partnerTitle')}</h2>
      </div>
      <div>
        <p>{t('home.partnerCopy')}</p>
        <p className="facts">{t('home.facts')}</p>
      </div>
    </section>
    <section className="cta">
      <p className="eyebrow">{t('home.ctaEyebrow')}</p>
      <h2>{t('home.ctaTitle')}</h2>
      <Link className="button gold" href="/contact">{t('home.ctaButton')}</Link>
    </section>
  </>;
}
