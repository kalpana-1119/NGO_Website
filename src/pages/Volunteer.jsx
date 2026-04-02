import React, { useState } from 'react';

const Volunteer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', skills: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Form submission simulation
  };

  return (
    <div className="page-container">
      <div className="container section-padding" style={{ maxWidth: '600px' }}>
        <h1 className="section-title">Join as a Volunteer</h1>
        <p className="section-subtitle">Become a part of our community and help us make a real difference.</p>
        
        {submitted ? (
          <div style={{ padding: '2rem', background: '#d4edda', color: '#155724', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Thank you for registering!</h3>
            <p>We will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name *</label>
              <input required type="text" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address *</label>
              <input required type="email" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone Number</label>
              <input type="tel" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Your Skills/Interests</label>
              <textarea rows="4" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} onChange={e => setFormData({...formData, skills: e.target.value})}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Submit Registration</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Volunteer;
