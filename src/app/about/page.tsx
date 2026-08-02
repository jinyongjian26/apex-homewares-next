import type {Metadata} from 'next';
import {AboutPage} from '@/components/AboutPage';
import {site} from '@/data/site';

export const metadata:Metadata={title:'About SHANWU | China Home Appliance Factory & Wholesale Supplier',description:'Learn how Ningbo Shanwu supports B2B buyers with make-to-order small appliances, OEM branding, packaging customisation and export coordination. Contact our team for a quotation.',alternates:{canonical:`${site.baseUrl}/about/`}};
export default function Page(){return <AboutPage/>}
