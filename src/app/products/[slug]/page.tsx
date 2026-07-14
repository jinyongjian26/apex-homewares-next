import {notFound} from 'next/navigation';
import {products} from '@/data/products';
import {ProductDetail} from '@/components/ProductDetail';

export function generateStaticParams(){return products.map(product=>({slug:product.slug}))}
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=products.find(item=>item.slug===slug);if(!product)return notFound();return <ProductDetail product={product}/>}
