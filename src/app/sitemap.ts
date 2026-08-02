import type {MetadataRoute} from 'next';
import {products} from '@/data/products';
import {site} from '@/data/site';

export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{
  const now=new Date();
  const staticRoutes=[
    {path:'',priority:1,changeFrequency:'weekly' as const},
    {path:'/products/',priority:.9,changeFrequency:'weekly' as const},
    {path:'/about/',priority:.7,changeFrequency:'monthly' as const},
    {path:'/faq/',priority:.7,changeFrequency:'monthly' as const},
    {path:'/contact/',priority:.8,changeFrequency:'monthly' as const},
    {path:'/privacy-policy/',priority:.3,changeFrequency:'yearly' as const},
    {path:'/terms-of-service/',priority:.3,changeFrequency:'yearly' as const},
    {path:'/shipping-payment/',priority:.5,changeFrequency:'monthly' as const},
  ];
  return [
    ...staticRoutes.map(route=>({url:`${site.baseUrl}${route.path}`,lastModified:now,changeFrequency:route.changeFrequency,priority:route.priority})),
    ...products.map(product=>({url:`${site.baseUrl}/products/${product.slug}/`,lastModified:now,changeFrequency:'monthly' as const,priority:.7,images:[product.image.startsWith('http')?product.image:`${site.baseUrl}${product.image}`]})),
  ];
}
