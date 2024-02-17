import './App.css';
import { Navbar } from './components/nav-bar/nav-bar.tsx';
import { Home } from './Pages/home/Home.tsx';
import { Carrers } from './Pages/carrers/carrers.tsx';
import { ContactUs } from './Pages/contact/ContactUs.tsx';
import { Product } from './Pages/products/Product.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Carrers />} />
          <Route path="services" element={<Carrers />} />
          <Route path="products" element={<Product />} />
          <Route path="carrers" element={<Carrers />} />
          <Route path="blog" element={<Product />} />
          <Route path="clients" element={<ContactUs />} />
          <Route path="contact" element={<Product />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
