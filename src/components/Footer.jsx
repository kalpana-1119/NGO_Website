import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            {/* <img src="/logo.png" alt="NGO Logo" className="logo-image" /> */}
            <span className="logo-text white-text">NGO</span>
          </div>
          <p className="footer-desc">Empowering communities and building hope through sustainable initiatives and dedicated volunteer work.</p>
          <div className="social-links">
            <a href="#" className="social-icon"><Facebook size={20} /></a>
            <a href="#" className="social-icon"><Twitter size={20} /></a>
            <a href="#" className="social-icon"><Instagram size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/works">Our Projects</Link></li>
            <li><Link to="/volunteer">Join as Volunteer</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><MapPin size={18} /> 123 Hope Street, CA 90210</li>
            <li><Phone size={18} /> +1 (555) 123-4567</li>
            <li><Mail size={18} /> info@ngo.org</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NGO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
