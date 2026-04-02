import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Globe, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      {/* <section className="hero" style={{backgroundImage: "url('/hero-bg.png')"}}>
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Empowering Communities, <br/><span className="highlight">Changing Lives</span></h1>
            <p className="hero-subtitle">
              Join us in our mission to provide sustainable solutions, essential resources, and unwavering hope to those who need it most.
            </p>
            <div className="hero-buttons">
              <Link to="/volunteer" className="btn btn-primary btn-large">Get Involved</Link>
              <Link to="/about" className="btn btn-secondary btn-large hero-btn-secondary">Our Mission</Link>
            </div>
          </div>
        </div>
      </section> */}
{/* SOCIAL BOX */}


      <section 
className="hero" 
style={{backgroundImage: "url('/Desktop.png')"}}
>

<div className="container hero-container">

<div className="hero-content">

<h1 className="hero-title">
Empowering Communities <br/>
<span className="highlight">Changing Lives</span>
</h1>

<p className="hero-subtitle">
Join us in our mission to provide sustainable solutions,
essential resources and hope.
</p>

<div className="hero-buttons">

<Link to="/volunteer" 
className="btn btn-primary btn-large">
Get Involved
</Link>

<Link to="/about" 
className="btn btn-secondary btn-large">
Our Mission
</Link>

</div>

</div>

</div>

</section>

      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-item">🚀 Volunteer with us for our next event! Join our upcoming community drive this weekend.</span>
          <span className="marquee-item">🌍 New sustainability workshops are starting soon. Register today!</span>
          <span className="marquee-item">🤝 Help us reach our goal of 10,000 meals provided this month. Donate or volunteer.</span>
          <span className="marquee-item">🚀 Volunteer with us for our next event! Join our upcoming community drive this weekend.</span>
          <span className="marquee-item">🌍 New sustainability workshops are starting soon. Register today!</span>
          <span className="marquee-item">🤝 Help us reach our goal of 10,000 meals provided this month. Donate or volunteer.</span>
        </div>
      </div>

      {/* Highlights / Mission Section */}
      <section className="highlights section-padding">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">Our Focus Areas</h2>
            <p className="section-subtitle">We are dedicated to creating lasting impact through these core initiatives.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Heart className="feature-icon" size={32} />
              </div>
              <h3>Community Health</h3>
              <p>Ensuring access to basic healthcare, hygiene education, and essential medical supplies for vulnerable populations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Globe className="feature-icon" size={32} />
              </div>
              <h3>Education Access</h3>
              <p>Building schools, providing learning materials, and supporting community educators to foster future generations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Activity className="feature-icon" size={32} />
              </div>
              <h3>Sustainable Living</h3>
              <p>Promoting clean water initiatives, agricultural training, and eco-friendly practices for long-term survival.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Ready to Make a Difference?</h2>
          <p>Your time and skills can transform a community. Join our volunteer network today.</p>
          <Link to="/volunteer" className="btn btn-primary cta-btn">
            Register as Volunteer <ArrowRight size={20} style={{marginLeft: '8px'}} />
          </Link>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="home-social">
        <div className="container center-text">
          <h2>Connect With Us</h2>
          <p>Follow our journey and stay updated.</p>
          <div className="social-links-home">
            <a href="#" className="social-link"><Facebook size={28} /></a>
            <a href="#" className="social-link"><Twitter size={28} /></a>
            <a href="#" className="social-link"><Instagram size={28} /></a>
            <a href="#" className="social-link"><Linkedin size={28} /></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
