import React from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Halo, Saya Fadli Ramadhan Alfarizki</h1>
          <h2>Software Engineer & Web Developer</h2>
          <p>
            Saya adalah seorang developer Pemula yang bersemangat menciptakan
            aplikasi web yang indah, responsif, dan berkinerja tinggi. Saya percaya
            teknologi harus memberikan solusi nyata dan pengalaman pengguna yang luar biasa.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              <FaDownload /> Lihat Project Saya
            </a>
            <a href="#contact" className="btn btn-secondary">
              <FaEnvelope /> Hubungi Saya
            </a>
          </div>
          <div className="social-icons">
            <a href="https://linkedin.com/in/fadliramadhan" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://github.com/fadliramadhan" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-container">
            <img 
              src="/images/profile.jpeg" 
              alt="Fadli Ramadhan - Software Engineer"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;