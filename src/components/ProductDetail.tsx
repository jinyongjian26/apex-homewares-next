'use client';
import Link from 'next/link';
import {Product} from '@/data/products';
import {site,whatsappUrl} from '@/data/site';
import {useLanguage} from '@/components/LanguageProvider';

export function ProductDetail({product}:{product:Product}) {
  const {t}=useLanguage();
  const name=t(`catalog.${product.slug}.name`);
  const description=t(`catalog.${product.slug}.description`);
  const localize=(group:string,value:string)=>{const translated=t(`${group}.${value}`);return translated===`${group}.${value}`?value:translated};
  const wa=`${whatsappUrl}?text=${encodeURIComponent(`${t('product.whatsappMessage')} ${name}.`)}`;
  return <section className="section"><Link className="back" href="/products">{t('product.back')}</Link><div className="detail"><img src={product.image} alt={name}/><div><p className="eyebrow">{t(`category.${product.category}`)}</p><h1>{name}</h1><p>{description} {t('product.brandingCopy')}</p><div className="detail-meta"><div><b>{t('product.moq')}</b>{product.moq}</div><div><b>{t('product.price')}</b>{product.price}</div></div><a className="button gold" href={wa} target="_blank">{t('product.askWhatsapp')}</a><a className="button outline" href={`mailto:${site.email}?subject=${encodeURIComponent(`${t('product.emailInquiry')} - ${name}`)}`}>{t('product.emailInquiry')}</a></div></div>{product.gallery&&<div className="product-gallery"><div className="gallery-heading"><p className="eyebrow">{t('product.galleryEyebrow')}</p><h2>{t('product.galleryTitle')}</h2></div><div className="gallery-grid">{product.gallery.map(image=><img key={image.src} src={image.src} alt={image.alt}/>)}</div></div>}<div className="spec-wrap"><div><p className="eyebrow">{t('product.specs')}</p><h2>{t('product.overview')}</h2><table><tbody>{product.specs.map(s=><tr key={s.label}><td>{localize('spec',s.label)}</td><td>{localize('value',s.value)}</td></tr>)}</tbody></table>{product.colors&&<div className="colour-options"><b>{t('product.colours')}</b><div>{product.colors.map(c=><span key={c.name} title={localize('colour',c.name)}><i style={{backgroundColor:c.hex}}></i>{localize('colour',c.name)}</span>)}</div></div>}</div><div><p className="eyebrow">{t('product.packaging')}</p><h2>{t('product.ready')}</h2><p>{t('product.packagingCopy')}</p><Link href="/contact">{t('product.sendInquiry')}</Link></div></div></section>;
}
