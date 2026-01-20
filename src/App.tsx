import './App.css';
import { Navbar, CopyRight } from '@/components';
import {
  Home,
  Careers,
  ContactUs,
  Product,
  About,
  Clients,
  Devops,
  Cloud,
  Geo,
  Managedservices,
  Teams,
} from '@/Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="services/devops" element={<Devops />}></Route>
          <Route path="services/cloud" element={<Cloud />}></Route>
          <Route path="services/geo" element={<Geo />}></Route>
          <Route path="services/managed" element={<Managedservices />}></Route>
          <Route path="services/teams" element={<Teams />}></Route>
          <Route path="services/*" element={<Devops />}></Route>

          <Route path="products" element={<Product />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Product />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
