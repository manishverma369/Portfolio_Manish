import React, { useState, useEffect } from 'react';
import { Code, Database, Brain, Mail, Linkedin, Github, ExternalLink, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'C++', level: 90, category: 'Programming' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'DSA', level: 88, category: 'Core CS' },
    { name: 'OOPS', level: 85, category: 'Core CS' },
    { name: 'DBMS', level: 80, category: 'Core CS' },
    { name: 'Computer Networks', level: 75, category: 'Core CS' },
    { name: 'System Design', level: 70, category: 'Core CS' },
    { name: 'Web Development', level: 82, category: 'Development' },
    { name: 'AI/ML', level: 78, category: 'Development' },
  ];

  const projects = [
    {
      title: 'AI/ML Based Project',
      description: 'Machine learning project implementing advanced algorithms for real-world problem solving. Learned from CampusX curriculum.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
      github: '#',
      live: '#',
      category: 'ML'
    },
    {
      title: 'Web Development Project',
      description: 'Full-stack web application with modern tech stack, featuring responsive design and robust backend architecture.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
      category: 'Web'
    }
  ];

  const achievements = [
    '200+ DSA Problems Solved',
    'MAIT Delhi - CSE 2026',
    'CampusX Certified',
    'Strong Core CS Fundamentals'
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              &lt;Developer/&gt;
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-left py-2 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6 inline-block">
            <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
              CSE Student • MAIT Delhi • 2026 Batch
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Building Tomorrow's
            <br />
            Solutions Today
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about <span className="text-cyan-400 font-semibold">Problem Solving</span> • 
            <span className="text-blue-400 font-semibold"> Data Structures & Algorithms</span> • 
            <span className="text-purple-400 font-semibold"> Machine Learning</span>
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center mt-12">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Github size={28} />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
  <div className="space-y-6">
    <p className="text-lg text-slate-300 leading-relaxed">
      I'm a <span className="text-cyan-400 font-semibold">B.Tech student in Electronics & Communication Engineering</span> at 
      <span className="text-cyan-400 font-semibold"> MAIT Delhi</span>, graduating in 2026 with a 
      <span className="text-yellow-400 font-semibold"> CGPA of 8.2</span>. My journey in tech has been driven by a 
      relentless passion for solving complex problems and building scalable, innovative solutions.
    </p>
    
    <p className="text-lg text-slate-300 leading-relaxed">
      With <span className="text-cyan-400 font-semibold">300+ DSA problems</span> solved on LeetCode and 
      <span className="text-purple-400 font-semibold"> AIR 222 in CodeClash NOSD 2025</span>, I've built a rock-solid 
      foundation in algorithmic thinking. Currently pursuing <span className="text-blue-400 font-semibold">Amazon ML School</span>, 
      I'm deepening my expertise in Machine Learning and AI systems.
    </p>

    <p className="text-lg text-slate-300 leading-relaxed">
      I specialize in <span className="text-purple-400 font-semibold">System Design (HLD/LLD)</span>, 
      <span className="text-green-400 font-semibold"> Full-Stack Development</span>, and cutting-edge 
      <span className="text-pink-400 font-semibold"> AI/ML technologies</span> including Generative AI, LLMs, and Agentic AI. 
      As a <span className="text-orange-400 font-semibold">state-level Mental Mathematics Champion</span>, I bring 
      exceptional analytical and problem-solving abilities to every project.
    </p>
  </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Achievements</h3>
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Programming', 'Core CS', 'Development'].map((category) => (
              <div key={category} className="space-y-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  {category === 'Programming' && <Code size={24} />}
                  {category === 'Core CS' && <Database size={24} />}
                  {category === 'Development' && <Brain size={24} />}
                  {category}
                </h3>
                
                {skills.filter(skill => skill.category === category).map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-semibold">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-slate-800/30 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.category === 'ML' 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:manishv3rm9@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              <Mail size={24} />
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/manishverma3/"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>

          <div className="pt-12 border-t border-slate-800">
            <p className="text-slate-400">
              Built with <span className="text-red-400">♥</span> using React & Tailwind CSS
            </p>
            <p className="text-slate-500 mt-2">
              © 2026 • Designed & Developed with passion
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;