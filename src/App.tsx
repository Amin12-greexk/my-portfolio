import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- Helper Components ---

/**
 * A reusable project card component with animation.
 * @param {{ project: { title: string, description: string, imageUrl: string, liveUrl?: string, sourceUrl?: string } }} props
 */
type Project = {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <img
        src={project.imageUrl || 'https://placehold.co/600x400/1f2937/ef4444?text=Project'}
        alt={project.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = 'https://placehold.co/600x400/1f2937/ef4444?text=Error';
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 font-medium transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 font-medium transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};


// --- Main App Component ---

function App() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of the first project, highlighting the technologies used and its purpose.",
      imageUrl: "https://placehold.co/600x400/374151/ef4444?text=Project+1",
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of the second project. What problem does it solve? What did you learn?",
      imageUrl: "https://placehold.co/600x400/4b5563/ef4444?text=Project+2",
      liveUrl: "#",
      sourceUrl: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of the third project. Mention any collaborative aspects or unique features.",
      imageUrl: "https://placehold.co/600x400/6b7280/ef4444?text=Project+3",
      liveUrl: "#",
      sourceUrl: "#",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 } // Stagger children animation
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-500">
            <a href="#">Your Name</a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-red-500">About</a>
            <a href="#projects" className="hover:text-red-500">Projects</a>
            <a href="#contact" className="hover:text-red-500">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800"
          >
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-600">About</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-600">Projects</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-red-600">Contact</a>
          </motion.div>
        )}
      </header>

      <main className="container mx-auto px-6 py-12">
        <section id="hero" className="text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
          >
            Hi, I'm [Your Name]
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            A Passionate Front-end Developer Bringing Ideas to Life.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#projects"
            className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 inline-block"
          >
            View My Work
          </motion.a>
        </section>

        <motion.section
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <img src="https://placehold.co/400x400/dc2626/111827?text=Me" alt="Your Name" className="rounded-full shadow-2xl mx-auto"/>
            </div>
            <div className="md:w-2/3 text-lg text-gray-300 space-y-4">
              <p>Hello! I'm a dedicated and results-driven developer based in [Your City]. I have a passion for creating clean, beautiful, and intuitive user interfaces. My journey into web development started a few years ago, and since then, I've been hooked on the blend of creativity and problem-solving it offers.</p>
              <p>I specialize in React and have experience with the broader web ecosystem, including Node.js, and various styling solutions like Tailwind CSS. I'm a quick learner, always eager to pick up new technologies and improve my craft.</p>
              <p>When I'm not coding, I enjoy [Your Hobby 1], [Your Hobby 2], and exploring the latest trends in technology.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gray-800 rounded-lg shadow-xl -mx-6 px-6"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-gray-400 mb-8">I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <a href="mailto:your.email@example.com" className="bg-red-600 text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110 inline-block">Say Hello</a>
          </div>
        </motion.section>
      </main>

      <footer className="text-center py-6 bg-gray-900 mt-12">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
