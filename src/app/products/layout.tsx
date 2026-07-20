import type {Metadata} from 'next';

export const metadata:Metadata={
  title:'Wholesale Small Appliances',
  description:'Explore wholesale kitchen, home and personal-care appliances for distributors and retailers. Ask Joyce about MOQ, specifications, OEM packaging and lead time.',
  alternates:{canonical:'/products/'},
  openGraph:{
    title:'Wholesale Small Appliances | Ningbo Shanwu',
    description:'Wholesale kitchen, home and personal-care appliances for distributors, retailers and private-label buyers.',
    url:'/products/',
  },
};

export default function ProductsLayout({children}:{children:React.ReactNode}){return children;}
