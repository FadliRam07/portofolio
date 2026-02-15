import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaSearch, FaTimes as FaTimesIcon } from 'react-icons/fa';

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = React.useRef(null);

  // Data untuk pencarian (sesuaikan dengan konten website kamu)
  const searchData = [
    { title: 'Tentang Saya', section: 'about', content: 'Software Engineer dengan pengalaman 3+ tahun, spesialis React, Node.js, Java, Android' },
    { title: 'Keahlian', section: 'skills', content: 'React, Next.js, TypeScript, JavaScript, Java, Android Studio, Firebase, Unity, C#' },
    { title: 'Menjelajahi Nusantara', section: 'projects', content: 'Aplikasi Android Java untuk destinasi wisata Indonesia' },
    { title: 'Real Madrid Official App', section: 'projects', content: 'Aplikasi Android Java untuk fans Real Madrid dengan jadwal pertandingan dan daftar pemain' },
    { title: 'Persebaya Surabaya Official App', section: 'projects', content: 'Aplikasi Android Java untuk fans Persebaya dengan fitur jadwal dan notifikasi' },
    { title: 'Game Board Unity', section: 'projects', content: 'Game 3D interaktif dengan Unity C# dan multiplayer support' },
    { title: 'Pengalaman Kerja', section: 'experience', content: 'Software Engineer, Frontend Developer, Freelance Web Developer' },
    { title: 'Pendidikan', section: 'education', content: 'Sarjana Teknik Informatika, Sertifikasi React, Google UX Design' }
  ];

  // Toggle search
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = searchData.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.content.toLowerCase().includes(query)
    );

    setSearchResults(results.slice(0, 5)); // Maksimal 5 hasil
  };

  // Tutup search saat klik ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Tutup search saat klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isSearchOpen && !e.target.closest('.search-container') && !e.target.closest('.search-results-modal')) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  // Scroll ke section saat klik hasil
  const handleResultClick = (sectionId) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Fadli Ramadhan</div>
      
      <button 
        className="hamburger-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Beranda</a></li>
        <li><a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>Tentang</a></li>
        <li><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Keahlian</a></li>
        <li><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Project</a></li>
        <li><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pengalaman</a></li>
        <li><a href="#education" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pendidikan</a></li>
        <li><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Kontak</a></li>
      </ul>
      
      {/* Kontrol Search & Theme Toggle */}
      <div className="navbar-controls">
        {/* Search Button */}
        <button 
          className="search-btn" 
          onClick={toggleSearch}
          aria-label="Cari di portofolio"
        >
          <FaSearch size={20} />
        </button>
        
        {/* Theme Toggle */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={theme === 'light' ? "Aktifkan mode gelap" : "Aktifkan mode terang"}
        >
          {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
        </button>
      </div>

      {/* Search Input Expanded */}
      {isSearchOpen && (
        <div className="search-expanded-container">
          <div className="search-expanded">
            <FaSearch className="search-icon" size={18} />
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Cari di portofolio (misal: Java, React, Android)..."
              value={searchQuery}
              onChange={handleSearch}
            />
            {searchQuery && (
              <button 
                className="search-clear" 
                onClick={() => {
                  setSearchQuery('');
                  setSearchResults([]);
                  searchInputRef.current?.focus();
                }}
                aria-label="Clear search"
              >
                <FaTimesIcon size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Search Results Modal */}
      {isSearchOpen && searchResults.length > 0 && (
        <div className="search-results-modal-overlay" onClick={() => {
          setIsSearchOpen(false);
          setSearchQuery('');
          setSearchResults([]);
        }}>
          <div 
            className="search-results-modal" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-results-header">
              <h3>Hasil Pencarian ({searchResults.length})</h3>
              <button 
                className="search-results-close" 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                aria-label="Tutup pencarian"
              >
                <FaTimesIcon size={18} />
              </button>
            </div>
            
            <div className="search-results-list">
              {searchResults.map((result, index) => (
                <div 
                  key={index} 
                  className="search-result-item"
                  onClick={() => handleResultClick(result.section)}
                >
                  <div className="search-result-title">{result.title}</div>
                  <div className="search-result-preview">
                    {result.content.split(new RegExp(`(${searchQuery})`, 'gi'))
                      .map((part, i) => 
                        part.toLowerCase() === searchQuery.toLowerCase() 
                          ? <mark key={i}>{part}</mark> 
                          : part
                      )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="search-footer">
              <p>Klik hasil untuk scroll ke section • Tekan <kbd>ESC</kbd> untuk tutup</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;