import './addres-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
export function AddressBar() {
  return (
    <div className="address">
      <div className="address-left">
        <div>
          <FontAwesomeIcon
            icon={faLocationDot}
            size="xl"
            className="address-icon"
          />
          81 Big Oak Road, STE # 134 Morrisville, Philadelphia 19067 USA
        </div>

        <div>
          <FontAwesomeIcon icon={faPhone} size="xl" className="address-icon" />
          (111)-111-1111
        </div>

        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xl"
            className="address-icon"
          />
          info@globalbiomeservices.com
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faFacebookF}
          size="xl"
          className="address-icon"
        />
        <FontAwesomeIcon icon={faTwitter} size="xl" className="address-icon" />
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size="xl"
          className="address-icon"
        />
      </div>
    </div>
  );
}
