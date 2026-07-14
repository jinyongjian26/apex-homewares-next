'use client';
import {useLanguage} from '@/components/LanguageProvider';

export default function About(){const {t}=useLanguage();return <><section className="page-head"><p className="eyebrow">{t('about.eyebrow')}</p><h1>{t('about.title')}</h1><p>{t('about.copy')}</p></section><section className="section about-grid"><article><span>01</span><h2>{t('about.factoryTitle')}</h2><p>{t('about.factoryCopy')}</p></article><article><span>02</span><h2>{t('about.marketTitle')}</h2><p>{t('about.marketCopy')}</p></article><article><span>03</span><h2>{t('about.certTitle')}</h2><p>{t('about.certCopy')}</p></article></section></>}
