'use client';
import {products} from '@/data/products';
import {ProductCard} from '@/components/ProductCard';
import {useLanguage} from '@/components/LanguageProvider';

export default function Products(){const {t}=useLanguage();return <><section className="page-head"><p className="eyebrow">{t('products.eyebrow')}</p><h1>{t('products.title')}</h1><p>{t('products.copy')}</p></section><section className="section"><div className="filters"><span>{t('products.all')}</span><span>{t('products.kitchen')}</span><span>{t('products.home')}</span><span>{t('products.personal')}</span></div><div className="grid">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div></section></>}
