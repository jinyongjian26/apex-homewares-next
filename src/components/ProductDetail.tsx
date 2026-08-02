'use client';

import Link from 'next/link';
import {InquiryForm} from '@/components/InquiryForm';
import {ProductCard} from '@/components/ProductCard';
import {Product,products} from '@/data/products';
import {site,whatsappUrl} from '@/data/site';
import {useLanguage} from '@/components/LanguageProvider';

export function ProductDetail({product}:{product:Product}){
  const {locale,t}=useLanguage();
  const localized=locale==='en'?undefined:product.translations?.[locale];
  const name=localized?.name??product.name;
  const description=localized?.description??product.description;
  const specs=localized?.specs??product.specs;
  const wa=`${whatsappUrl}?text=${encodeURIComponent(`${t('product.whatsappMessage')} ${name}. Please quote MOQ, sample cost and private-label options.`)}`;
  const related=products.filter(item=>item.category===product.category&&item.slug!==product.slug).slice(0,3);
  const highlights=product.highlights??['Wholesale programme available','Private-label options by model','Export packing support'];

  return <>
    <section className="section product-detail-section">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/products/">Products</Link><span>/</span><b>{name}</b></div>
      <div className="product-detail">
        <div className="product-main-image"><img src={product.image} width="1200" height="1200" alt={`${name} wholesale private label product from China`} /></div>
        <div className="product-summary">
          <p className="eyebrow">{t(`category.${product.category}`)} · B2B wholesale</p><h1>{name}</h1><p className="lead">{description} {t('product.brandingCopy')}</p>
          <div className="summary-tags"><span>Wholesale</span><span>OEM / Private Label</span><span>Make to Order</span></div>
          <div className="quote-facts"><div><span>{t('product.moq')}</span><b>{product.moq}</b></div><div><span>{t('product.price')}</span><b>{product.price}</b></div><div><span>Target buyers</span><b>Importers · distributors · retailers</b></div></div>
          <div className="button-row"><a className="button whatsapp-button" href={wa} target="_blank" rel="noreferrer">{t('product.askWhatsapp')}</a><a className="button outline" href={`mailto:${site.email}?subject=${encodeURIComponent(`Wholesale inquiry - ${name}`)}`}>{t('product.emailInquiry')}</a></div>
          <div className="buyer-highlights"><p className="eyebrow">{t('product.highlights')}</p><ul>{highlights.map(item=><li key={item}>{item}</li>)}</ul></div>
        </div>
      </div>

      {product.gallery&&<div className="product-gallery"><div className="section-heading narrow"><div><p className="eyebrow">{t('product.galleryEyebrow')}</p><h2>{t('product.galleryTitle')}</h2></div></div><div className="gallery-grid">{product.gallery.map(image=><img key={image.src} src={image.src} width="900" height="900" loading="lazy" alt={`${image.alt} - ${name}`}/>)}</div></div>}

      <div className="detail-two-column">
        <div><p className="eyebrow">{t('product.specs')}</p><h2>{t('product.overview')}</h2><div className="spec-table">{specs.map((spec,index)=><div key={`${spec.label}-${index}`}><span>{spec.label}</span><b>{spec.value}</b></div>)}</div>{product.colors&&<div className="colour-options"><p className="eyebrow">{t('product.colours')}</p><div>{product.colors.map(colour=><span key={colour.name}><i style={{background:colour.hex}}></i>{colour.name}</span>)}</div></div>}</div>
        <div><p className="eyebrow">{t('product.customTitle')}</p><h2>{t('product.customCopy')}</h2><div className="custom-list"><article><span>01</span><b>Product logo</b><p>Artwork, position and printing method confirmed before production.</p></article><article><span>02</span><b>Retail packaging</b><p>Colour box, manual, barcode and market-specific label options.</p></article><article><span>03</span><b>Configuration</b><p>Model-dependent colour, voltage, plug, function and accessory choices.</p></article><article><span>04</span><b>Export carton</b><p>Shipping marks, carton layout and packing plan for the agreed route.</p></article></div></div>
      </div>

      <section className="order-advantages"><div><p className="eyebrow">{t('product.orderTitle')}</p><h2>A wholesale process designed around confirmed requirements.</h2></div><div className="advantage-grid"><article><b>Clear specification</b><p>Commercial details are written into the quotation and order documents.</p></article><article><b>Make-to-order planning</b><p>Production and custom packaging are scheduled after approval.</p></article><article><b>Quality checkpoints</b><p>Inspection scope can be aligned to the product and buyer’s needs.</p></article><article><b>Export coordination</b><p>Packing and shipment documents are prepared for the agreed trade term.</p></article></div></section>

      <section className="product-inquiry"><div><p className="eyebrow">{t('product.sampleTitle')}</p><h2>{t('product.sampleTitle')}</h2><p>{t('product.sampleCopy')}</p><div className="sample-steps"><span>1. Select model</span><span>2. Confirm market & quantity</span><span>3. Review sample / quote</span><span>4. Approve order details</span></div></div><InquiryForm productName={name} compact/></section>

      {related.length>0&&<section className="related-products"><div className="section-heading"><div><p className="eyebrow">Wholesale catalogue</p><h2>{t('product.related')}</h2></div><Link href="/products/">View all →</Link></div><div className="product-grid">{related.map(item=><ProductCard key={item.slug} product={item}/>)}</div></section>}
    </section>
  </>;
}
