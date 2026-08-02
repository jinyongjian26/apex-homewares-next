# 宁波山雾科技独立站改版、SEO 与免费获客执行手册

更新日期：2026-08-02  
网站身份：**China Professional Home Appliance Factory & Wholesale Supplier**  
正式网站地址：<https://www.ningboshanwu.com/>

Vercel 备用地址：<https://apex-homewares-next.vercel.app/>

> 本文档是代码交付、页面文案和站外获客工作的统一执行底稿。SEO 能提高抓取、理解和曝光机会，但任何服务商都不能保证具体关键词排名或询盘数量。

## 一、已经落地的网站整改

### 1. 首页

- 导航：Logo、美发小家电、厨房小家电、熨烫设备、Our Factory、Custom Service、FAQ、Contact Us。
- 右侧工具：英语/西班牙语/阿拉伯语切换、WhatsApp、Quick Inquiry。
- 首屏：本地 WebP 产品合集图、B2B 英文标题、产品目录和 WhatsApp 询价双入口。
- B2B 信任条：工厂直供、接单生产、私标包装、出口单证支持。
- 产品分类：美发、厨房、熨烫三类直达筛选结果。
- 热销产品：6 个卡片，统一显示 Wholesale、Private Label、Low MOQ Options。
- 工厂流程：需求确认、生产控制、功能测试、出口包装。
- 定制服务：Logo、彩盒、功能调整、外箱设计。
- 客户与市场：中东、东南亚；批发商、实体店、贸易商、跨境卖家。
- FAQ：MOQ、Logo、交期、样品、认证、运费付款。
- 结尾 CTA：表单和 WhatsApp 双入口。

### 2. 产品列表页

- 四个筛选按钮已绑定真实筛选：All、Kitchen、Ironing、Hair & Personal Care。
- URL 使用可分享参数，例如 `/products/?category=personal-care`。
- 卡片尺寸、图片比例、文案长度、MOQ、报价标签全部统一。
- 增加自然的 SEO 正文，不使用隐藏文本或关键词堆砌。

### 3. 产品详情页

- 面包屑导航和独立 canonical URL。
- 高清主图、B2B 标签、MOQ、批发价、WhatsApp、邮件入口。
- 参数表、颜色、买家卖点、私标方案、批量订货优势。
- 样品/批量询价表单，自动带入产品名称。
- 同类产品推荐。
- 每个产品自动生成独立 Title、Meta Description、Product 与 Breadcrumb JSON-LD。

### 4. 公司及合规页面

- `/about/`：工厂型 B2B 定位、接单生产、OEM 流程、目标客户。
- `/faq/`：10 组采购问答。
- `/privacy-policy/`：数据收集、用途、第三方表单、保留、权利说明。
- `/terms-of-service/`：网站用途、产品信息、订单成立、知识产权、责任边界。
- `/shipping-payment/`：样品、交期、包装、物流、Incoterms、付款和验货。
- `/thank-you/`：提交表单后的感谢页，并设置 `noindex`。

### 5. 性能和技术

- Next.js 纯静态导出，无自建服务器和数据库。
- 生成 101 个静态页面，其中 87 个产品详情页。
- 新增视觉素材转为 WebP，单张约 29–134 KB。
- 产品卡片和非首屏图片开启 `loading="lazy"`。
- 移除外部 Google Fonts 请求，改为系统无衬线字体栈。
- 统一深蓝、浅灰、白色；响应式断点覆盖桌面、平板和手机。
- 阿拉伯语切换后自动设置 `lang="ar"` 和 `dir="rtl"`。

## 二、图片替换说明

以下两张是本次生成的通用营销视觉，不应对外称为“山雾真实工厂实拍”：

- `public/images/home-appliance-oem-hero.webp`
- `public/images/appliance-production-quality-control.webp`

正式运营时应使用经过授权、能够验证的真实照片替换第二张。建议准备：

1. 工厂外景或固定招牌；
2. 生产线全景；
3. 工人装配过程；
4. 功能/安规测试；
5. 成品抽检；
6. 彩盒和外箱；
7. 装柜或发货；
8. 团队与办公场景。

照片建议横图 1600×900 以上，避免显示其他供应商 Logo、电话、客户订单信息。

## 三、关键词与页面映射

| 页面 | 主关键词 | 辅助长尾词 |
|---|---|---|
| 首页 | wholesale small home appliances China | China home appliance factory, OEM home appliance supplier |
| 厨房分类 | Air Fryer | private label air fryer factory, wholesale air fryer China |
| 美发分类 | Hair Straightener / Hair Curler | custom logo hair styling tools supplier, wholesale hair appliances |
| 熨烫分类 | Garment Steamer / Electric Iron | bulk garment steamer wholesale, home iron bulk supplier |
| About | home appliance factory China | OEM appliance manufacturing, private label supplier |
| Contact | home appliance wholesale quotation | OEM appliance inquiry, bulk order quote |

