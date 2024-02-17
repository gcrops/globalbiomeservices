import { Services } from '../../components/services/services.tsx';
import './Home.css';
export function Home() {
  return (
    <div>
      <div className="MainHero">
        <div className="heroText">Global Biomeservices</div>
      </div>
      <div className="content">
        <div className="Horizontal">
          <div className="horiText">
            <div className="horiTextHeader">
              <h2>Team at GBS</h2>
            </div>
            Extended teams GBS is committed to building and maintaining
            exceptional relationships with our clients and candidates. We have
            successfully helped many companies identify, interview and on-board
            talented professionals at all levels. We have strategy-insight
            driven methods to source professionals for the entire gamut of IT
            including excellently fitting Cloud Engineers, Project Managers,
            Business Analysts, Infrastructure Engineers and brilliant Techies
            for all verticals. We have Passionate and genuinely experienced
            software professionals with very high skill sets and competencies to
            take up any given tasks.
          </div>
          <img
            src="https://cropx.com/wp-content/uploads/2022/12/iStock-1372936676.jpg"
            alt=""
          />
        </div>

        <Services />
      </div>
    </div>
  );
}

export default Home;
