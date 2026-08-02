import type {Metadata} from 'next';
import {ProductsCatalog} from '@/components/ProductsCatalog';
import {site} from '@/data/site';

export const metadata:Metadata={
  title:'Wholesale Small Home Appliances China | Product Catalogue',
  description:'Browse private-label air fryers, hair straighteners, hair curlers, garment steamers and electric irons for bulk B2B orders. Request a factory quotation.',
  alternates:{canonical:`${site.baseUrl}/products/`},
};

export default function Page(){return <ProductsCatalog/>}
