import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaGoogle, FaLock, FaSpinner } from 'react-icons/fa';
import './Login.css';

function Login() {
  const { loginWithGoogle, currentUser, loading } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ✅ Redirect otomatis jika sudah login
  useEffect(() => {
    if (!loading && currentUser) {
      navigate('/', { replace: true });
    }
  }, [currentUser, loading, navigate]);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    try {
      await loginWithGoogle();
      // Redirect akan ditangani oleh useEffect di atas
    } catch (err) {
      console.error('Login error:', err);
      setError('Gagal login. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Tampilkan loading jika auth masih initializing
  if (loading) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-logo">
            <div className="logo-initials">FR</div>
          </div>
          <FaSpinner className="spinner" />
          <p>Memeriksa sesi...</p>
        </div>
      </div>
    );
  }

  // ✅ Jika sudah login, tampilkan loading sebentar sebelum redirect
  if (currentUser) {
    return (
      <div className="login-container">
        <div className="login-card">
          <FaSpinner className="spinner" />
          <p>Mengalihkan ke beranda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <div className="logo-initials">FR</div>
          </div>
          <h1>Fadli Ramadhan</h1>
          <p>Silakan login untuk melihat portofolio lengkap</p>
        </div>
        
        <div className="login-divider">
          <span>atau</span>
        </div>
        
        <button 
          className="google-btn" 
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <FaSpinner className="spinner" />
              <span>Memproses...</span>
            </>
          ) : (
            <>
              <FaGoogle />
              <span>Login dengan Google</span>
            </>
          )}
        </button>
        
        {error && (
          <div className="login-error">
            <p>{error}</p>
          </div>
        )}
        
        <div className="login-footer">
          <p>
            <FaLock /> Data login aman dan tidak disimpan
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="login-bg login-bg-1"></div>
      <div className="login-bg login-bg-2"></div>
      <div className="login-bg login-bg-3"></div>
    </div>
  );
}

export default Login;