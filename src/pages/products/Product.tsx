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
    </div>
  );
}