执行规则：

- 一页只确定一个主要搜索意图。
- 标题、H1、首段、图片 Alt、正文、内部链接自然出现关键词。
- 不连续重复完全相同的词，不批量生成无价值城市页或国家页。
- 产品参数不确定时写 `subject to final written confirmation`，不编造认证、产能和交期。

## 四、Meta 模板

### 首页

**Title**

```text
Wholesale Small Home Appliances China | OEM & Private Label Factory
```

**Meta Description**

```text
Source air fryers, hair styling tools, garment steamers and electric irons from a China B2B home appliance factory. Request your wholesale OEM quotation.
```

### 分类页模板

```text
[Category] Wholesale China | OEM & Private Label Supplier
```

```text
Source [category/product examples] for bulk B2B orders with logo, colour and packaging options. Send your target quantity and market for a factory quotation.
```

### 产品页模板

```text
[Product Name] Wholesale China | Private Label Supplier
```

```text
[One-sentence product value]. OEM logo and custom packaging available by model and quantity. Request MOQ, samples and a tailored B2B quotation.
```

建议 Description 控制在约 140–160 个英文字符；不要把每个关键词都塞进同一个描述。

## 五、询盘表单文案

标题：

```text
Request a Sample or Wholesale Quote
```

引导：

```text
Tell us the model, target market, estimated quantity and custom requirements. Our team will reply with the next practical step.
```

字段：Name、Business Email、Company、WhatsApp / Phone、Destination Market、Product / Model、Estimated Quantity、Voltage / Plug、Requirements。

提交按钮：

```text
Send Wholesale Inquiry
```

表单通过 FormSubmit 将内容发送至 `sales@ningboshanwu.com`。首次真实提交后，需要登录该邮箱点击一次激活确认邮件；未激活前不能保证后续询盘送达。

## 六、About Us 对外英文介绍

```text
Ningbo Shanwu Technology Co., Ltd. is a China professional home appliance factory and wholesale supplier serving international B2B buyers. We focus on make-to-order appliance programmes for wholesalers, offline retailers, trading companies and cross-border sellers.

Our product scope includes air fryers, hair straighteners, hair curlers, hot-air styling brushes, handheld garment steamers and electric irons. Depending on the selected model and order quantity, we can review product logo printing, colour-box artwork, manuals, labels, accessories, colours, plugs, voltage options and export-carton requirements.

Each project begins with a clear review of the target market, quantity, product specification, compliance needs and packaging. Production scheduling, quality checkpoints and shipment preparation are then aligned to the approved order documents. Our priority is practical communication, written confirmation and dependable execution for long-term wholesale cooperation.

Send us your product list, destination market and estimated quantity to receive the next sourcing step and a tailored B2B quotation.
```

## 七、FAQ 对外英文文案

1. **What is your minimum order quantity?**  
   MOQ depends on the model, material, customisation level and packaging. Send the model and estimated quantity for an accurate quotation.
2. **Do you support custom logos and private labels?**  
   Yes. Product logo, labels, manuals, colour boxes and export cartons can be reviewed according to model and quantity.
3. **Can I order a sample before bulk production?**  
   Sample availability, cost and dispatch time are confirmed by model. Custom samples may require artwork approval and additional setup time.
4. **What is the production lead time?**  
   Lead time depends on product, quantity, materials and packaging. The confirmed schedule is stated in the formal quotation or proforma invoice.
5. **Which certifications are available?**  
   Availability varies by model and market. Tell us the destination and required standard before ordering.
6. **Can you supply different voltages and plugs?**  
   Market-specific options depend on the model and must be confirmed in writing before sampling or production.
7. **How do you control quality?**  
   The order workflow can include incoming inspection, production checks, electrical and functional testing, appearance checks and packing verification.
8. **How are payment and shipping handled?**  
   Payment schedule, freight method and Incoterm are stated in the proforma invoice and agreed before production.

## 八、robots.txt 交付代码

项目文件：`src/app/robots.ts`

```ts
import type {MetadataRoute} from 'next';
import {site} from '@/data/site';

export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{
  return {
    rules:{userAgent:'*',allow:'/',disallow:['/admin/','/thank-you/']},
    sitemap:`${site.baseUrl}/sitemap.xml`,
    host:site.baseUrl,
  };
}
```

线上地址：`https://www.ningboshanwu.com/robots.txt`

## 九、sitemap 标准格式

项目由 `src/app/sitemap.ts` 自动输出全部静态页和产品页，标准 XML 结果类似：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-08-02</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/products/digital-air-fryer/</loc>
    <lastmod>2026-08-02</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

