import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaShoppingCart, FaChartLine, FaTasks, FaGoogleDrive } from 'react-icons/fa';

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
      tech: ['Java', 'Android Studio', 'Firebase'],
      image: '/images/projects/p3.webp',
      github: 'https://github.com/FadliRam07/Football_Soccer_academy',
      demo: 'https://drive.google.com/file/d/1Dx6hMt8OZ-91haK8saSyPSh_9hy_R_-G/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'Persebaya Surabaya Official App',
      description: 'Aplikasi mobile Android untuk fans Persebaya Surabaya dengan fitur jadwal pertandingan, daftar pemain, sejarah klub, trofi, dan notifikasi push real-time.',
      tech: ['Java', 'Android Studio','MVP Pattern'],
      image: '/images/projects/p4.png',
      github: 'https://github.com/FadliRam07/persebaya-official-app',
      demo: 'https://drive.google.com/file/d/1NXOFENv9BXE4134HWbNPZRxhD3if58SF/view?usp=drive_link'
    },
    {
      id: 4,
      title: 'Game Board Unity - The Pirates Of Battleship',
      description: 'Game board 3D interaktif dengan mekanisme dadu, waypoint system, event reward, dan multiplayer support untuk 4 pemain menggunakan Unity C#.',
      tech: ['Unity', 'C#', 'Photon Unity Networking', 'TextMeshPro'],
      image: '/images/projects/p2.jpeg',
      drive: 'https://drive.google.com/drive/folders/1wNdcMo3J70uqn3XThlPHUboYjlUlFGfv?usp=drive_link',
      demo: 'https://drive.google.com/file/d/1XibQ3jD-QXoVfI-ac9eJK8s4QsF5l62m/view?usp=drive_link'
    },
    {
      id: 5,
      title: 'Music Link',
      description: 'Aplikasi Mobile yang diperuntukkan untuk mendengarkan lagu yang sedang trending',
      tech: ['Java', 'Android Studio', 'MVP Pattern'],
      image: '/images/projects/p5.png',
      github: 'https://github.com/FadliRam07/MusicLink',
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

  // Helper function to safely trim URLs
  const safeTrim = (url) => url?.trim() || '#';

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
              <div className="project-placeholder">
                <div className="project-placeholder-icon">
                  {project.id === 1 && <FaShoppingCart size={60} />}
                  {project.id === 2 && <FaChartLine size={60} />}
                  {project.id === 3 && <FaTasks size={60} />}
                  {project.id === 4 && <FaCode size={60} />}
                  {project.id === 5 && <FaMusic size={60} />}
                  {project.id === 6 && <FaFutbol size={60} />}
                </div>
                <div className="project-placeholder-text">
                  {project.title}
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {/* Conditional rendering: Drive button for Unity project, GitHub for others */}
                {project.id === 4 ? (
                  <a 
                    href={safeTrim(project.drive)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link drive-link"
                    aria-label="Download from Google Drive"
                  >
                    <FaGoogleDrive className="mr-2" /> Source Files
                  </a>
                ) : project.github ? (
                  <a 
                    href={safeTrim(project.github)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link github-link"
                    aria-label="View on GitHub"
                  >
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                ) : null}
                
                {project.demo && (
                  <a 
                    href={safeTrim(project.demo)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link demo-link"
                    aria-label="View demo"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Tambahkan icon yang diperlukan
const FaMusic = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
  </svg>
);

const FaFutbol = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
);

export default Projects;