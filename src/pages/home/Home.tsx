import { Services } from '@/components/services/services.tsx';
import './Home.css';
export function Home() {
  return (
    <div>
      <div className="MainHero">
        <div className="heroText">Global Biomeservices</div>
        <div className="heroSubText">
          Bespoke Agentic AI and Multimodal Models<br></br>built on a foundation
          of world-class Data & Geo Engineering.
        </div>
      </div>
      <div className="content">
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
          <img src="/second.jpg" />
        </div>
        <Services />
      </div>
    </div>
  );
}

export default Home;
