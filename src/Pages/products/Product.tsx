import './Product.css';
export function Product() {
  return (
    <div >
      <div className="productcard">
        <div className='productImage'>Image class</div>
        <div className='product'>
          <h5>PRODUCTS</h5>
          <div className="productheader">
            {' '}
            Solution to meet today’s automation needs
          </div>
          <div className="h3text">
            Designed for companies serious about taking advantage of the
            benefits of automation, BotzAutomation is a scalable,
            cost-effective, and enterprise-wide SaaS test automation tool that
            supports both Agile development and business process teams.
          </div>
        </div>
      </div>
    </div>
  );
}
