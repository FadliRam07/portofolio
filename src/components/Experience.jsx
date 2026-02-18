import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      date: '2025 - Sekarang',
      title: 'KETUA OSIS',
      company: 'SMK MEDIKACOM BANDUNG',
      description: 'Memipin Sebuah Organisasi resmi di sekolah dan memiliki anggota lebih dari 40 anggota'
    },
    {
      id: 2,
      date: '2024 - Sekarang',
      title: 'Software Engineer',
      company: 'SMK MEDIKACOM BANDUNG',
      description: 'Mengembangkan aplikasi web enterprise menggunakan React, Node.js, dan TypeScript. Memimpin tim kecil untuk delivery project tepat waktu dengan kualitas tinggi.'
    },
    {
      id: 3,
      date: '2021 - 2024',
      title: 'Sekolah  Menengah',
      company: 'SMP NEGERI 42 BANDUNG',
      description: 'Pembelajaran menengah yang berfokus pada dasar ilmu pendidikan seperti IPA, IPS, dan Olahraga'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="section-title">
        <h2>Pengalaman Pendidikan</h2>
        <p>Perjalanan profesional saya di Pendidikan Indonesia</p>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;