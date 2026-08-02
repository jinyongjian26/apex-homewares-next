'use client';

import {site} from '@/data/site';
import {useLanguage} from '@/components/LanguageProvider';

export function InquiryForm({productName='',compact=false}:{productName?:string;compact?:boolean}){
  const {t}=useLanguage();
  return <form className={`inquiry-form ${compact?'compact':''}`} action={`https://formsubmit.co/${site.email}`} method="POST">
    <input type="hidden" name="_subject" value={`New B2B wholesale inquiry${productName?` - ${productName}`:''}`}/>
    <input type="hidden" name="_template" value="table"/>
    <input type="hidden" name="_next" value={`${site.baseUrl}/thank-you/`}/>
    <input className="honey-field" type="text" name="_honey" tabIndex={-1} autoComplete="off"/>
    <div className="form-grid">
      <label>{t('form.name')}<input required name="name" autoComplete="name"/></label>
      <label>{t('form.email')}<input required name="email" type="email" autoComplete="email" placeholder="name@company.com"/></label>
      <label>{t('form.company')}<input required name="company" autoComplete="organization"/></label>
      <label>{t('form.whatsapp')}<input required name="whatsapp" type="tel" autoComplete="tel" placeholder="+Country code"/></label>
      <label>{t('form.market')}<select required name="destination-market" defaultValue=""><option value="" disabled>Select market</option><option>Middle East</option><option>Southeast Asia</option><option>Europe</option><option>North America</option><option>Other</option></select></label>
      <label>{t('form.product')}<input required name="product" defaultValue={productName}/></label>
      <label>{t('form.quantity')}<input required name="estimated-quantity" placeholder="e.g. 500 pcs"/></label>
      <label>Target voltage / plug<input name="voltage-plug" placeholder="e.g. 220-240V / EU plug"/></label>
    </div>
    <label>{t('form.request')}<textarea required name="requirements" rows={compact?4:6} placeholder={t('form.requestPlaceholder')}/></label>
    <label className="consent"><input required type="checkbox" name="privacy-consent" value="Agreed"/><span>{t('form.consent')}</span></label>
    <button className="button dark" type="submit">{t('form.submit')}</button>
    <small>{t('form.note')}</small>
  </form>;
}
