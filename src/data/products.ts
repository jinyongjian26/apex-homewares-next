// PRODUCT MANAGEMENT FILE
// Add a product by duplicating an object below and using a unique slug.
import {personalCareProducts} from './personal-care-products';

export type ProductTranslation = {name:string; description:string; specs:{label:string;value:string}[]};
export type Product = {
  slug:string;
  name:string;
  category:'Kitchen'|'Home'|'Personal Care';
  image:string;
  description:string;
  moq:string;
  price:string;
  specs:{label:string; value:string}[];
  highlights?:string[];
  colors?:{name:string; hex:string}[];
  gallery?:{src:string; alt:string}[];
  translations?:Partial<Record<'es'|'ar',ProductTranslation>>;
};

export const products: Product[] = [
  {
    slug:'digital-air-fryer',
    name:'Private Label Digital Air Fryer',
    category:'Kitchen',
    image:'/images/air-fryer-wholesale.webp',
    description:'A practical digital air fryer program for importers, distributors and retail chains seeking custom branding, colour and export packaging.',
    moq:'Flexible MOQ by model',
    price:'Wholesale price on request',
    highlights:['Private label ready','Custom control panel artwork','Export carton options'],
    specs:[{label:'Capacity',value:'5.5 L'},{label:'Power',value:'1700 W'},{label:'Voltage',value:'220-240 V'},{label:'Branding',value:'OEM / private label available'}],
  },
  {
    slug:'handheld-garment-steamer',
    name:'Handheld Garment Steamer',
    category:'Home',
    image:'/images/garment-steamer-wholesale.webp',
    description:'Compact garment-care solution developed for wholesale programs, travel retail and private-label home appliance collections.',
    moq:'Flexible MOQ by model',
    price:'Wholesale price on request',
    highlights:['Fast heat-up options','Travel-friendly format','Custom colour and packaging'],
    specs:[{label:'Product type',value:'Handheld garment steamer'},{label:'Voltage',value:'Market-specific options'},{label:'Packaging',value:'Custom colour box available'},{label:'Branding',value:'OEM / private label available'}],
  },
  {
    slug:'ceramic-steam-iron',
    name:'Ceramic Soleplate Steam Iron',
    category:'Home',
    image:'/images/steam-iron-wholesale.webp',
    description:'Reliable electric steam iron for distributors and home-appliance retailers, with flexible appearance, soleplate and packing options.',
    moq:'Flexible MOQ by model',
    price:'Wholesale price on request',
    highlights:['Smooth ceramic soleplate','Market-specific plug options','Private-label packaging'],
    specs:[{label:'Power',value:'Up to 2400 W'},{label:'Soleplate',value:'Ceramic'},{label:'Voltage',value:'220-240 V'},{label:'Branding',value:'OEM / private label available'}],
  },
  {slug:'portable-espresso-maker',name:'Portable 20-Bar Espresso Maker',category:'Kitchen',image:'/espresso-gallery/hero-english.png',description:'Compact USB-rechargeable espresso maker with 20-bar extraction, designed for office, home and travel use. Compatible with coffee capsules and ground coffee for hot or cold brewing.',moq:'1 pc sample / 100 pcs wholesale tier',price:'FOB CNY 208-231.40',specs:[{label:'Pump pressure',value:'20 bar'},{label:'Coffee compatibility',value:'Capsules and ground coffee'},{label:'Brewing mode',value:'Hot and cold extraction'},{label:'Body material',value:'Plastic'},{label:'Capacity',value:'3-5 cups'},{label:'Rated voltage',value:'Up to 36 V'},{label:'Charging',value:'USB-C, approx. 4 hours'},{label:'Product size',value:'10 x 10 x 31 cm'},{label:'Gross weight',value:'940 g'},{label:'Branding',value:'OEM / private label available'}],colors:[{name:'Black',hex:'#252525'},{name:'Silver Gray',hex:'#9FA2A1'},{name:'Olive Green',hex:'#586047'},{name:'Pink',hex:'#D38E94'},{name:'Dark Green',hex:'#21443D'},{name:'Light Purple',hex:'#C8B2C6'}],gallery:[{src:'/espresso-gallery/hero-english.png',alt:'Portable espresso maker in olive green'},{src:'/espresso-gallery/hot-cold-brew.png',alt:'Hot and cold brewing feature'},{src:'/espresso-gallery/six-features.png',alt:'Portable espresso maker features'},{src:'/espresso-gallery/temperature-control.png',alt:'Temperature control and heating technology'},{src:'/espresso-gallery/two-brew-options.png',alt:'Capsule and ground coffee compatibility'},{src:'/espresso-gallery/pressure-extraction.png',alt:'20 bar pressure extraction'},{src:'/espresso-gallery/battery-power.png',alt:'7650mAh battery power'},{src:'/espresso-gallery/in-car.png',alt:'Portable espresso maker in a car'},{src:'/espresso-gallery/silver-lifestyle.png',alt:'Silver portable espresso maker'}]},
  ...personalCareProducts
];
