'use client';
import Link from 'next/link';
import {Product} from '@/data/products';
import {useLanguage} from '@/components/LanguageProvider';

export function ProductCard({product}: {product:Product}) {
  const {t}=useLanguage();
  const name=t(`catalog.${product.slug}.name`);
  const description=t(`catalog.${product.slug}.description`);
  return <article className="product-card"><img src={product.image} alt={name}/><div><p className="eyebrow">{t(`category.${product.category}`)}</p><h3>{name}</h3><p>{description}</p><div className="meta"><span>{t('product.moq')}: {product.moq}</span><span>{product.price}</span></div><Link href={`/products/${product.slug}`}>{t('product.view')}</Link></div></article>;
}
