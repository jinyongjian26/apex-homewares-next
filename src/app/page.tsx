'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {ProductCard} from '@/components/ProductCard';
import {useLanguage} from '@/components/LanguageProvider';
import {products} from '@/data/products';
import styles from './home.module.css';

const featuredSlugs=[
  'hd-1906',
  'hd-1907',
  'hd-1819',
  'hd-4800',
];

const heroSlides=[
  '/hero-hairdryer-bathroom.png',
  '/hero-hairdryer-bedroom.png',
  '/hero-hairdryer-vanity.png',
];

const featuredProducts=featuredSlugs.flatMap(slug=>{
  const product=products.find(item=>item.slug===slug);
  return product?[product]:[];
});

export default function Home(){
  const {t}=useLanguage();
  const [activeSlide,setActiveSlide]=useState(0);

  useEffect(()=>{
    const timer=window.setInterval(()=>setActiveSlide(current=>(current+1)%heroSlides.length),6000);
    return()=>window.clearInterval(timer);
  },[]);

  return <>
    <section className={styles.heroSlider} aria-label="Hair dryer lifestyle showcase">
      {heroSlides.map((image,index)=><div
        aria-hidden={index!==activeSlide}
        className={`${styles.heroSlide} ${index===activeSlide?styles.heroSlideActive:''}`}
        key={image}
        style={{backgroundImage:`linear-gradient(90deg,rgba(9,29,43,.9) 0%,rgba(9,29,43,.68) 38%,rgba(9,29,43,.08) 68%),url(${image})`}}
      />)}
      <div className={styles.heroContent}>
        <p className="eyebrow">{t('home.eyebrow')}</p>
        <h1>{t('home.title')}</h1>
        <p>{t('home.copy')}</p>
        <Link className="button gold" href="/products">{t('home.explore')}</Link>
      </div>
      <div className={styles.heroControls}>
        <button aria-label="Previous background" onClick={()=>setActiveSlide(current=>(current-1+heroSlides.length)%heroSlides.length)}>←</button>
        <div className={styles.heroDots}>
          {heroSlides.map((_,index)=><button
            aria-label={`Show background ${index+1}`}
            aria-current={index===activeSlide}
            className={index===activeSlide?styles.heroDotActive:''}
            key={index}
            onClick={()=>setActiveSlide(index)}
          />)}
        </div>
        <button aria-label="Next background" onClick={()=>setActiveSlide(current=>(current+1)%heroSlides.length)}>→</button>
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
