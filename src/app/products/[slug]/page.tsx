import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {products} from '@/data/products';
import {ProductDetail} from '@/components/ProductDetail';

export function generateStaticParams(){return products.map(product=>({slug:product.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const product=products.find(item=>item.slug===slug);
  if(!product)return {};
  const title=`${product.name} Wholesale & OEM`;
  const description=`Source ${product.name} for wholesale and private-label programs. Ask Joyce about specifications, MOQ, packaging and production lead time.`;
  return {
    title:{absolute:`${title} | Ningbo Shanwu`},
    description,
    alternates:{canonical:`/products/${product.slug}/`},
    openGraph:{
      type:'website',
      title:`${title} | Ningbo Shanwu`,
      description,
      url:`/products/${product.slug}/`,
      images:[{url:product.image,alt:product.name}],
    },
    twitter:{card:'summary_large_image',title:`${title} | Ningbo Shanwu`,description,images:[product.image]},
  };
}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)return notFound();return <ProductDetail product={product}/>}
