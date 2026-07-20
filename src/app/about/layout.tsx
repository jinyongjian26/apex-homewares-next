import type {Metadata} from 'next';

export const metadata:Metadata={
  title:'About Ningbo Shanwu',
  description:'Learn how Ningbo Shanwu supports international small-appliance buyers with responsive sourcing, inspection coordination, packaging and export documentation.',
  alternates:{canonical:'/about/'},
  openGraph:{
    title:'About Ningbo Shanwu | Small Appliance Export Partner',
    description:'Practical sourcing support for international small-appliance buyers.',
    url:'/about/',
  },
};

export default function AboutLayout({children}:{children:React.ReactNode}){return children;}
