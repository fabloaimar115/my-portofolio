import React from 'react';

const Skills = () => {
  // Load skills dari localStorage
  const skills = JSON.parse(localStorage.getItem('portfolioSkills')) || [
    { name: 'JavaScript', level: 90, icon: '' },
    { name: 'React', level: 85, icon: '' },
    { name: 'Node.js', level: 80, icon: '' },
    { name: 'HTML/CSS', level: 95, icon: '' },
    { name: 'Python', level: 75, icon: '' },
    { name: 'MongoDB', level: 70, icon: '' },
    { name: 'Git', level: 85, icon: '' },
    { name: 'TypeScript', level: 70, icon: '' }
  ];

  // Default icons untuk skills populer
  const defaultIcons = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  };

  const getSkillIcon = (skill) => {
    if (skill.icon) return skill.icon;
    return defaultIcons[skill.name] || '';
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <div className="skill-title">
                  {getSkillIcon(skill) && (
                    <img 
                      src={getSkillIcon(skill)} 
                      alt={skill.name}
                      className="skill-icon"
                    />
                  )}
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;