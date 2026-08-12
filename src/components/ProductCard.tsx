'use client';
import Link from 'next/link';
import {Product} from '@/data/products';
import {useLanguage} from '@/components/LanguageProvider';

export function ProductCard({product}: {product:Product}) {
  const {locale,t}=useLanguage();
  const localized=locale==='en'?undefined:product.translations?.[locale];
  const name=localized?.name??product.name;
  const description=localized?.description??product.description;
  return <article className="product-card">
    <Link className="product-image-link" href={`/products/${product.slug}/`} aria-label={`${t('product.view')}: ${name}`}>
      <img src={product.image} width="960" height="960" loading="lazy" alt={`${name} wholesale private label supplier in China`}/>
    </Link>
    <div className="product-card-body">
      <p className="eyebrow">{t(`category.${product.category}`)}</p>
      <h3><Link href={`/products/${product.slug}/`}>{name}</Link></h3>
      <p className="product-description">{description}</p>
      <div className="product-badges"><span>Wholesale</span><span>Private Label</span><span>Low MOQ Options</span></div>
      <div className="meta"><span><b>{t('product.moq')}</b>{product.moq}</span></div>
      <Link className="product-link" href={`/products/${product.slug}/`}>{t('product.view')} <span aria-hidden="true">→</span></Link>
    </div>
  </article>;
}
