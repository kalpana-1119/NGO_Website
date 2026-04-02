import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Intro / Background Section */}
      <section className="about-hero section-padding">
        <div className="container center-text">
          <h1 className="section-title">About HopeReach</h1>
          <p className="about-lead">
            HopeReach was founded in 2010 with a singular mission: to uplift communities in need across the globe. What started as a small grassroots initiative has grown into a widely recognized non-profit organization.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission section-padding">
        <div className="container vision-mission-grid">
          <div className="vm-card">
            <h2>Our Vision</h2>
            <p>A world where every community has access to the resources needed for a healthy, dignified, and prosperous life, regardless of their geographical or economic background.</p>
          </div>
          <div className="vm-card">
            <h2>Our Mission</h2>
            <p>To empower communities by providing essential healthcare, education, and sustainable living resources, fostering resilience and independence for generations to come.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section-padding">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">Dedicated professionals committed to the cause.</p>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar">JS</div>
              <h3>Jane Smith</h3>
              <p>Executive Director</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">JD</div>
              <h3>John Doe</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">AR</div>
              <h3>Alice Rivera</h3>
              <p>Community Outreach Lead</p>
            </div>
            <div className="team-member">
              <div className="team-avatar">MR</div>
              <h3>Mark Ruff</h3>
              <p>Finance & Strategy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
