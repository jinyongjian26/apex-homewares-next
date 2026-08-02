// VERIFIED BUSINESS DETAILS — keep this file as the single source of truth.
export const site = {
  name: 'Ningbo Shanwu Technology Co., Ltd.',
  chineseName: '宁波山雾科技有限公司',
  shortName: 'SHANWU',
  identity: 'China Professional Home Appliance Factory & Wholesale Supplier',
  email: 'sales@ningboshanwu.com',
  whatsapp: '8615372621381',
  address: 'Ningbo Alibaba Center, No. 36 Yongshuiqiao Road, Haishu District, Ningbo, Zhejiang, China',
  baseUrl: 'https://www.ningboshanwu.com',
  markets: ['Middle East', 'Southeast Asia'],
  businessModel: 'Make-to-order manufacturing, OEM, private label and custom packaging for B2B buyers.',
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;
export const quoteWhatsappUrl = `${whatsappUrl}?text=${encodeURIComponent(
  'Hello SHANWU, I would like a wholesale quotation for home appliances.',
)}`;
