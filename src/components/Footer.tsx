import Link from 'next/link';
import {site,whatsappUrl} from '@/data/site';
export function Footer(){return <><footer><div><p className="brand">{site.name}</p><p>Small appliances for global retail.</p></div><div className="footer-links"><a href={whatsappUrl} target="_blank">WhatsApp</a><a href={`mailto:${site.email}`}>{site.email}</a><Link href="/contact">Contact us</Link></div></footer><a className="whatsapp" href={whatsappUrl} target="_blank" aria-label="Chat on WhatsApp">WA</a></>}
