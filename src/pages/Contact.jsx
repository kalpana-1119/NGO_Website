import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <div className="container section-padding">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Have questions or want to get involved? Reach out to us.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '1.5rem' }}>Get In Touch</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark-blue)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0' }}>Our Address</h4>
                <p style={{ margin: '0', color: 'var(--text-light)' }}>123 Hope Street, CA 90210, USA</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark-blue)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0' }}>Phone Number</h4>
                <p style={{ margin: '0', color: 'var(--text-light)' }}>+1 (555) 123-4567</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary-blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark-blue)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0' }}>Email Address</h4>
                <p style={{ margin: '0', color: 'var(--text-light)' }}>info@ngo.org</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '1.5rem' }}>Send a Message</h2>
            {submitted ? (
              <div style={{ padding: '2rem', background: '#d4edda', color: '#155724', borderRadius: '8px', textAlign: 'center' }}>
                <h3>Message Sent!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input required type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setFormData({...formData, name: e.target.value})} />
                <input required type="email" placeholder="Your Email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setFormData({...formData, email: e.target.value})} />
                <textarea required rows="5" placeholder="Your Message" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Map Placeholder */}
      <div className="container" style={{ padding: '0 2rem 5rem 2rem' }}>
        <div style={{ 
          width: '100%', 
          height: '400px', 
          backgroundColor: '#e9ecef', 
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-light)',
          fontSize: '1.2rem',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)'
        }}>
          <div>
            <MapPin size={48} style={{ margin: '0 auto 1rem auto', display: 'block', color: 'var(--secondary-blue)' }} />
            Interactive Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
