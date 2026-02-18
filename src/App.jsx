import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Loading from './components/Loading';

// ✅ Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// ✅ Main App Content (inside AuthProvider)
function AppContent() {
  const { currentUser, logout } = useAuth();
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLogout = async () => {
    if (window.confirm('Yakin ingin keluar?')) {
      try {
        await logout();
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  };

  return (
    <div className="app">
      {/* Navbar hanya muncul jika sudah login */}
      {currentUser && (
        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          onLogout={handleLogout}
          currentUser={currentUser}
        />
      )}
      
      <Routes>
        {/* Route Login */}
        <Route 
          path="/login" 
          element={
            currentUser ? <Navigate to="/" replace /> : <Login />
          } 
        />
        
        {/* Route Utama (Protected) */}
        <Route 
          path="/*" 
          element={
            <ProtectedRoute>
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
                <Footer />
              </>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}

// ✅ Root App Component
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;