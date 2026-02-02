import { Services } from '@/components/services/services.tsx';
import './Home.css';
export function Home() {
  return (
    <div>
      <div className="MainHero">
        <div className="heroText">Global Biomeservices</div>
        <div className="heroSubText">Bring Data to Life</div>
      </div>
      <div className="content">
        <div className="Horizontal">
          <img src="/geospatial.jpeg" />
          <div className="horiText">
            <div className="horiTextHeader">
              <h2>Geospatial at GBS</h2>
            </div>
            <strong>At Global Biomeservices</strong>,Our geospatial capabilities
            focus on transforming location intelligence into real-world impact.
            We enable advanced solutions across satellite imagery, remote
            sensing, GIS, and spatial analytics to support applications in smart
            cities, climate monitoring, infrastructure planning, mobility, and
            national security. By combining deep domain expertise with
            cutting-edge technologies such as GeoAI, Digital Twins, and big data
            platforms, we empower organizations to model the physical world,
            uncover hidden patterns, and make faster, more informed decisions in
            an increasingly connected and data-driven environment.
          </div>
        </div>

        <div className="Horizontal">
          <div className="horiText">
            <div className="horiTextHeader">
              <h2>AI & ML</h2>
            </div>
            <strong>At Global Biomeservices</strong>, we harness the
            transformative power of artificial intelligence and machine learning
            to revolutionize geospatial analytics, enabling organizations to
            extract deeper insights from spatial data. Our AI-driven solutions
            automate complex processes such as satellite image classification,
            predictive terrain modeling, and real-time environmental monitoring,
            allowing for faster and more accurate decision-making in
            applications like urban planning, disaster response, and sustainable
            resource management.
          </div>
          <img src="/aiml.jpeg" />
        </div>

        <div className="Horizontal">
          <img src="/dataengg.jpeg" />
          <div className="horiText">
            <div className="horiTextHeader">
              <h2>Data Engineering</h2>
            </div>
            <strong>At Global Biomeservices</strong>, we specialize in data
            engineering solutions tailored for geospatial applications, ensuring
            the seamless collection, processing, and integration of vast spatial
            datasets from diverse sources like satellites, drones, and IoT
            sensors. Our expertise encompasses building scalable data pipelines,
            implementing ETL processes for transforming raw geospatial data into
            structured formats, and leveraging cloud-native architectures to
            handle big data volumes efficiently.
          </div>
        </div>

        <div className="Horizontal">
          <div className="horiText">
            <div className="horiTextHeader">
              <h2>Team at GBS</h2>
            </div>
            <strong>At Extended Teams GBS</strong>, our mission is to drive
            global innovation by bridging the gap between visionary
            organizations and world-class talent. We are dedicated to promoting
            research and development in frontier technologies, including{' '}
            <strong>
              Space-Tech, Quantum Computing, Big Data Technologies, AI, IoT, and
              Digital Twin solutions
            </strong>
            . Through strategy-led sourcing and deep industry insight, we
            empower our clients to build the future by connecting them with the
            specialized expertise needed to excel in a rapidly evolving digital
            landscape.
          </div>
          <img src="/spacex.jpg" />
        </div>
        <Services />
      </div>
    </div>
  );
}

export default Home;
