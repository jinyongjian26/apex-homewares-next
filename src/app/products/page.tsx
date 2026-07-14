'use client';

import {useState} from 'react';
import {ProductCard} from '@/components/ProductCard';
import {useLanguage} from '@/components/LanguageProvider';
import {products, type Product} from '@/data/products';
import styles from './products.module.css';

type FilterCategory='All'|Product['category'];

const categoryFilters: {value:FilterCategory; label:string}[]=[
  {value:'All',label:'products.all'},
  {value:'Kitchen',label:'products.kitchen'},
  {value:'Home',label:'products.home'},
  {value:'Personal Care',label:'products.personal'},
];

export default function Products(){
  const {t}=useLanguage();
  const [activeCategory,setActiveCategory]=useState<FilterCategory>('All');
  const visibleProducts=activeCategory==='All'
    ? products
    : products.filter(product=>product.category===activeCategory);

  return <>
    <section className="page-head">
      <p className="eyebrow">{t('products.eyebrow')}</p>
      <h1>{t('products.title')}</h1>
      <p>{t('products.copy')}</p>
    </section>
    <section className="section">
      <div className={styles.filters} role="group" aria-label={t('products.title')}>
        {categoryFilters.map(filter=>(
          <button
            className={activeCategory===filter.value?styles.active:undefined}
            data-category={filter.value}
            aria-controls="product-grid"
            aria-pressed={activeCategory===filter.value}
            key={filter.value}
            onClick={()=>setActiveCategory(filter.value)}
            type="button"
          >
            {t(filter.label)}
          </button>
        ))}
      </div>
      <div className="grid" id="product-grid" aria-live="polite">
        {visibleProducts.map(product=><ProductCard key={product.slug} product={product}/>) }
      </div>
    </section>
  </>;
}
