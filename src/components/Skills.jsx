import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaTools } from 'react-icons/fa';

function Skills() {
  const skills = {
    frontend: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    backend: [ 'Python', 'Firebase'],
    database: [ 'MySQL', 'PHPMyAdmin',],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma',],
    mobile: ['React Native', 'Flutter (Basic)', 'Android Studio', ],
    lainnya: ['Microsoft Excel', 'Canva', 'Microsoft Word', 'Editing Grafis']
  };

  return (
    <section id="skills" className="section">
      <div className="section-title">
        <h2>Keahlian Saya</h2>
        <p>Teknologi dan tools yang saya kuasai dalam pengembangan software</p>
      </div>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><FaReact /> Frontend Development</h3>
          <div className="skills-list">
            {skills.frontend.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3><FaNodeJs /> Backend Development</h3>
          <div className="skills-list">
            {skills.backend.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3><FaDatabase /> Database & ORM</h3>
          <div className="skills-list">
            {skills.database.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3><FaTools /> Tools & Platforms</h3>
          <div className="skills-list">
            {skills.tools.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3><FaMobileAlt /> Mobile Development</h3>
          <div className="skills-list">
            {skills.mobile.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3><FaMobileAlt /> Lain-lain</h3>
          <div className="skills-list">
            {skills.lainnya.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;