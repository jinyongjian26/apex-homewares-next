'use client';

import {useEffect,useState} from 'react';
import {ProductCard} from '@/components/ProductCard';
import {useLanguage} from '@/components/LanguageProvider';
import {products,type Product} from '@/data/products';
import styles from '@/app/products/products.module.css';

type FilterKey='all'|'kitchen'|'ironing'|'personal-care';
const filterToCategory:Record<Exclude<FilterKey,'all'>,Product['category']>={kitchen:'Kitchen',ironing:'Home','personal-care':'Personal Care'};
const filters:{value:FilterKey;label:string}[]=[
  {value:'all',label:'products.all'},{value:'kitchen',label:'products.kitchen'},
  {value:'ironing',label:'products.home'},{value:'personal-care',label:'products.personal'},
];

export function ProductsCatalog(){
  const {t}=useLanguage();
  const [active,setActive]=useState<FilterKey>('all');
  useEffect(()=>{const value=new URLSearchParams(window.location.search).get('category') as FilterKey|null;if(value&&filters.some(item=>item.value===value))setActive(value)},[]);
  const changeFilter=(value:FilterKey)=>{setActive(value);const url=value==='all'?'/products/':`/products/?category=${value}`;window.history.replaceState({},'',url)};
  const visible=active==='all'?products:products.filter(product=>product.category===filterToCategory[active]);

  return <>
    <section className="page-head">
      <p className="eyebrow">{t('products.eyebrow')}</p><h1>{t('products.title')}</h1><p>{t('products.copy')}</p>
    </section>
    <section className="section" id="catalog">
      <div className={styles.toolbar}>
        <div className={styles.filters} role="group" aria-label={t('products.title')}>
          {filters.map(filter=><button key={filter.value} className={active===filter.value?styles.active:undefined} aria-pressed={active===filter.value} onClick={()=>changeFilter(filter.value)} type="button">{t(filter.label)}</button>)}
        </div>
        <p><b>{visible.length}</b> {t('products.showing')}</p>
      </div>
      <div className="product-grid" id="product-grid" aria-live="polite">{visible.map(product=><ProductCard key={product.slug} product={product}/>)}</div>
      <div className={styles.seoCopy}>
        <h2>Wholesale small home appliances from China</h2>
        <p>SHANWU supplies make-to-order appliance programs for international B2B buyers. Our catalogue covers private label air fryer factory sourcing, custom logo hair styling tools, bulk garment steamer wholesale programs and home iron supply. Product configuration, compliance requirements, MOQ, packaging and delivery terms are confirmed for each model and destination market.</p>
      </div>
    </section>
  </>;
}
