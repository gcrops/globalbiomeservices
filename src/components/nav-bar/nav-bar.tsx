import cropxLogo from '../assets/cropxnav.png';
import {Link} from 'react-router-dom';
import './nav-bar.css';
import { AddressBar } from '../address-bar/address-bar.tsx';
export function Navbar() {
  return (
    <div>
      <div>
        <AddressBar />
      </div>
      <div className="NavFlex">
        <img src={cropxLogo} alt="logo" className="cropxLogo" />
        <div className="ham">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="RightFlex">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/services">Services</Link></div>
          <div><Link to="/products">Products</Link></div>
          <div><Link to="/carrers">Carrers</Link></div>
          <div><Link to="/blog">Blog</Link></div>
          <div><Link to="/clients">Clients</Link></div>
          <div><Link to="/contact">Contact</Link></div>
        </div>
      </div>
    </div>
  );
}
