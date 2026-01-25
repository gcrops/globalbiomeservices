import { AddressBar } from '@/components/address-bar/address-bar';
import { Link } from 'react-router-dom';
import './nav-bar.css';
export function Navbar() {
  return (
    <div className="sticky">
      <div>
        <AddressBar />
      </div>
      <div className="NavFlex">
        <img src="/logo.svg" alt="logo" className="cropxLogo" />
        <div className="ham">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="RightFlex">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <div className="dropdown">
              <div className="dropbtn">
                Services
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdown-content">
                <div className="geodropdown">
                  <div className="geodropdownheader">
                    Geo Spatial Analytics & Consulting
                    <i className="fa fa-caret-right"></i>
                  </div>
                  <div className="geosubdropdowncontent">
                    <Link to="/services/geo/data-processing">Urban Planning & 3D GIS</Link>
                    <Link to="/services/geo/remote-sensing">Infrastructure and road mapping</Link>
                    <Link to="/services/geo/gis">Hydrology, Cachement & Irrigation</Link>
                    <Link to="/services/geo/gis">Flood risk & stormwater Modelling</Link>
                    <Link to="/services/geo/gis">Terrain Analysis & Mapping</Link>
                    <Link to="/services/geo/gis">Enviornment & Green Infrastructure</Link>
                    <Link to="/services/geo/gis">Renewables & Solar Access Assesment</Link>
                    <Link to="/services/geo/gis">GIS data compilation and Standarization</Link>
                    <Link to="/services/geo/gis">Web GIS development</Link>
                  </div>
                </div>
                <Link to="/services/ai">AI & Machine Learning</Link>
                <Link to="/services/dataengineering">Data Engineering</Link>
                <Link to="/services/cloud">Cloud Migration</Link>
                <Link to="/services/security">Cloud Security</Link>
                <Link to="/services/teams">Extended Teams</Link>
              </div>
            </div>
          </div>
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <Link to="/careers">Careers</Link>
          </div>
          <div>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <Link to="/clients">Clients</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
