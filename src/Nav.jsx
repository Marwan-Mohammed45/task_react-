import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // استيراد ملف CSS


const CustomNav = () => {
  return (
    <div className="nav-container">
      {/* شريط التنقل */}
      <Nav fill variant="tabs" defaultActiveKey="/home" className='custom-nav'>
        <Nav.Item>
          <Nav.Link eventKey="Home" href="/Home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="services" href='/Services'>Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about" href='/About'>About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="portfolio" href='/Portfolio'>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="team" href='/Our Team'>Our Team</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact" href='/Contact'>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="support" href='/Support'>Support</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default CustomNav;
