import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaShoppingCart, FaChartLine, FaTasks } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Menjelajahi Nusantara',
      description: 'Aplikasi Android dengan menggunakan bahasa pemrograman Java dan dibuat di Android Studio. Aplikasi ini membantu pengguna menjelajahi berbagai destinasi wisata di Indonesia dengan fitur peta interaktif dan informasi lengkap.',
      tech: ['Java', 'Android Studio', 'SQLite', 'Google Maps API'],
      image: '/images/projects/p1.jpeg',
      github: 'https://github.com/FadliRam07/Menjelajahi_nusantara',
      demo: 'https://drive.google.com/file/d/1_DMtNrrtxiA7NfuW2sM3PT5f37r7WcKN/view?usp=drive_link'
    },
    {
      id: 2,
      title: 'Real Madrid Official App',
      description: 'Aplikasi mobile Android untuk fans Real Madrid dengan fitur jadwal pertandingan, daftar pemain, sejarah klub, trofi, dan notifikasi push real-time.',
      tech: ['Java', 'Android Studio', 'Firebase', 'REST API'],
      image: '/images/projects/p3.webp',
      github: 'https://github.com/fadliramadhan/real-madrid-app',
      demo: 'https://drive.google.com/file/d/1Dx6hMt8OZ-91haK8saSyPSh_9hy_R_-G/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'Persebaya Surabaya Official App',
      description: 'Aplikasi mobile Android untuk fans Persebaya Surabaya dengan fitur jadwal pertandingan, daftar pemain, sejarah klub, trofi, dan notifikasi push real-time.',
      tech: ['Java', 'Android Studio', 'Firebase', 'MVP Pattern'],
      image: '/images/projects/p4.png',
      github: 'https://github.com/fadliramadhan/akademi-sepakbola',
      demo: 'https://drive.google.com/file/d/1NXOFENv9BXE4134HWbNPZRxhD3if58SF/view?usp=drive_link'
    },
    {
      id: 4,
      title: 'Game Board Unity - The Pirates Of Battleship',
      description: 'Game board 3D interaktif dengan mekanisme dadu, waypoint system, event reward, dan multiplayer support untuk 4 pemain menggunakan Unity C#.',
      tech: ['Unity', 'C#', 'Photon Unity Networking', 'TextMeshPro'],
      image: '/images/projects/p2.jpeg',
      github: 'https://drive.google.com/drive/folders/1wNdcMo3J70uqn3XThlPHUboYjlUlFGfv?usp=drive_link',
      demo: 'https://github.com/fadliramadhan/dice-adventure/releases'
    },
    {
      id: 5,
      title: 'Music Link',
      description: 'Aplikasi Mobile yang diperuntukkan untuk mendengarkan lagu yang sedang trending',
      tech: ['Java', 'Android Studio', 'MVP Pattern'],
      image: '/images/projects/p5.png',
      github: 'https://drive.google.com/drive/folders/1wNdcMo3J70uqn3XThlPHUboYjlUlFGfv?usp=drive_link',
      demo: 'https://drive.google.com/file/d/1TV2Z_kHQrDclHeRileWJ0UrLO2fVQgiG/view?usp=drive_link'
    },
    {
      id: 6,
      title: 'Website Fanbase Real Madrid',
      description: 'Website diperuntukkan Fans Real Madrid untuk melihat para pemain Real Madrid dari tahun 2017 - 2026, yang memiliki banyak sejarah bagi sepak bola.',
      tech: ['React JS', 'Firebase', 'CSS'],
      image: '/images/projects/p3.webp',
      github: 'https://github.com/FadliRam07/web-madrid',
      demo: 'https://web-madrid-fanbase.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-title">
        <h2>Project Saya</h2>
        <p>Beberapa project menarik yang telah saya kembangkan</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              {/* Ganti icon dengan foto */}
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.project-placeholder').style.display = 'flex';
                }}
              />
              {/* Fallback jika gambar tidak ada */}
              <div className="project-placeholder">
                <div className="project-placeholder-icon">
                  {project.id === 1 && <FaShoppingCart size={60} />}
                  {project.id === 2 && <FaChartLine size={60} />}
                  {project.id === 3 && <FaTasks size={60} />}
                  {project.id === 4 && <FaCode size={60} />}
                </div>
                <div className="project-placeholder-text">
                  {project.id === 1 && "Nusantara"}
                  {project.id === 2 && "Real Madrid"}
                  {project.id === 3 && "Persebaya"}
                  {project.id === 4 && "Battleship"}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;