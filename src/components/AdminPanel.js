import React, { useState, useEffect } from 'react';

const AdminPanel = ({ isAuthenticated, onLogout }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [formData, setFormData] = useState({
    name: 'Fablo Aimar',
    title: 'Full Stack Developer',
    description: 'I create beautiful and functional web applications using modern technologies. Passionate about clean code and user experience.',
    email: 'fablo.aimar@example.com',
    phone: '+62 812-3456-7890',
    location: 'Indonesia'
  });

  const [images, setImages] = useState({
    profile: '',
    about: ''
  });

  const [skills, setSkills] = useState([
    { id: 1, name: 'JavaScript', level: 90, icon: '' },
    { id: 2, name: 'React', level: 85, icon: '' },
    { id: 3, name: 'Node.js', level: 80, icon: '' },
    { id: 4, name: 'HTML/CSS', level: 95, icon: '' },
    { id: 5, name: 'Python', level: 75, icon: '' },
    { id: 6, name: 'MongoDB', level: 70, icon: '' },
    { id: 7, name: 'Git', level: 85, icon: '' },
    { id: 8, name: 'TypeScript', level: 70, icon: '' }
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts',
      image: '',
      technologies: ['JavaScript', 'API', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social platform with user authentication and post sharing',
      image: '',
      technologies: ['React Native', 'Express', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ]);

  // Load data dari localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    const savedImages = localStorage.getItem('portfolioImages');
    const savedSkills = localStorage.getItem('portfolioSkills');
    const savedProjects = localStorage.getItem('portfolioProjects');
    
    if (savedData) setFormData(JSON.parse(savedData));
    if (savedImages) setImages(JSON.parse(savedImages));
    if (savedSkills) setSkills(JSON.parse(savedSkills));
    if (savedProjects) setProjects(JSON.parse(savedProjects));
  }, []);

  const saveData = () => {
    localStorage.setItem('portfolioData', JSON.stringify(formData));
    localStorage.setItem('portfolioImages', JSON.stringify(images));
    localStorage.setItem('portfolioSkills', JSON.stringify(skills));
    localStorage.setItem('portfolioProjects', JSON.stringify(projects));
    alert('✅ Semua perubahan berhasil disimpan! Refresh halaman untuk melihat hasilnya.');
    setIsVisible(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle upload gambar
  const handleImageUpload = (e, type, index = null) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'profile' || type === 'about') {
          setImages({ ...images, [type]: reader.result });
        } else if (type === 'skill') {
          const updatedSkills = [...skills];
          updatedSkills[index].icon = reader.result;
          setSkills(updatedSkills);
        } else if (type === 'project') {
          const updatedProjects = [...projects];
          updatedProjects[index].image = reader.result;
          setProjects(updatedProjects);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (type, index = null) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => handleImageUpload(e, type, index);
    fileInput.click();
  };

  // Skills functions
  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = field === 'level' ? parseInt(value) : value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    const newId = Math.max(...skills.map(s => s.id), 0) + 1;
    setSkills([...skills, { id: newId, name: 'Skill Baru', level: 50, icon: '' }]);
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  // Projects functions
  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const handleProjectTechChange = (projectIndex, techIndex, value) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].technologies[techIndex] = value;
    setProjects(updatedProjects);
  };

  const addProjectTech = (projectIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].technologies.push('Tech Baru');
    setProjects(updatedProjects);
  };

  const removeProjectTech = (projectIndex, techIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].technologies = updatedProjects[projectIndex].technologies.filter((_, i) => i !== techIndex);
    setProjects(updatedProjects);
  };

  const addProject = () => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    setProjects([...projects, {
      id: newId,
      title: 'Project Baru',
      description: 'Deskripsi project baru',
      image: '',
      technologies: ['React'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }]);
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  // Jika tidak terautentikasi, jangan tampilkan admin panel
  if (!isAuthenticated) {
    return null;
  }

  const styles = {
    adminToggle: {
      position: 'fixed', top: '20px', right: '20px', background: '#2563eb', color: 'white',
      border: 'none', borderRadius: '50px', padding: '10px 20px', cursor: 'pointer',
      zIndex: 10000, fontSize: '14px', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
    },
    logoutButton: {
      position: 'fixed', top: '20px', right: '180px', background: '#ef4444', color: 'white',
      border: 'none', borderRadius: '50px', padding: '10px 20px', cursor: 'pointer',
      zIndex: 10000, fontSize: '14px', boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)'
    },
    adminPanel: {
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0, 0, 0, 0.8)', zIndex: 9999, display: 'flex',
      justifyContent: 'center', alignItems: 'center'
    },
    adminContent: {
      background: 'white', padding: '2rem', borderRadius: '10px', width: '95%',
      maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto'
    },
    tabs: {
      display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid #e2e8f0',
      paddingBottom: '1rem'
    },
    tab: {
      padding: '0.75rem 1.5rem', border: 'none', borderRadius: '8px', cursor: 'pointer',
      background: 'transparent', fontSize: '0.9rem', fontWeight: '500'
    },
    activeTab: {
      background: '#2563eb', color: 'white'
    },
    formSection: {
      marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '12px'
    },
    sectionTitle: {
      color: '#374151', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '600'
    },
    formGroup: { marginBottom: '1rem' },
    label: { display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#374151' },
    input: {
      width: '100%', padding: '0.75rem', border: '2px solid #e2e8f0', borderRadius: '8px',
      fontSize: '1rem'
    },
    photoUpload: {
      marginBottom: '1.5rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '10px',
      textAlign: 'center'
    },
    photoPreview: {
      width: '150px', height: '150px', border: '2px solid #e2e8f0', borderRadius: '12px',
      margin: '0 auto 1rem', overflow: 'hidden', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: '#f1f5f9'
    },
    projectPhotoPreview: {
      width: '200px', height: '120px', border: '2px solid #e2e8f0', borderRadius: '8px',
      margin: '0 auto 1rem', overflow: 'hidden', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: '#f1f5f9'
    },
    skillIconPreview: {
      width: '50px', height: '50px', border: '2px solid #e2e8f0', borderRadius: '8px',
      overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', 
      background: 'white'
    },
    btnUpload: {
      background: '#10b981', color: 'white', border: 'none', padding: '0.5rem 1rem',
      borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem'
    },
    btnPrimary: {
      background: '#2563eb', color: 'white', border: 'none', padding: '0.75rem 1.5rem',
      borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: '600'
    },
    btnSuccess: {
      background: '#10b981', color: 'white', border: 'none', padding: '0.5rem 1rem',
      borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem'
    },
    btnDanger: {
      background: '#ef4444', color: 'white', border: 'none', padding: '0.5rem 1rem',
      borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem'
    },
    skillItem: {
      display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', 
      padding: '1rem', background: 'white', borderRadius: '10px', border: '1px solid #e2e8f0'
    },
    projectItem: {
      marginBottom: '2rem', padding: '1.5rem', background: 'white', borderRadius: '12px',
      border: '1px solid #e2e8f0'
    },
    techTags: {
      display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem'
    },
    techInput: {
      width: 'auto', flex: '1', minWidth: '120px', padding: '0.5rem',
      border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.9rem'
    },
    grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' },
    actions: {
      display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem',
      paddingTop: '2rem', borderTop: '2px solid #e2e8f0'
    }
  };

  return (
    <>
      <button style={styles.logoutButton} onClick={onLogout}>
        🚪 Logout
      </button>

      <button style={styles.adminToggle} onClick={() => setIsVisible(true)}>
        ⚙️ Kelola Portfolio
      </button>

      {isVisible && (
        <div style={styles.adminPanel}>
          <div style={styles.adminContent}>
            <h2 style={{color: '#2563eb', textAlign: 'center', marginBottom: '1rem'}}>
              🎨 Panel Kelola Portfolio
            </h2>
            
            {/* Navigation Tabs */}
            <div style={styles.tabs}>
              <button 
                style={{...styles.tab, ...(activeTab === 'profile' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('profile')}
              >
                👤 Profil & About
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'skills' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('skills')}
              >
                💪 Skills & Icons
              </button>
              <button 
                style={{...styles.tab, ...(activeTab === 'projects' ? styles.activeTab : {})}}
                onClick={() => setActiveTab('projects')}
              >
                🚀 Projects
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'profile' && (
              <div>
                <div style={styles.formSection}>
                  <h3 style={styles.sectionTitle}>📷 Foto Profil & About</h3>
                  <div style={styles.grid2}>
                    <div style={styles.photoUpload}>
                      <label style={styles.label}>Foto Profil</label>
                      <div style={styles.photoPreview}>
                        {images.profile ? (
                          <img src={images.profile} alt="Preview Profil" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        ) : (
                          <span>Preview Profil</span>
                        )}
                      </div>
                      <button onClick={() => triggerFileInput('profile')} style={styles.btnUpload}>
                        📷 Upload Foto Profil
                      </button>
                    </div>

                    <div style={styles.photoUpload}>
                      <label style={styles.label}>Foto About</label>
                      <div style={styles.photoPreview}>
                        {images.about ? (
                          <img src={images.about} alt="Preview About" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                        ) : (
                          <span>Preview About</span>
                        )}
                      </div>
                      <button onClick={() => triggerFileInput('about')} style={styles.btnUpload}>
                        📷 Upload Foto About
                      </button>
                    </div>
                  </div>
                </div>

                <div style={styles.formSection}>
                  <h3 style={styles.sectionTitle}>📝 Informasi Pribadi</h3>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Nama Lengkap</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={styles.input} />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Profesi</label>
                    <input type="text" name="title" value={formData.title} onChange={handleInputChange} style={styles.input} />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Deskripsi</label>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3" style={styles.input} />
                  </div>
                </div>

                <div style={styles.formSection}>
                  <h3 style={styles.sectionTitle}>📞 Kontak</h3>
                  <div style={styles.grid2}>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={styles.input} />
                    </div>
                    <div style={styles.formGroup}>
                      <label style={styles.label}>Telepon</label>
                      <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} style={styles.input} />
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Lokasi</label>
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} style={styles.input} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div>
                <div style={styles.formSection}>
                  <h3 style={styles.sectionTitle}>💪 Skills & Technologies</h3>
                  {skills.map((skill, index) => (
                    <div key={skill.id} style={styles.skillItem}>
                      <div style={styles.skillIconPreview}>
                        {skill.icon ? (
                          <img src={skill.icon} alt={skill.name} style={{width: '100%', height: '100%', objectFit: 'contain', padding: '5px'}} />
                        ) : (
                          <span>Icon</span>
                        )}
                      </div>
                      
                      <div style={{flex: 1}}>
                        <div style={styles.formGroup}>
                          <label style={styles.label}>Nama Skill</label>
                          <input
                            type="text"
                            value={skill.name}
                            onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                            style={styles.input}
                          />
                        </div>
                        
                        <div style={styles.formGroup}>
                          <label style={styles.label}>Level: {skill.level}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={skill.level}
                            onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                            style={{width: '100%'}}
                          />
                        </div>
                      </div>
                      
                      <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                        <button onClick={() => triggerFileInput('skill', index)} style={styles.btnSuccess}>
                          📷 Icon
                        </button>
                        <button onClick={() => removeSkill(index)} style={styles.btnDanger}>
                          ❌ Hapus
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button onClick={addSkill} style={{...styles.btnPrimary, width: '100%', marginTop: '1rem'}}>
                    ➕ Tambah Skill Baru
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <div style={styles.formSection}>
                  <h3 style={styles.sectionTitle}>🚀 Projects Portfolio</h3>
                  {projects.map((project, index) => (
                    <div key={project.id} style={styles.projectItem}>
                      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                        <h4 style={{color: '#374151', margin: 0}}>🎯 {project.title}</h4>
                        <button onClick={() => removeProject(index)} style={styles.btnDanger}>
                          🗑️ Hapus Project
                        </button>
                      </div>

                      {/* Project Image */}
                      <div style={styles.photoUpload}>
                        <label style={styles.label}>🖼️ Screenshot Project</label>
                        <div style={styles.projectPhotoPreview}>
                          {project.image ? (
                            <img src={project.image} alt="Preview Project" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                          ) : (
                            <span>Screenshot Project</span>
                          )}
                        </div>
                        <button onClick={() => triggerFileInput('project', index)} style={styles.btnUpload}>
                          📷 Upload Screenshot
                        </button>
                      </div>

                      {/* Project Details */}
                      <div style={styles.grid2}>
                        <div style={styles.formGroup}>
                          <label style={styles.label}>📝 Judul Project</label>
                          <input
                            type="text"
                            value={project.title}
                            onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                            style={styles.input}
                          />
                        </div>
                        
                        <div style={styles.formGroup}>
                          <label style={styles.label}>🔗 GitHub URL</label>
                          <input
                            type="text"
                            value={project.github}
                            onChange={(e) => handleProjectChange(index, 'github', e.target.value)}
                            style={styles.input}
                          />
                        </div>
                      </div>

                      <div style={styles.formGroup}>
                        <label style={styles.label}>📄 Deskripsi Project</label>
                        <textarea
                          value={project.description}
                          onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                          rows="3"
                          style={styles.input}
                        />
                      </div>

                      <div style={styles.formGroup}>
                        <label style={styles.label}>🔗 Demo URL</label>
                        <input
                          type="text"
                          value={project.demo}
                          onChange={(e) => handleProjectChange(index, 'demo', e.target.value)}
                          style={styles.input}
                        />
                      </div>

                      <div style={styles.formGroup}>
                        <label style={styles.label}>🛠️ Technologies</label>
                        <div style={styles.techTags}>
                          {project.technologies.map((tech, techIndex) => (
                            <div key={techIndex} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                              <input
                                type="text"
                                value={tech}
                                onChange={(e) => handleProjectTechChange(index, techIndex, e.target.value)}
                                style={styles.techInput}
                              />
                              <button onClick={() => removeProjectTech(index, techIndex)} style={{...styles.btnDanger, padding: '0.3rem 0.6rem'}}>
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                        <button onClick={() => addProjectTech(index)} style={{...styles.btnSuccess, marginTop: '0.5rem'}}>
                          ➕ Tambah Technology
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button onClick={addProject} style={{...styles.btnPrimary, width: '100%'}}>
                    ➕ Tambah Project Baru
                  </button>
                </div>
              </div>
            )}

            {/* Global Actions */}
            <div style={styles.actions}>
              <button onClick={saveData} style={styles.btnPrimary}>
                💾 Simpan Semua Perubahan
              </button>
              <button onClick={() => setIsVisible(false)} style={styles.btnDanger}>
                ✕ Tutup Panel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;