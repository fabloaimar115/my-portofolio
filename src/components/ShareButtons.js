import React from 'react';

const ShareButtons = () => {
  const portfolioUrl = window.location.href;
  const portfolioTitle = 'Portfolio - Fablo Aimar | Full Stack Developer';
  const portfolioDescription = 'Check out my amazing portfolio showcasing my projects and skills!';

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(portfolioUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(portfolioUrl)}&text=${encodeURIComponent(portfolioTitle)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`${portfolioTitle} - ${portfolioUrl}`)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      alert('✅ Link portfolio berhasil disalin ke clipboard!');
    } catch (err) {
      console.error('Gagal menyalin: ', err);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      {/* Main Share Button */}
      <button
        onClick={copyToClipboard}
        style={{
          background: '#8b5cf6',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '12px 20px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        title="Salin link portfolio"
      >
        📤 Bagikan Portfolio
      </button>

      {/* Social Media Buttons */}
      <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center'
      }}>
        <button
          onClick={shareOnFacebook}
          style={{
            background: '#1877f2',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(24, 119, 242, 0.3)'
          }}
          title="Share di Facebook"
        >
          f
        </button>

        <button
          onClick={shareOnTwitter}
          style={{
            background: '#1da1f2',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(29, 161, 242, 0.3)'
          }}
          title="Share di Twitter"
        >
          𝕏
        </button>

        <button
          onClick={shareOnLinkedIn}
          style={{
            background: '#0077b5',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0, 119, 181, 0.3)'
          }}
          title="Share di LinkedIn"
        >
          in
        </button>

        <button
          onClick={shareOnWhatsApp}
          style={{
            background: '#25d366',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(37, 211, 102, 0.3)'
          }}
          title="Share di WhatsApp"
        >
          📱
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;