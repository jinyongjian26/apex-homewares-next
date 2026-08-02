import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {LanguageProvider} from '@/components/LanguageProvider';
import {site} from '@/data/site';

export const metadata:Metadata={
  metadataBase:new URL(site.baseUrl),
  title:{default:'SHANWU | China Home Appliance Factory & Wholesale Supplier',template:'%s | SHANWU'},
  description:'China professional home appliance factory and wholesale supplier for air fryers, hair styling tools, garment steamers and electric irons. OEM, private label and custom packaging available.',
  keywords:['wholesale small home appliances China','private label air fryer factory','custom logo hair styling tools supplier','bulk garment steamer wholesale','home iron bulk supplier','OEM home appliance factory'],
  applicationName:site.shortName,
  category:'B2B home appliance manufacturing and wholesale',
  authors:[{name:site.name,url:site.baseUrl}],
  creator:site.name,
  publisher:site.name,
  alternates:{canonical:site.baseUrl},
  openGraph:{type:'website',locale:'en_US',url:site.baseUrl,siteName:site.shortName,title:'SHANWU | China Home Appliance Factory & Wholesale Supplier',description:'Make-to-order small appliances, private-label branding and export support for international B2B buyers.',images:[{url:'/images/shanwu-home-appliances-og.webp',width:1200,height:630,alt:'SHANWU home appliance wholesale supplier'}]},
  twitter:{card:'summary_large_image',title:'SHANWU | Home Appliance Factory & Wholesale Supplier',description:'Private-label small appliances for B2B buyers.',images:['/images/shanwu-home-appliances-og.webp']},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
};

const organization={
  '@context':'https://schema.org','@type':'Organization',name:site.name,alternateName:site.chineseName,url:site.baseUrl,logo:`${site.baseUrl}/brand/shanwu-logo.png`,
  description:site.identity,email:site.email,telephone:`+${site.whatsapp}`,
  address:{'@type':'PostalAddress',streetAddress:'Ningbo Alibaba Center, No. 36 Yongshuiqiao Road',addressLocality:'Ningbo',addressRegion:'Zhejiang',addressCountry:'CN'},
  areaServed:site.markets.map(name=>({'@type':'Place',name})),
  contactPoint:{'@type':'ContactPoint',contactType:'sales',telephone:`+${site.whatsapp}`,email:site.email,availableLanguage:['English','Chinese','Spanish','Arabic']},
};

export default function Layout({children}:{children:React.ReactNode}){
  return <html lang="en" dir="ltr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization).replace(/</g,'\\u003c')}}/><LanguageProvider><Header/><main>{children}</main><Footer/></LanguageProvider></body></html>;
}
