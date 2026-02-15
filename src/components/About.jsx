import React from 'react';
import { FaUser, FaAward, FaCode, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <h2>Tentang Saya</h2>
        <p>Kenali lebih dalam perjalanan dan passion saya di dunia teknologi</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Saya adalah seorang Software Engineer pemula yang sedang banyak mempelajari
            pengembangan aplikasi web dan mobile. pelajar SMK MEDIKACOM BANDUNG yang
            memiliki ketertarikan kuat pada clean code, user experience, dan teknologi
            terkini.
          </p>
          <p>
            Saya percaya bahwa kode yang baik adalah kode yang mudah dibaca, di-maintain,
            dan memberikan nilai bisnis nyata. Saya selalu berusaha menggabungkan prinsip
            engineering yang solid dengan kreativitas dalam setiap project yang saya kerjakan.
          </p>
          <p>
            Di luar coding, saya menikmati berbagi ilmu melalui blog teknis, berkontribusi
            pada proyek open-source, dan terus belajar hal baru setiap hari. Saya juga
            pecinta kopi dan olahraga di akhir pekan untuk menyegarkan pikiran.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Tahun Pembelajaran</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Project Selesai</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Project Dijual</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Kepuasan Klien</div>
            </div>
          </div>
        </div>
        <div style={{ 
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          padding: '3rem',
          borderRadius: '1rem',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FaUser size={30} />
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>Profil</h3>
              <p style={{ opacity: 0.9 }}>Fadli Ramadhan</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FaAward size={30} />
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>Spesialisasi</h3>
              <p style={{ opacity: 0.9 }}>Web Development & Mobile Apps</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FaCode size={30} />
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>Bahasa Pemrograman</h3>
              <p style={{ opacity: 0.9 }}>JavaScript, TypeScript, Python, Java</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FaHeart size={30} />
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>Hobi</h3>
              <p style={{ opacity: 0.9 }}>Ngoding, Blogging, Olahraga, Kopi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;