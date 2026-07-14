import type {Metadata} from 'next';
import './globals.css';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {LanguageProvider} from '@/components/LanguageProvider';

export const metadata:Metadata={title:'Apex Homewares | Small Appliance Supplier',description:'OEM and wholesale small appliances for Europe and the Middle East.',keywords:['small appliance supplier','OEM appliances','wholesale kitchen appliances','Middle East','Europe']};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" dir="ltr"><body><LanguageProvider><Header/><main>{children}</main><Footer/></LanguageProvider></body></html>}
