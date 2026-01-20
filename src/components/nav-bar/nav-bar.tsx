import { AddressBar } from '@/components/address-bar/address-bar';
import { Link } from 'react-router-dom';
import './nav-bar.css';
export function Navbar() {
  return (
    <div>
      <div>
        <AddressBar />
      </div>
      <div className="NavFlex">
        <img src="/cropxnav.png" alt="logo" className="cropxLogo" />
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
                <a href="/services/devops">Devops</a>
                <a href="/services/cloud">Cloud Migration</a>
                <a href="/services/geo">Geo spatial</a>
                <a href="/services/security">Cloud Security</a>
                <a href="services/managed-services">Managed Services</a>
                <a href="services/teams">Extended Teams</a>
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
