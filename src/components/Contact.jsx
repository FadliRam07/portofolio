import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess(false);

  // Validasi client-side
  if (!formData.name.trim()) {
    setError('Nama wajib diisi');
    setLoading(false);
    return;
  }

  if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    setError('Email tidak valid');
    setLoading(false);
    return;
  }

  if (!formData.message.trim()) {
    setError('Pesan wajib diisi');
    setLoading(false);
    return;
  }

  try {
    // Entry ID dari Google Form kamu
    const ENTRY_NAME = '416164176';       // Nama Pengirim
    const ENTRY_EMAIL = '1004940803';     // Tujuan Pengiriman Pesan
    const ENTRY_MESSAGE = '1707633427';   // Apa yang ingin ditanyakan?

    // Form Response URL
    const formResponseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSePJzUwdP8zeKIJOz9XHDwQKmlAvkD44ICuS6DY01bSQQYa1A/formResponse';

    // Submit ke Google Form
    await fetch(formResponseUrl, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'omit',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        [`entry.${ENTRY_NAME}`]: formData.name,
        [`entry.${ENTRY_EMAIL}`]: formData.email,
        [`entry.${ENTRY_MESSAGE}`]: formData.message,
        'fvv': '1',
        'pageHistory': '0',
        'submissionTimestamp': Date.now().toString()
      })
    });

    // Google Forms selalu return 200 untuk no-cors
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSuccess(false), 5000);
    
  } catch (err) {
    console.error('Error:', err);
    setError('Gagal mengirim pesan. Silakan coba lagi.');
  } finally {
    setLoading(false);
  }
};

  return (
    <section id="contact" className="section">
      <div className="section-title">
        <h2>Hubungi Saya</h2>
        <p>Mari berkolaborasi atau sekadar ngobrol tentang teknologi</p>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-text">
              <h3>Email</h3>
              <p>fadli.ramadhan.alfarizki@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-text">
              <h3>WhatsApp</h3>
              <p>+62 812-2152-2051</p>
            </div>
          </div>
          
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-text">
              <h3>Lokasi</h3>
              <p>Bandung, Indonesia</p>
            </div>
          </div>
          
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div className="contact-text">
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/Fadli Ramadhan Alfarizki</p>
            </div>
          </div>
          
          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <div className="contact-text">
              <h3>GitHub</h3>
              <p>github.com/fadliram07</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Kirim Pesan</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Masukkan nama Anda"
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Masukkan email Anda"
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Pesan *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tulis pesan Anda di sini..."
                disabled={loading}
                rows="5"
              ></textarea>
            </div>
            
            {error && (
              <div style={{ 
                color: '#ef4444', 
                backgroundColor: '#fef2f2',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                border: '1px solid #fecaca'
              }}>
                <strong>❌ Error:</strong> {error}
              </div>
            )}
            
            {success && (
              <div style={{ 
                color: '#10b981', 
                backgroundColor: '#ecfdf5',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginBottom: '1rem',
                border: '1px solid #a7f3d0'
              }}>
                <strong>✅ Sukses!</strong> Pesan Anda berhasil terkirim. Terima kasih!
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
            
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-secondary)', 
              marginTop: '1rem',
              textAlign: 'center'
            }}>
              Pesan Anda akan langsung tersimpan di Google Sheets.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;