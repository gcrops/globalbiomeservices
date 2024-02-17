import {
  faGear,
  faGears,
  faCheck,
  faShieldHalved,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faCloudflare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './service.css';

export function Services() {
  return (
    <div className="cardContainer">
      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faGear}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Devops Consulting</div>
        <div className="cardText">
          It is a combination of practices, tools and cultural philosophies that
          improves the ability of an organisation to deliver releases in a much
          faster manner compared to other traditional models.{' '}
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faCloudflare}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Cloud Migration Services</div>
        <div className="cardText">
          Because of proven benefits. Cost Reduction, Scalability, Optimised
          Performance, & Regulatory Compliance are some of the high order
          benefits of migrating to cloud.{' '}
        </div>
      </div>

      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faCheck}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Quality Assurance</div>
        <div className="cardText">
          GBS qa engineers are focused with a goal to help companies deliver
          software with quality and confidence. We understand all software has
          flaws and vulnerabilities.{' '}
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faShieldHalved}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Cloud security & compliance</div>
        <div className="cardText">
          Organizations need cloud security as they move toward their digital
          transformation strategy and incorporate cloud-based tools and services
          as part of their infrastructure.{' '}
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faGears}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Managed Services</div>
        <div className="cardText">
          Our Managed Services help support a more diverse, complex enterprise
          application and technology portfolio, while balancing competing
          business priorities of IT operations and innovation.
        </div>
      </div>
      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faPeopleGroup}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Managed Services</div>
        <div className="cardText">
          Through our vast network of contacts, we have unmatched access to a
          pool of skilled individuals. We use proven and reliable job-related
          assessments to pinpoint candidates’ abilities and fit with your work
          environment.{' '}
        </div>
      </div>
    </div>
  );
}
