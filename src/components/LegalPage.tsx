import type {ReactNode} from 'react';
import Link from 'next/link';

export function LegalPage({eyebrow,title,intro,children}:{eyebrow:string;title:string;intro:string;children:ReactNode}){return <><section className="page-head"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><section className="section legal-content">{children}<div className="legal-contact"><p>Questions about this policy or a B2B order?</p><Link href="/contact/">Contact our export team →</Link></div></section></>}
