'use client';
import Link from 'next/link';
import {Product} from '@/data/products';
import {useLanguage} from '@/components/LanguageProvider';

export function ProductCard({product}: {product:Product}) {
  const {locale,t}=useLanguage();
  const configuredName=t(`catalog.${product.slug}.name`);
  const configuredDescription=t(`catalog.${product.slug}.description`);
  const localized=locale==='en'?undefined:product.translations?.[locale];
  const name=localized?.name??(configuredName===`catalog.${product.slug}.name`?product.name:configuredName);
  const description=localized?.description??(configuredDescription===`catalog.${product.slug}.description`?product.description:configuredDescription);
  return <article className="product-card"><img src={product.image} alt={name}/><div><p className="eyebrow">{t(`category.${product.category}`)}</p><h3>{name}</h3><p>{description}</p><div className="meta"><span>{t('product.moq')}: {product.moq}</span><span>{product.price}</span></div><Link href={`/products/${product.slug}`}>{t('product.view')}</Link></div></article>;
}
