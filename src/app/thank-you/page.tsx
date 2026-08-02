import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata:Metadata={title:'Inquiry Received',robots:{index:false,follow:false}};
export default function Page(){return <section className="thank-you"><div><span>✓</span><p className="eyebrow">Inquiry received</p><h1>Thank you for contacting SHANWU.</h1><p>Our export team will review your product, quantity and market requirements. Complete B2B enquiries are normally reviewed within one business day.</p><div className="button-row"><Link className="button primary" href="/products/">Continue browsing</Link><Link className="button outline" href="/">Back to home</Link></div></div></section>}
