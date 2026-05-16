import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
  {
    name: 'React.js',
    level: 80,
    color: 'from-cyan-400 to-blue-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
    ),
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    level: 88,
    color: 'from-green-400 to-emerald-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l0 10 10 5 10-5 0-10L12 2zM12 4.2l7.5 3.8L12 11.8 4.5 8 12 4.2zM4 9.5l7 3.5v7.5l-7-3.5V9.5zm9 11v-7.5l7-3.5v7.5l-7 3.5z" />
      </svg>
    ),
    category: 'Backend',
  },
  {
    name: 'MongoDB',
    level: 85,
    color: 'from-green-500 to-lime-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15V7h2v10h-2z" />
      </svg>
    ),
    category: 'Database',
  },
  {
    name: 'Express.js',
    level: 87,
    color: 'from-gray-300 to-gray-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2l-8 4v12l8 4 8-4V6l-8-4zm6 14.5l-6 3-6-3V7.5l6-3 6 3v9z" />
      </svg>
    ),
    category: 'Backend',
  },
  {
    name: 'JavaScript',
    level: 93,
    color: 'from-yellow-400 to-amber-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.15" />
        <text x="12" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">JS</text>
      </svg>
    ),
    category: 'Language',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    color: 'from-cyan-400 to-teal-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.44 10.9 14.67 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.56 7.1 14.33 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.44 16.9 9.67 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.56 13.1 9.33 12 7 12z" />
      </svg>
    ),
    category: 'Styling',
  },
  {
    name: 'Socket.io',
    level: 75,
    color: 'from-white to-gray-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6l-3 6h6l-3-6z" />
        <path d="M12 18l3-6H9l3 6z" opacity="0.5" />
      </svg>
    ),
    category: 'Real-time',
  },
];

export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="decorate-line h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="skills-box max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">Skills & Tools</span>
          <h2 className="section-title mt-2 gradient-text">My Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
          <p className="skills-para text-gray-400 mt-4 max-w-lg mx-auto">
            Technologies I work with daily to build modern, scalable web applications
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass-card p-6 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Hover glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />

              <div className="skill-box relative">
                {/* Category badge */}
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  {skill.category}
                </span>

                {/* Icon + Name */}
                <div className="flex items-center gap-3 mt-3 mb-4">
                  <div className={`text-transparent bg-gradient-to-br ${skill.color} bg-clip-text`}>
                    <div className={`bg-gradient-to-br ${skill.color} bg-clip-text`} style={{ color: 'transparent' }}>
                      {skill.icon}
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${i * 100 + 300}ms` }}
                  />
                </div>
                <span className="text-xs text-gray-500 mt-1.5 block text-right">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
