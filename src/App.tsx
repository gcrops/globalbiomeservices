import './App.css';
import { Navbar, CopyRight } from './components';
import { Home, Carrers, ContactUs, Product, About } from './Pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Carrers />} />
          <Route path="products" element={<Product />} />
          <Route path="carrers" element={<Carrers />} />
          <Route path="blog" element={<Product />} />
          <Route path="clients" element={<ContactUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <CopyRight></CopyRight>
    </div>
  );
}

export default App;
