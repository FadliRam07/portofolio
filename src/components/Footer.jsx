import React from 'react';
// ✅ Hapus FaTwitter dari import karena tidak dipakai
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Portofolio Fadli Ramadhan</div>
        <div className="footer-links">
          <a href="#home" className="footer-link">Beranda</a>
          <a href="#about" className="footer-link">Tentang</a>
          <a href="#skills" className="footer-link">Keahlian</a>
          <a href="#projects" className="footer-link">Project</a>
          <a href="#contact" className="footer-link">Kontak</a>
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com/in/fadli-ramadhan07" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/fadliram07" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://instagram.com/fadrmdhn07" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          {/*  Jika ingin tambah Twitter, uncomment baris bawah dan tambahkan FaTwitter di import */}
          {/* 
          <a href="https://twitter.com/akun-anda" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a> 
          */}
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fadli Ramadhan. Semua hak dilindungi.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: '0.8' }}>
            Dibuat dengan menggunakan React.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;