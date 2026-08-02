import type {Metadata} from 'next';
import Link from 'next/link';
import {site} from '@/data/site';

const faqs=[
  ['What is your minimum order quantity?','MOQ depends on the model, material, customisation level and packaging. Please send the model and estimated quantity for an accurate quotation.'],
  ['Do you support custom logos and private labels?','Yes. We can review product logo placement, labels, manuals, colour boxes, accessories and export carton artwork. Final options depend on the model and quantity.'],
  ['Can I order a sample before bulk production?','Sample availability, cost and dispatch time are confirmed by model. Custom logo or packaging samples may require artwork confirmation and additional setup time.'],
  ['What is the normal production lead time?','Lead time varies by product, order quantity, custom components, packaging and material status. The confirmed schedule is stated in the formal quotation or proforma invoice.'],
  ['Which product certifications can you provide?','Certification availability is model- and market-specific. Tell us the destination country and required standard so the correct documentation can be checked before ordering.'],
  ['Can you make products for 110V or 220–240V markets?','Market-specific voltage, frequency and plug options depend on the selected model. These details must be confirmed in writing before sampling or production.'],
  ['How do you control product quality?','The order workflow can include incoming inspection, key-stage production checks, electrical and functional testing, appearance checks and packing verification based on the approved specification.'],
  ['Which payment methods and trade terms are available?','Payment schedule, bank information and Incoterms are stated in the proforma invoice. T/T is commonly discussed for B2B orders; final terms depend on the transaction.'],
  ['Can you ship to the Middle East and Southeast Asia?','Yes, we can prepare export packing and coordinate shipment information for these markets. Freight method and cost depend on the destination, volume and agreed Incoterm.'],
  ['Do you keep ready stock?','Our main model is make-to-order B2B production. Any sample or limited stock availability must be checked at the time of enquiry.'],
];

export const metadata:Metadata={title:'Wholesale Appliance FAQ | MOQ, OEM, Samples, Shipping & Payment',description:'Answers about MOQ, private labels, production lead times, appliance certifications, samples, payment and shipping. Send your requirements for a factory quotation.',alternates:{canonical:`${site.baseUrl}/faq/`}};
export default function Page(){return <><section className="page-head"><p className="eyebrow">B2B procurement FAQ</p><h1>Common questions from appliance wholesalers and importers.</h1><p>Clear answers about private-label production, sampling, quality checks, delivery and commercial terms.</p></section><section className="section"><div className="faq-list">{faqs.map(([q,a],index)=><details key={q} open={index===0}><summary><span>{String(index+1).padStart(2,'0')}</span>{q}</summary><p>{a}</p></details>)}</div><div className="center-action"><Link className="button primary" href="/contact/">Ask a specific question</Link></div></section></>}
