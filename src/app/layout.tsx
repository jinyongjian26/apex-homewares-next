import type {Metadata} from 'next'; import './globals.css'; import {Header} from '@/components/Header'; import {Footer} from '@/components/Footer';
export const metadata:Metadata={title:'Apex Homewares | Small Appliance Supplier',description:'OEM and wholesale small appliances for Europe and the Middle East.',keywords:['small appliance supplier','OEM appliances','wholesale kitchen appliances','Middle East','Europe']};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
