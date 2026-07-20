import type {Metadata} from 'next';

export const metadata:Metadata={
  title:'Contact Joyce for B2B Appliance Sourcing',
  description:'Tell Joyce your product, quantity, destination market and customization needs. Request confirmed B2B small-appliance information from Ningbo Shanwu.',
  alternates:{canonical:'/contact/'},
  openGraph:{
    title:'Contact Joyce for B2B Appliance Sourcing | Ningbo Shanwu',
    description:'Send your product, quantity, destination market and customization requirements to Joyce.',
    url:'/contact/',
  },
};

export default function ContactLayout({children}:{children:React.ReactNode}){return children;}
