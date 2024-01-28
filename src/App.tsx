import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cloud from "./Pages/services/Cloud.tsx";
import Analytics from "./Pages/services/Analytics.tsx";
import Consulting from "./Pages/services/Consulting.tsx";
import Home from "./Pages/Home.tsx";
import "./App.css";
import Carousel from "./Carousal.tsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </BrowserRouter>

      <div className="flex-container">
        <Carousel />
      </div>
      <div className="card">
        Extended teams GBS is committed to building and maintaining exceptional
        relationships with our clients and candidates. We have successfully
        helped many companies identify, interview and on-board talented
        professionals at all levels. We have strategy-insight driven methods to
        source professionals for the entire gamut of IT including excellently
        fitting Cloud Engineers, Project Managers, Business Analysts,
        Infrastructure Engineers and brilliant Techies for all verticals. We
        have Passionate and genuinely experienced software professionals with
        very high skill sets and competencies to take up any given tasks. GBS
        prioritizes on genuineness of our resources and provide them with equal
        opportunity to learn, grow and succeed For Employers We provide the
        right skills at the right price, right when you need it. Finding the
        right staff for your company is an exhaustive process. Once we
        understand your needs, we will provide you with carefully screened job
        candidates. Our supreme knowledge of the technology marketplace allows
        us to access the very best and brightest in the industry. We will
        provide you with top quality aspirants, tailored for your company needs
        and environment, allowing you to interview a select candidate and bring
        them on-board.We are provide resource to work onsite and remotely We
        recruit for your needs Our recruiting process is designed to find
        associates who can add business value in your organization from day one.
        Through our vast network of contacts, we have unmatched access to a pool
        of skilled individuals. We use proven and reliable job-related
        assessments to pinpoint candidates’ abilities and fit with your work
        environment. And, we work to build an in-depth understanding of your
        objectives to effectively match our associates to your needs.
      </div>
    </>
  );
}

export default App;
