import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import ShareButtons from './components/ShareButtons';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('portfolioAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const handleLogout = () => {
    localStorage.removeItem('portfolioAuthenticated');
    setIsAuthenticated(false);
    alert('✅ Anda telah logout dari admin panel.');
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
      <AdminPanel isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <ShareButtons />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;