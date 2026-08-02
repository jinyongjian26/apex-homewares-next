import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {products} from '@/data/products';
import {site} from '@/data/site';
import {ProductDetail} from '@/components/ProductDetail';

export function generateStaticParams(){return products.map(product=>({slug:product.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)return {};
  const title=`${product.name} Wholesale China | Private Label Supplier`;
  const description=`${product.description.slice(0,115)} Request MOQ, samples and a custom B2B quotation from SHANWU.`;
  const url=`${site.baseUrl}/products/${product.slug}/`;
  return {title,description,alternates:{canonical:url},openGraph:{title,description,url,type:'website',images:[{url:product.image,alt:`${product.name} wholesale supplier`}]} };
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)return notFound();
  const url=`${site.baseUrl}/products/${product.slug}/`;
  const jsonLd={
    '@context':'https://schema.org','@type':'Product',name:product.name,description:product.description,image:[product.image.startsWith('http')?product.image:`${site.baseUrl}${product.image}`],sku:product.slug,category:product.category,
    brand:{'@type':'Brand',name:site.shortName},manufacturer:{'@type':'Organization',name:site.name,url:site.baseUrl},url,
  };
  const breadcrumb={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:site.baseUrl},{'@type':'ListItem',position:2,name:'Products',item:`${site.baseUrl}/products/`},{'@type':'ListItem',position:3,name:product.name,item:url}]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumb).replace(/</g,'\\u003c')}}/><ProductDetail product={product}/></>;
}
