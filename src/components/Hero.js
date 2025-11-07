import React from 'react';

const Hero = () => {
  // Load data dari localStorage
  const portfolioData = JSON.parse(localStorage.getItem('portfolioData')) || {
    name: 'Fablo Aimar',
    title: 'Full Stack Developer',
    description: 'I create beautiful and functional web applications using modern technologies. Passionate about clean code and user experience.'
  };

  // Load gambar dari localStorage
  const portfolioImages = JSON.parse(localStorage.getItem('portfolioImages')) || {};

  const getProfilePhoto = () => {
    return portfolioImages.profile || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face";
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{portfolioData.name}</span>
        </h1>
        <h2 className="hero-subtitle">{portfolioData.title}</h2>
        <p className="hero-description">
          {portfolioData.description}
        </p>
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-image">
          <img 
            src={getProfilePhoto()} 
            alt={portfolioData.name} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;