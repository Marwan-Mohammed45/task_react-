import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Footer from './Footer';
import Server from './server';
import  AboutSection from './About';
import Portfolio from './Portfolio'
import OurTeam from './Our team'
import Contact from './contact';
import Support from './Support';

const App = () => {
  return (
    // BrowserRouter يلف جميع المكونات
    <BrowserRouter>
      <div className="app-container">
        {/* شريط التنقل */}
        <Nav />

        {/* المحتوى الرئيسي */}
        <div className="main-content">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Services" element={<Server />} />
            <Route path="/About" element={<AboutSection />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Our Team" element={<OurTeam />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Support" element={<Support />} />

          </Routes>
        </div>

        {/* الفوتر */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
