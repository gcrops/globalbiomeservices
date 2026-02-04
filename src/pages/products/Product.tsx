import './Product.css';
function handleBlogClick(blogTitle: string) {
  window.open(blogTitle, '_blank')?.focus();
}
export function Product() {
  return (
    <div>
      <div className="MainHeroProduct">
        <div className="heroTextProduct">Blogs</div>
      </div>
      <div className="MainProductPage">
        <div className='row1'>
          <div className="BlogCard" onClick={() => handleBlogClick("/blog1.pdf")}>
          <div>HYDROLOGICAL STUDIES ON BUDAMERU FLOOD USING REMOTE SENSING & GIS</div>
          <img src="/manohar.jpg" alt="Blog 1" />
        </div>
        <div className="BlogCard" onClick={() => handleBlogClick("/blog2.pdf")} >
          <div>SPATIAL ANALYSIS AND PYTHON IMPLEMENTATION OF THE ECKHARDT DIGITAL
          FILTER FOR BASEFLOW SEPARATION IN SARADA BASIN</div>
          <img src="/dhanunjay.jpg" alt="Blog 2"/>
        </div>
        </div>
        <div className='row2'>
          <div className='BlogCard' onClick={() => handleBlogClick("/blog3.pdf")}>
          <div>Rainfall Runoff Modelling using SWAT Modelling and Remote Sensing Applications in Sub Basin of Maha Nadhi River system,India </div>
          <img src="/blog3.jpg" alt="Blog 3"/>
        </div>
        <div className='BlogCard' onClick={() => handleBlogClick("/blog4.pdf")}>
          <div>Multi-Seasonal Crop Monitoring and Yield Estimation Through Machine Learning and Geospatial Analytics for Bareilly District, U.P, India</div>
          <img src="/blog4.jpg" alt="Blog 4"/>
        </div>
        </div>
      </div>
    </div>
  );
}
