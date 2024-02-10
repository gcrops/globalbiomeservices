import cropxLogo from '../assets/cropxnav.png';
import './nav-bar.css';

export function Navbar() {
  return (
    <div className="NavFlex">
      <img src={cropxLogo} alt="logo" className="cropxLogo" />
      <div className='ham'>
      <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="RightFlex">
        <div>Analytics</div>
        <div>Consulting</div>
        <div>Cloud</div>
      </div>
    </div>
  );
}
