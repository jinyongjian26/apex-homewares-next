'use client';
import Link from 'next/link';
import {site,whatsappUrl} from '@/data/site';
import {useLanguage} from '@/components/LanguageProvider';

export function Footer(){const {t}=useLanguage();return <><footer><div><p className="brand">{site.name}</p><p>{t('footer.tagline')}</p></div><div className="footer-links"><a href={whatsappUrl} target="_blank">{t('footer.whatsapp')}</a><a href={`mailto:${site.email}`}>{site.email}</a><Link href="/contact">{t('footer.contact')}</Link></div></footer><a className="whatsapp" href={whatsappUrl} target="_blank" aria-label={t('product.askWhatsapp')}>WA</a></>}
