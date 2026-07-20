import type {MetadataRoute} from 'next';
import {products} from '@/data/products';

const baseUrl='https://www.ningboshanwu.com';
export const dynamic='force-static';

export default function sitemap():MetadataRoute.Sitemap{
  const updatedAt=new Date();
  const staticPages=[
    {url:`${baseUrl}/`,changeFrequency:'weekly' as const,priority:1},
    {url:`${baseUrl}/products/`,changeFrequency:'weekly' as const,priority:.9},
    {url:`${baseUrl}/about/`,changeFrequency:'monthly' as const,priority:.6},
    {url:`${baseUrl}/contact/`,changeFrequency:'monthly' as const,priority:.8},
  ];
  const productPages=products.map(product=>({
    url:`${baseUrl}/products/${product.slug}/`,
    lastModified:updatedAt,
    changeFrequency:'monthly' as const,
    priority:.7,
  }));
  return [...staticPages.map(page=>({...page,lastModified:updatedAt})),...productPages];
}
