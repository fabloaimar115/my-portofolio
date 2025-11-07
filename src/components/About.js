import React from 'react';

const About = () => {
  // Load gambar dari localStorage
  const portfolioImages = JSON.parse(localStorage.getItem('portfolioImages')) || {};

  const getAboutPhoto = () => {
    return portfolioImages.about || "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop";
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with 3+ years of experience 
              creating web applications. I love turning complex problems into 
              simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src={getAboutPhoto()} 
              alt="About" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;