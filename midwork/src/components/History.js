import React from 'react';

const History = () => {
  const cardStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  return (
    <div className="container mt-5" style={{ textAlign: 'center', color: "black", marginLeft: "-500px" }}>
      <h1 className="mb-4">About Us</h1>

      <section style={{ textAlign: 'left', ...cardStyle }}>
        <h2>Club History</h2>
        <p>
          Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a professional football club based in Madrid, Spain. Founded on March 6, 1902, Real Madrid has become one of the most successful and widely supported football clubs in the world.
        </p>
        <p>
          The club has won numerous domestic and international titles, including 34 La Liga titles, 19 Copa del Rey trophies, and a record 13 UEFA Champions League titles.
        </p>
      </section>

      <section style={{ textAlign: 'left', ...cardStyle }}>
        <h2>Club Achievements</h2>
        <p>
          Real Madrid has a rich history of success, with iconic players and managers contributing to its legendary status in the football world. The club's achievements include historic moments, memorable victories, and a legacy that continues to inspire football enthusiasts globally.
        </p>
      </section>

      <section style={{ textAlign: 'left', ...cardStyle }}>
        <h2>Gallery</h2>
        <div style={{ marginTop: '20px', textAlign: 'center', marginLeft:"500px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5mkLW5Ras_RdlqeSAGO1zqTm-NdFfddpwQ&usqp=CAU" alt="Real Madrid Image 1" style={{ width: '100%', height: 'auto', marginBottom: '10px', objectFit: 'cover' }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6J7muN_Xl-8zmATU42GEI-Rt5Ll6d794-A&usqp=CAU" alt="Real Madrid Image 2" style={{ width: '100%', height: 'auto', marginBottom: '10px', objectFit: 'cover' }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_ZzrJGiEnvTTH-ZwgLXVcvL3_2RIvHWGPQ&usqp=CAU" alt="Real Madrid Image 3" style={{ width: '100%', height: 'auto', marginBottom: '10px', objectFit: 'cover' }} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPT3fzDq1XBQZqfc6z4QRzHea-Tv2FJtSuA&usqp=CAU" alt="Real Madrid Image 4" style={{ width: '100%', height: 'auto', marginBottom: '10px', objectFit: 'cover' }} />
        </div>
      </section>
    </div>
  );
};

export default History;
