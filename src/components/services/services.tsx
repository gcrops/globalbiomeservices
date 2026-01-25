import {
  faGlobe,
  faShieldHalved,
  faPeopleGroup,
  faProjectDiagram,
  faBrain,
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
          icon={faGlobe}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Geo spatial</div>
        <div className="cardText">
          GBS qa engineers are focused with a goal to help companies deliver
          software with quality and confidence. We understand all software has
          flaws and vulnerabilities.{' '}
        </div>
      </div>

      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faBrain}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">AI & Machine Learning</div>
        <div className="cardText">
          We bridge the gap between complex data and actionable intelligence.
          Our team builds the Data Pipelines and GeoData frameworks necessary to
          power custom Large Multimodal Models (LMMs).
        </div>
      </div>

      <div className="card">
        <FontAwesomeIcon
          size="2xl"
          icon={faProjectDiagram}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Data Engineering</div>
        <div className="cardText">
          We specialize in Data Engineering and Data Pipeline development,
          integrating advanced GeoData processing to turn complex spatial
          information into streamlined, actionable insights
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
          icon={faPeopleGroup}
          className="cardImage"
          color="#142945"
        />
        <div className="cardHeading">Extended Teams</div>
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
