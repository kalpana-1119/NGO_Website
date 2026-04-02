import React from 'react';
import './Works.css';
import { Target } from 'lucide-react';

const Works = () => {
  const projects = [
    { title: "Clean Water Initiative", desc: "Built 50+ wells in rural areas severely lacking fresh water access. Our initiative also provided sanitation training.", impact: "10,000+ people served" },
    { title: "School Building Program", desc: "Constructed 5 primary schools in underserved regions, complete with modern learning materials and libraries.", impact: "2,000+ children educated" },
    { title: "Medical Camps", desc: "Organized monthly free medical checkups providing basic diagnosis, medicine, and nutritional supplements.", impact: "5,000+ patients treated" },
    { title: "Green Farming", desc: "Introduced sustainable farming methods and drought-resistant seeds to local farmers.", impact: "500+ local families fed" }
  ];

  return (
    <div className="works-page">
      <div className="container section-padding">
        <h1 className="section-title">Our Works</h1>
        <p className="section-subtitle">Discover the impactful projects we've undertaken over the years.</p>
        
        <div className="works-grid">
          {projects.map((proj, idx) => (
            <div className="work-card" key={idx}>
              <div className="work-image-placeholder"></div>
              <div className="work-content">
                <h3 className="work-title">{proj.title}</h3>
                <p className="work-desc">{proj.desc}</p>
                <div className="work-impact">
                  <Target size={20} />
                  Impact: {proj.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
