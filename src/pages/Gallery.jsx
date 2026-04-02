import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Health', 'Education', 'Community'];
  
  const images = [
    { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Charity Work 1', category: 'Health' },
    { src: 'https://images.unsplash.com/photo-1593113580452-f6746ef7e602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Charity Work 2', category: 'Education' },
    { src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Charity Work 3', category: 'Community' },
    { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Charity Work 4', category: 'Education' },
    { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Charity Work 5', category: 'Health' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Charity Work 6', category: 'Community' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <div className="container section-padding">
        <h1 className="section-title">Photo Gallery</h1>
        <p className="section-subtitle">A glimpse into our initiatives and community events.</p>
        
        <div className="gallery-filters">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="gallery-item">
              <div className="gallery-category-badge">{img.category}</div>
              <img src={img.src} alt={img.alt} className="gallery-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
