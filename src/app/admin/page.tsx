import {products} from '@/data/products';

export const metadata={title:'Personal Care Product Management | Ningbo Shanwu'};

export default function Admin(){
  const personalCareProducts=products.filter(product=>product.category==='Personal Care');

  return (
    <section className="section admin">
      <p className="eyebrow">Static product management</p>
      <h1>Personal Care catalogue</h1>
      <p>
        {personalCareProducts.length} multilingual personal-care products are currently published.
        The catalogue is stored in <code>src/data/personal-care-products.ts</code> and requires no database or server.
      </p>
      <div className="admin-note">
        <strong>Batch import complete:</strong> product titles, specifications and descriptions are available in
        English, Spanish and Arabic. Save and deploy the generated data file to update this category.
      </div>
      <div className="admin-table">
        <div className="admin-row admin-label">
          <span>Product</span><span>Category</span><span>MOQ</span><span>File key</span>
        </div>
        {personalCareProducts.map(product=>(
          <div className="admin-row" key={product.slug}>
            <span>{product.name}</span>
            <span>{product.category}</span>
            <span>{product.moq}</span>
            <code>{product.slug}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
