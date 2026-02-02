import './App.css';
import { Navbar, CopyRight } from '@/components';
import {
  Home,
  Careers,
  ContactUs,
  Product,
  About,
  Cloud,
  Teams,
  Enviornment,
  Flood,
  Gis,
  Hydro,
  Infra,
  Renewables,
  Terrain,
  Urban,
  WebGis,
  DataEngg,
  AI,
  Security,
} from '@/pages';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="services/ai" element={<AI />}></Route>
          <Route path="services/dataengineering" element={<DataEngg />}></Route>
          <Route path="services/cloud" element={<Cloud />}></Route>
          <Route path="services/teams" element={<Teams />}></Route>
          <Route path="services/security" element={<Security />}></Route>
          <Route path="services/*" element={<AI />}></Route>

          <Route
            path="services/geo/enviornment"
            element={<Enviornment />}
          ></Route>
          <Route path="services/geo/flood" element={<Flood />}></Route>
          <Route path="services/geo/gis" element={<Gis />}></Route>
          <Route path="services/geo/hydro" element={<Hydro />}></Route>
          <Route path="services/geo/infra" element={<Infra />}></Route>
          <Route
            path="services/geo/renewables"
            element={<Renewables />}
          ></Route>
          <Route path="services/geo/terrain" element={<Terrain />}></Route>
          <Route path="services/geo/urban" element={<Urban />}></Route>
          <Route path="services/geo/webgis" element={<WebGis />}></Route>

          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Product />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
