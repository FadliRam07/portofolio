import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="loading-initials">FR</div>
        </div>
        <h2>Fadli Ramadhan</h2>
        <div className="loading-spinner">
          <FaSpinner className="spinner-icon" />
        </div>
        <p>Memuat portofolio...</p>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;