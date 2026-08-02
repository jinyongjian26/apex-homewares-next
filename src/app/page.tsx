import type {Metadata} from 'next';
import {HomePage} from '@/components/HomePage';
import {site} from '@/data/site';

export const metadata:Metadata={
  title:'Wholesale Small Home Appliances China | OEM & Private Label Factory',
  description:'Source air fryers, hair styling tools, garment steamers and electric irons for Europe, North America and the Middle East from a China B2B appliance factory. Request your OEM quotation.',
  alternates:{canonical:site.baseUrl},
};

export default function Page(){return <HomePage/>}
