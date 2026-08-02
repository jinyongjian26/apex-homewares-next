import type {Metadata} from 'next';
import {ContactPage} from '@/components/ContactPage';
import {site} from '@/data/site';

export const metadata:Metadata={
  title:'Contact Home Appliance Factory | Wholesale OEM Quotation',
  description:'Send your appliance models, quantity, destination and private-label requirements to Ningbo Shanwu. Request a practical B2B wholesale quotation today.',
  alternates:{canonical:`${site.baseUrl}/contact/`},
};
export default function Page(){return <ContactPage/>}
