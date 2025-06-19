import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';

// --- TYPES ---
type Project = {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
  videoUrl?: string;
  tech: string[];
};

type Skill = {
  name: string;
  icon: React.ReactNode;
}


// --- COMPONENTS ---
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
         <img
          src={project.imageUrl || 'https://placehold.co/600x400/1f2937/ef4444?text=Project'}
          alt={project.title}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/600x400/1f2937/ef4444?text=Error';
          }}
        />
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
            {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        <div className="card-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="card-button">
              Live Demo
            </a>
          )}
          {project.videoUrl && (
            <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="card-button">
              Watch Demo
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="card-button-secondary">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillCard: React.FC<{skill: Skill}> = ({ skill }) => {
    return (
        <div className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
        </div>
    )
}


// --- Main App Component ---
function App() {
  // --- DATA ---
  // src/App.tsx

  // --- DATA ---
  const projects: Project[] = [
    {
      title: 'DayComp E-commerce',
      description: 'A full-featured e-commerce platform designed for a seamless online shopping experience, from product Browse to checkout.',
      imageUrl: 'https://placehold.co/600x400/374151/f85149?text=DayComp+E-commerce',
      liveUrl: 'https://daycomp.amin-dev.site/',
      sourceUrl: 'https://github.com/Amin12-greexk/daycomp_ecommerce',
      tech: ['Laravel', 'PHP', 'JavaScript']
    },
    {
      title: 'DayComp Warehouse',
      description: 'A comprehensive warehouse management system for inventory tracking, order processing, and logistics management.',
      imageUrl: 'https://placehold.co/600x400/4b5563/f85149?text=DayComp+Warehouse',
      liveUrl: 'https://dcmpwarehouse.amin-dev.site/admin/login',
      sourceUrl: 'https://github.com/Amin12-greexk/Daycomp-Warehouse',
      tech: ['Laravel', 'Blade', 'Bootstrap']
    },
    {
      title: 'DayComp Client Site (Next.js)',
      description: 'A modern, high-performance client-facing website built with Next.js for fast rendering and an excellent user experience.',
      imageUrl: 'https://placehold.co/600x400/6b7280/f85149?text=DayComp+Next.js',
      liveUrl: 'https://day-comp.vercel.app/',
      sourceUrl: 'https://github.com/Amin12-greexk/DayComp',
      tech: ['Next.js', 'React', 'TypeScript']
    },
  ];

  // ... (the rest of your App component remains the same)

  const skills: Skill[] = [
    { 
      name: 'Laravel', 
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Laravel</title><path d="M22.33 13.141a5.42 5.42 0 0 1-5.411-5.418c0-2.98 2.433-5.412 5.41-5.412a5.42 5.42 0 0 1 5.412 5.412 5.42 5.42 0 0 1-5.411 5.418M11.996 23.333a5.416 5.416 0 0 1-5.41-5.415c0-2.98 2.43-5.413 5.41-5.413s5.41 2.433 5.41 5.413a5.416 5.416 0 0 1-5.41 5.415m-10.33-10.192a5.42 5.42 0 0 1-5.417-5.418C-3.75 4.743-1.318 2.31.666 2.31a5.42 5.42 0 0 1 5.412 5.412 5.42 5.42 0 0 1-5.412 5.418m1.803-5.418c0 .668.538 1.206 1.203 1.206.668 0 1.207-.538 1.207-1.206 0-.668-.54-1.207-1.207-1.207-.665 0-1.203.54-1.203 1.207m8.527 10.833c0 .668.542 1.206 1.206 1.206s1.206-.538 1.206-1.206c0-.668-.542-1.207-1.206-1.207s-1.206.54-1.206 1.207m8.53-10.833c0 .668.54 1.206 1.204 1.206.662 0 1.203-.538 1.203-1.206 0-.668-.54-1.207-1.203-1.207-.664 0-1.204.54-1.204 1.207z"/></svg>
    },
    { 
      name: 'PHP', 
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>PHP</title><path d="M12 1.636A10.364 10.364 0 0 0 1.636 12 10.364 10.364 0 0 0 12 22.364 10.364 10.364 0 0 0 22.364 12 10.364 10.364 0 0 0 12 1.636M8.018 17.145H6.182v-4.57h1.836a2.727 2.727 0 1 0 0-5.454H6.182v-1.82h1.836a4.545 4.545 0 1 1 0 9.09zm8.164 0h-1.818v-7.273h1.818v1.818h2.727v-1.818h1.818v7.273h-1.818v-1.818h-2.727v1.818z"/></svg>
    },
    { 
      name: 'Next.js', 
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m-.004 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 11.996 1.5s10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5M8.455 7.5l6.103 9.513h-1.554L7.9 9.803v7.21h-1.54V7.5h1.54zM15.158 17.013h1.54V7.5h-1.54v9.513z"/></svg> 
    },
    { 
      name: 'React', 
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M12 2.668c-5.334 0-9.667 4.334-9.667 9.667s4.333 9.667 9.667 9.667 9.667-4.334 9.667-9.667S17.334 2.668 12 2.668zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.59-8.41c0-1.832 1.487-3.32 3.32-3.32s3.32 1.488 3.32 3.32c0 1.832-1.487 3.32-3.32 3.32a3.322 3.322 0 0 1-3.32-3.32zm6.64 0c0-1.832-1.488-3.32-3.32-3.32v6.64c1.832 0 3.32-1.488 3.32-3.32zm-7.66 3.01c-.34.34-.79.59-1.27.68l.26 1.5c.71-.12 1.39-.44 1.94-.99l-1.07-1.03c.14.07.28.14.42.2zm-2.4-2.1c-.24-.48-.37-.99-.37-1.52s.13-1.04.37-1.52l-1.5-.26c-.12.71-.12 1.43 0 2.14l1.5-.26zm.88-2.61c.48-.34.99-.59 1.52-.68l-.26-1.5c-.71.12-1.39.44-1.94.99l1.03 1.03c-.14-.07-.28-.14-.42-.2zm8.56 5.3c.48.34.99.59 1.52.68l.26-1.5c-.71-.12-1.39-.44-1.94-.99l-1.03 1.03c.14.07.28.14.42.2zM15.34 7.08c.34-.34.79-.59 1.27-.68l-.26-1.5c-.71.12-1.39.44-1.94.99l1.07 1.03c-.14-.07-.28-.14-.42-.2zm2.4 2.1c.24.48.37.99.37 1.52s-.13 1.04-.37 1.52l1.5.26c.12-.71.12-1.43 0-2.14l-1.5.26z"/></svg>
    },
    { 
      name: 'TypeScript', 
      icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TypeScript</title><path d="M0 0h24v24H0V0zm22.5 24H1.5V1.5h21V24zM21 21V3H3v18h18zM12.13 10.94s-1.64-.54-2.85-.62c-1.21-.08-2.26.21-2.85.62-.59.4-.87 1.13-.87 2.01 0 .99.35 1.73 1.05 2.13.7.4 1.84.62 2.85.62s2.15-.22 2.85-.62c.7-.4 1.05-1.13 1.05-2.13 0-.87-.28-1.6-.87-2.01zm-2.86 3.7c-1.8 0-2.49-.6-2.49-1.57 0-.91.68-1.51 2.4-1.51s2.4.6 2.4 1.51c0 .97-.68 1.57-2.31 1.57zm4.26-3.7v-1.8h4.2v1.38h-2.82v1.21h2.45v1.38h-2.45v1.58h2.9v1.38h-4.28V10.94z"/></svg> 
    },
  ];

  // --- STATE AND ANIMATION HOOKS ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // --- RENDER ---
  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ scaleX }} />
      
      <header className="header">
        <nav className="nav container">
          <div className="nav-brand">
            <a href="#">Abdul Wahid Amin</a>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </nav>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero video-background">
          <div className="video-overlay"></div>
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/hero-background.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-content">
            <motion.h1
              className="hero-title-animated"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Abdul Wahid Amin
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              A Full Stack Developer Specializing in Laravel & Next.js.
            </motion.p>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <a href="#projects" className="hero-button">
                View My Work
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        {/* About Section */}
<section id="about" className="about">
  <div className="container">
    <motion.h2 
      className="section-title"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h2>
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="about-image">
        <img src="/me.jpg" alt="Abdul Wahid Amin" />
      </div>
      <div className="about-text">
        <h3>Abdul Wahid Amin</h3>
        <p>
          Sugeng rawuh. Wonten ing jagading pangembang ingkang asring nutul-tempel, kula langkung remen yasa aplikasi saking dhasaripun piyambak. Kula punika Full Stack Developer ingkang damel solusi <em>back-end</em> ingkang sae, kanthi Laravel minangka piranti utami kawula.
        </p>
        <p>
          Sampun kalih warsa dangunipun, padamelan kula sanès namung ngrampungaken tugas, ananging ugi madosi lan ndandosi <em>bug</em> ingkang ruwet. Sapunika, kula saweg nambah kawruh babagan Next.js lan TypeScript, amargi saenipun satunggaling ahli punika gumantung saking pirantinipun. Kula pitados, secangkir kopi lan <code>composer install</code> saged ngrampungaken kathah prakawis.
        </p>
      </div>
      <div className="about-stats">
        <div className="stat-item">
          <span className="stat-number">2+</span>
          <span className="stat-label">Taun Pengalaman</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10+</span>
          <span className="stat-label">Proyek Rampung</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">☕</span>
          <span className="stat-label">Dijiwiti Kopi</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>


        {/* Skills Section */}
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">My Core Technologies</h2>
                 <motion.div 
                    className="skills-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.1 }}
                    variants={{
                        hidden: {},
                        visible: {}
                    }}
                >
                    {skills.map(skill => (
                        <motion.div key={skill.name} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
                            <SkillCard skill={skill} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card-wrapper"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out and say hello!</p>
                <a href="mailto:abdulwahidammin@gmail.com" className="hero-button">
                    Say Hello
                </a>
            </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Abdul Wahid Amin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;