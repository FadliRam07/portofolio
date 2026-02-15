import React from 'react';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';

function Education() {
  const education = [
    {
      id: 1,
      degree: 'Rekayasa Perangkat Lunak',
      institution: 'SMK MEDIKACOM BANDUNG',
      date: '2024 - 2027',
      description: 'Sekolah Kejuruan dengan berfokus pada pengembangan Game dan Website'
    },
    {
      id: 2,
      degree: 'Sertifikasi Coding Level Advance by Educourse.id',
      institution: 'Educourse.id',
      date: '2025',
      description: 'Menyelesaikan program sertifikasi resmi Coding Developer dari Educourse dengan nilai A(86)'
    },
    {
      id: 3,
      degree: 'Sertifikat Latihan Dasar Kepemimpinan Siswa',
      institution: 'Depo Pendidikan Bela Negara',
      date: 'Lembang - 2025',
      description: 'Mengusai dasar Kepemimpinan sebuah Organisasi dengan bekerja dalam tim, dengan diselenggarakan oleh pihak DODIK resmi dari Pemerintahan Republik Indonesia'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="section-title">
        <h2>Pendidikan & Sertifikasi</h2>
        <p>Riwayat pendidikan formal dan sertifikasi profesional saya</p>
      </div>
      <div className="education-grid">
        {education.map(edu => (
          <div key={edu.id} className="education-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              {edu.id === 1 && <FaGraduationCap size={30} color="var(--primary-color)" />}
              {edu.id === 2 && <FaCertificate size={30} color="var(--primary-color)" />}
              {edu.id === 3 && <FaAward size={30} color="var(--primary-color)" />}
              <h3>{edu.institution}</h3>
            </div>
            <div className="degree">{edu.degree}</div>
            <div className="date">{edu.date}</div>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;