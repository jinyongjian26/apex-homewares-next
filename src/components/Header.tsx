import Link from 'next/link';
import {site} from '@/data/site';
export function Header(){return <header className="header"><Link className="brand" href="/">{site.name}</Link><nav><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/contact">Contact</Link><Link className="nav-cta" href="/contact">Request Quote</Link></nav><a className="header-email" href={`mailto:${site.email}`}>{site.email}</a></header>}
