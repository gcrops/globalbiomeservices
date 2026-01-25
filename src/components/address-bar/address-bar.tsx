import './addres-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export function AddressBar() {
  return (
    <div className="address">
      <div className="address-left">
        <div>
          <a
            href="https://maps.google.com/?q=500%20College%20Road%20E%2C%20Suite%20201%2C%20Princeton%20NJ%2008540%20USA"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              size="xl"
              className="address-icon"
            />
            500 College Road E, Suite 201, Princeton NJ 08540 USA
          </a>
        </div>

        <div>
          <a href="mailto:info@globalbiomeservices.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="address-icon"
            />
            info@globalbiomeservices.com
          </a>
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
