import {notFound} from 'next/navigation';
import Link from 'next/link';
import {products} from '@/data/products';
import {site,whatsappUrl} from '@/data/site';

export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=products.find(p=>p.slug===slug);
  if(!product)return notFound();
  const wa=`${whatsappUrl}?text=${encodeURIComponent(`Hello, I am interested in ${product.name}.`)}`;
  return <section className="section"><Link className="back" href="/products">Back to products</Link><div className="detail"><img src={product.image} alt={product.name}/><div><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p>{product.description} Custom branding, colour and packaging options are available for qualified orders.</p><div className="detail-meta"><div><b>MOQ</b>{product.moq}</div><div><b>Indicative price</b>{product.price}</div></div><a className="button gold" href={wa} target="_blank">Ask on WhatsApp</a><a className="button outline" href={`mailto:${site.email}?subject=${encodeURIComponent(`Inquiry - ${product.name}`)}`}>Email inquiry</a></div></div>{product.gallery&&<div className="product-gallery"><div className="gallery-heading"><p className="eyebrow">Product gallery</p><h2>Designed for coffee anywhere.</h2></div><div className="gallery-grid">{product.gallery.map(image=><img key={image.src} src={image.src} alt={image.alt}/>)}</div></div>}<div className="spec-wrap"><div><p className="eyebrow">Specifications</p><h2>Product overview</h2><table><tbody>{product.specs.map(s=><tr key={s.label}><td>{s.label}</td><td>{s.value}</td></tr>)}</tbody></table>{product.colors&&<div className="colour-options"><b>Available colours</b><div>{product.colors.map(c=><span key={c.name} title={c.name}><i style={{backgroundColor:c.hex}}></i>{c.name}</span>)}</div></div>}</div><div><p className="eyebrow">Packaging & logistics</p><h2>Ready for export.</h2><p>Standard export carton packing is available. Our team can support inspection, loading and shipping documentation according to your destination.</p><Link href="/contact">Send product inquiry</Link></div></div></section>;
}