线上提交地址：`https://www.ningboshanwu.com/sitemap.xml`

绑定自有域名后，必须先修改 `src/data/site.ts` 的 `baseUrl`，重新部署，再向 GSC 提交新域名的 sitemap。

## 十、Google Search Console 操作步骤

### 推荐：域名资源 DNS 验证

1. 打开 <https://search.google.com/search-console/>。
2. 点击“添加资源”，选择“网域”。
3. 输入根域名，不带 `https://` 和路径。
4. 复制 Google 提供的 TXT 记录。
5. 在域名服务商 DNS 后台新增 TXT；不要删除其他 TXT。
6. 等待 DNS 生效后回到 GSC 点击“验证”。
7. 左侧打开“Sitemaps”，输入 `sitemap.xml` 并提交。
8. 使用“网址检查”分别检查首页、三类产品入口和 3–5 个重点产品页；页面可抓取后点击“请求编入索引”。
9. 每周查看“网页”“核心网页指标”“HTTPS”和“效果”报告。

### 备用：网址前缀 HTML 标签验证

1. 添加 `https://你的域名/` 网址前缀资源。
2. 选择 HTML 标签，复制 `content` 中的验证码。
3. 将验证码加入 Next.js 根布局 metadata 的 `verification.google`。
4. 部署后查看首页源代码，确认 `google-site-verification` 位于 `<head>`。
5. 回 GSC 点击验证；验证标签长期保留。

## 十一、Google 商家档案（GBP）合规填写模板

### 先判断是否符合资格

Google 要求展示地址的门店必须是真实运营地点，有固定招牌、由本公司人员在营业时间值守，并能在该地址接待客户。虚拟办公室、纯收件地址、无人值守共享工位不符合展示地址条件。

“Ningbo Alibaba Center”只有在满足上述条件时才能作为公开地址。若只是虚拟办公室或不能接待客户，不要用它创建/展示门店地址，也不要为了地图流量填写虚假服务范围。外贸工厂是否符合 GBP 资格，应以实际场所、招牌、人员和客户服务方式为准。

### 符合资格时的资料范本

- Business name：`Ningbo Shanwu Technology Co., Ltd.`（禁止在名称中塞关键词）
- Primary category：优先搜索并选择 `Appliance manufacturer`；如果当地没有，再选择最接近的真实类别。
- Secondary category：只添加真实适用的 `Manufacturer`、`Wholesaler` 等，不要堆满。
- Address：`Ningbo Alibaba Center, No. 36 Yongshuiqiao Road, Haishu District, Ningbo, Zhejiang, China`
- Phone：`+86 153 7262 1381`
- Website：自有正式域名；未绑定前可暂用 Vercel 地址。
- Hours：填写实际有人接听商务咨询的时间。
- Opening date：填写真实日期，不编造。
- Products：Air Fryers；Hair Straighteners；Hair Curlers；Hot Air Brushes；Garment Steamers；Electric Irons。

Business Description（不放链接、价格或促销）：

```text
Ningbo Shanwu Technology Co., Ltd. is a China professional home appliance factory and wholesale supplier serving B2B buyers. Our product range includes air fryers, hair straighteners, hair curlers, hot-air styling brushes, handheld garment steamers and electric irons. We support make-to-order production, private-label logo application, packaging customisation and export coordination for wholesalers, retailers, trading companies and cross-border sellers. Product configuration and commercial terms are confirmed according to model, quantity and destination market.
```

## 十二、Google/社媒月度发帖模板

每周 2 条，真实图片优先；不要重复发布完全相同内容。

### 第 1 周：生产流程

```text
From specification review to function testing and export packing, every B2B appliance order should follow a clear written workflow. This week our team is reviewing [product/model] requirements for [target market]. Contact us with your quantity, voltage, plug and packaging needs.
```

### 第 2 周：新品样品

```text
New sample review: [product/model]. Available private-label options may include product logo, colour-box artwork, manual, labels and export carton. Final options depend on model and order quantity. Send your target market for a tailored quotation.
```

### 第 3 周：出货案例

```text
Export preparation for a [product category] wholesale order: carton check, shipping marks and final document review. Destination and buyer details remain confidential. Looking for a similar B2B programme? Share your model list and estimated quantity.
```

### 第 4 周：定制案例

```text
Private-label packaging is more than adding a logo. Voltage, plug, labels, manual, barcode, colour box and outer carton must match the destination market and sales channel. We help B2B buyers review these details before production.
```

Google Q&A 建议：用真实客户常见问题回答，禁止自问自答制造虚假口碑。可准备以下公开问答：MOQ、样品、Logo、交期、认证、付款、物流。

