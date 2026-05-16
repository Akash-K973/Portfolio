import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  const highlights = [
    { icon: '🚀', label: 'Projects Completed', value: '2+' },
    { icon: '💻', label: 'Technologies', value: '10+' },
    { icon: '☕', label: 'Cups of Coffee', value: '∞' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="about-title text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">About Me</span>
          <h2 className="section-title mt-2 gradient-text">Who I Am</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>
        <div
          ref={ref}
          className={`about-box  grid lg:grid-cols-2 gap-12 transition-all duration-1000${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Left — About card */}
          <div className="about-box1 glass-card p-8 relative overflow-hidden">
            {/* Decorative corner gradient */}
            <div className="mx-auto absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate about building <span className="gradient-text">impactful</span> web apps
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m a dedicated MERN Stack Developer who loves transforming complex problems into elegant, 
                user-friendly solutions. With expertise in <span className="text-indigo-300">MongoDB</span>,{' '}
                <span className="text-indigo-300">Express.js</span>, <span className="text-indigo-300">React.js</span>, 
                and <span className="text-indigo-300">Node.js</span>, I build end-to-end applications that are 
                performant, scalable, and beautiful.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                From crafting RESTful APIs and real-time Socket.io integrations to designing responsive UIs 
                with modern tooling — I enjoy every layer of the stack. Currently exploring Artificial Intelligence
                and cloud deployment with AWS.
              </p>

              {/* Tags */}
              <div className="tagabout-box flex flex-wrap gap-2">
                {['Problem Solver', 'Team Player', 'Clean Code', 'Continuous Learner'].map(tag => (
                  <span
                    key={tag}
                    className="tagsabout-box px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="icon-about glass-card p-6 text-center  group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-2xl font-bold text-white block">{item.value}</span>
                <span className="text-sm text-gray-400 mt-1 block">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
