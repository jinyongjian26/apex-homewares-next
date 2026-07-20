import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {LanguageProvider} from '@/components/LanguageProvider';

export const metadata:Metadata={
  metadataBase:new URL('https://www.ningboshanwu.com'),
  title:{
    default:'Small Appliance Supplier & OEM Partner | Ningbo Shanwu',
    template:'%s | Ningbo Shanwu',
  },
  description:'Source export-ready small appliances from Ningbo Shanwu. OEM and wholesale support for distributors, retailers and private-label buyers.',
  keywords:['small appliance supplier','OEM appliances','wholesale appliances','private label appliances','Ningbo Shanwu'],
  alternates:{canonical:'/'},
  openGraph:{
    type:'website',
    siteName:'Ningbo Shanwu',
    title:'Small Appliance Supplier & OEM Partner | Ningbo Shanwu',
    description:'OEM and wholesale small appliances for distributors, retailers and private-label buyers.',
    url:'/',
    images:[{url:'/brand/shanwu-logo.png',alt:'Ningbo Shanwu Technology Co., Ltd.'}],
  },
  twitter:{
    card:'summary_large_image',
    title:'Small Appliance Supplier & OEM Partner | Ningbo Shanwu',
    description:'OEM and wholesale small appliances for distributors, retailers and private-label buyers.',
    images:['/brand/shanwu-logo.png'],
  },
  icons:{icon:'/brand/shanwu-logo.png',apple:'/brand/shanwu-logo.png'},
};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" dir="ltr"><body><LanguageProvider><Header/><main>{children}</main><Footer/></LanguageProvider></body></html>}
