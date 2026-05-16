import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'DevConnector',
    subtitle: 'Real-Time Chat Application',
    description: 'A full-stack real-time chat platform for developers. Features live messaging with Socket.io, JWT auth, profile management, and a responsive dark-themed UI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com',
    live: 'https://devconnector.demo',
    gradient: 'from-indigo-500 to-purple-600',
    emoji: '💬',
  },
  {
    title: 'To-Do-List',
    subtitle: 'Task Manager',
    description: 'A To-Do List application is a simple productivity tool used to manage daily tasks efficiently. Users can add, update, delete, and mark tasks as completed.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com',
    live: 'https://taskflow.demo',
    gradient: 'from-orange-500 to-pink-600',
    emoji: '📋',
  },
];

export default function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative">
      <div className="decorate-line h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="projects-box max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="section-title mt-2 gradient-text">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="projects-para text-gray-400 mt-4 max-w-lg mx-auto">Projects showcasing my skills and passion for building great software</p>
        </div>
        <div ref={ref} className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, i) => (
            <div key={project.title} className="glass-card overflow-hidden group" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
              <div className="project-box p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl">{project.emoji}</span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <span className="text-sm text-indigo-400 font-medium">{project.subtitle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" aria-label="GitHub">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="project-tech px-2.5 py-1 text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
