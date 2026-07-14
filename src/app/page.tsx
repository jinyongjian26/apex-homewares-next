'use client';
import Link from 'next/link';
import {products} from '@/data/products';
import {ProductCard} from '@/components/ProductCard';
import {useLanguage} from '@/components/LanguageProvider';

export default function Home(){const {t}=useLanguage();return <><section className="hero"><div><p className="eyebrow">{t('home.eyebrow')}</p><h1>{t('home.title')}</h1><p>{t('home.copy')}</p><Link className="button gold" href="/products">{t('home.explore')}</Link></div></section><section className="section"><div className="section-top"><div><p className="eyebrow">{t('home.featuredEyebrow')}</p><h2>{t('home.featuredTitle')}</h2></div><Link href="/products">{t('home.viewAll')}</Link></div><div className="grid">{products.slice(0,3).map(p=><ProductCard key={p.slug} product={p}/>)}</div></section><section className="split"><div><p className="eyebrow">{t('home.partnerEyebrow')}</p><h2>{t('home.partnerTitle')}</h2></div><div><p>{t('home.partnerCopy')}</p><p className="facts">{t('home.facts')}</p></div></section><section className="cta"><p className="eyebrow">{t('home.ctaEyebrow')}</p><h2>{t('home.ctaTitle')}</h2><Link className="button gold" href="/contact">{t('home.ctaButton')}</Link></section></>}