## 十三、免费外链与品牌资料平台

优先建立真实企业资料，所有名称、地址、电话、网址保持一致。不要购买大量垃圾目录链接。

| 平台 | 用途 | 建议 |
|---|---|---|
| LinkedIn Company Page | 企业背书、内容、员工关联 | 官方支持免费公司页；填网站和产品简介 |
| Bing Places | Bing 地图/搜索 | 仅在真实地点符合平台资格时认领 |
| Kompass | 全球 B2B 公司目录 | 官方提供免费公司资料入口，填写完整产品分类 |
| EC21 | B2B 供应商资料 | 现有免费会员层级；发布核心产品，不复制全站内容 |
| YouTube | 视频搜索与信任 | 频道 About 和每条视频描述链接到相关产品页 |
| Facebook Page | 品牌资料与帖子 | 使用公司主页，不只依赖个人资料 |
| Pinterest Business | 产品图搜索 | 每张图链接到对应产品详情页，避免批量重复图 |
| 当地商会/行业协会 | 高可信引用 | 仅申请真实会员目录，不购买伪会员标识 |
| 供应链伙伴 | 相关行业推荐 | 包装、物流或展会伙伴可在真实合作案例中互链 |

外链简介模板：

```text
Ningbo Shanwu Technology Co., Ltd. is a China professional home appliance factory and wholesale supplier. We provide make-to-order air fryers, hair styling tools, garment steamers and electric irons for B2B buyers, with private-label logo and packaging options subject to model and quantity.
```

锚文本轮换：`SHANWU`、`Ningbo Shanwu Technology`、`home appliance wholesale supplier`、具体产品名、裸网址。不要所有链接都使用同一个精准关键词。

## 十四、YouTube 免费引流

### 选题

1. Air Fryer OEM Checklist for Importers
2. How to Choose a Private Label Hair Straightener Supplier
3. Garment Steamer Function Test Before Bulk Shipment
4. Hair Curler Packaging Customisation: Logo, Box and Manual
5. Electric Iron Wholesale Order: Voltage, Plug and Soleplate Options
6. From Sample Approval to Export Carton
7. How B2B Buyers Should Confirm MOQ and Lead Time
8. Appliance Quality Check: Appearance, Function and Packing

### 标题公式

```text
[Product] Wholesale China | [Specific Feature/Process] | SHANWU
```

示例：

```text
Private Label Air Fryer Factory | OEM Packaging Process | SHANWU
```

### 简介模板

```text
Looking for [product] for wholesale or private-label orders?

This video shows [specific process or feature]. Ningbo Shanwu Technology Co., Ltd. supports B2B buyers with make-to-order production, logo application, packaging customisation and export coordination.

Product details: https://yourdomain.com/products/[slug]/
Wholesale inquiry: https://yourdomain.com/contact/
WhatsApp: +86 153 7262 1381

Please send your destination market, estimated quantity, voltage, plug and packaging requirements for an accurate quotation.

#HomeAppliances #Wholesale #PrivateLabel #OEM
```

视频链接应指向最相关的产品页，而不是所有视频都只指向首页。

## 十五、90 天执行表

### 第 1–2 周

- 购买并绑定正式域名；修改 `site.baseUrl`。
- 配置企业域名邮箱。
- 激活表单投递并完成 3 次真实测试。
- GSC 域名验证并提交 sitemap。
- 用真实工厂照片替换通用流程图。

### 第 3–4 周

- 完成 5 个主推产品参数核对、证书情况和真实图片。
- 每个主推产品发布 1 个短视频。
- 建立 LinkedIn、Kompass、EC21 等一致企业资料。

### 第 2 个月

- 每周发布 1 篇采购型内容：选品、参数、认证、包装、交期。
- 每周 2 条社媒/GBP 内容（仅在 GBP 合规可用时）。
- GSC 检查查询词，把已有曝光但点击低的页面重写 Title/Description。

### 第 3 个月

- 根据询盘和曝光确定 3 个重点品类。
- 补充每个品类的真实案例、FAQ、质检过程和视频。
- 清理无真实参数、重复或低质量产品页；不要只追求页面数量。

## 十六、上线前必须由企业确认的资料

- 正式域名；
- 企业域名邮箱；
- 工商登记英文名称是否与收款/合同一致；
- 实际工厂和办公地址的展示授权；
- 每个产品的真实参数、MOQ、认证、价格和交期；
- 真实工厂/质检/出货照片；
- 付款账户和发票抬头；
- 目标市场适用的产品合规和标签要求。

中国大陆 ICP 备案号只能在取得真实备案后展示。当前 Vercel 海外托管不应伪造备案号；如果未来使用中国大陆服务器或 CDN，应按实际服务商和监管要求办理。
