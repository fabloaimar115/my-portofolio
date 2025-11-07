import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Password yang bisa Anda ganti (simpan di environment variables untuk production)
    const correctPassword = 'admin123'; // Ganti dengan password yang Anda inginkan
    
    if (password === correctPassword) {
      localStorage.setItem('portfolioAuthenticated', 'true');
      onLogin(true);
      setShowLogin(false);
      setPassword('');
    } else {
      alert('❌ Password salah! Silakan coba lagi.');
      setPassword('');
    }
  };

  return (
    <>
      {/* Tombol Login */}
      <button 
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '10px 20px',
          cursor: 'pointer',
          zIndex: 10000,
          fontSize: '14px',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
        }}
        onClick={() => setShowLogin(true)}
      >
        🔑 Login Admin
      </button>

      {/* Modal Login */}
      {showLogin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 10001,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            width: '90%',
            maxWidth: '400px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#2563eb', marginBottom: '1rem' }}>
              🔒 Admin Login
            </h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
              Masukkan password untuk mengedit portfolio
            </p>
            
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password admin"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  marginBottom: '1.5rem'
                }}
                required
              />
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button 
                  type="submit"
                  style={{
                    background: '#2563eb',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  🚀 Login
                </button>
                <button 
                  type="button"
                  onClick={() => setShowLogin(false)}
                  style={{
                    background: '#6b7280',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  ✕ Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;