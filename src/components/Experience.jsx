import { useScrollReveal } from '../hooks/useScrollReveal';

const timeline = [
  {
    type: 'education',
    title: 'B.E in Cyber Security',
    org: 'Dr Mahalingam College of Engineering and Technology',
    period: '2024 — 2028',
    description: 'Focused on software engineering, data structures, and web technologies. Led the college coding club and participated in hackathons.',
    tags: ['DSA', 'Web Dev', 'Hackathons'],
  },
  {
    type: 'education',
    title: 'Higher Secondary (XII)',
    org: 'Sri Renuga Devi Higher Secondary',
    period: '2022 — 2024',
    description: 'Science stream with Mathematics and Computer Science',
    tags: ['Computer Science'],
  },
];

export default function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative">
      <div className="decorate-line h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="experience-box max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-wider uppercase">Journey</span>
          <h2 className="section-title mt-2 gradient-text">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        <div ref={ref} className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={` relative flex items-start mb-12 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${item.type === 'work' ? 'border-indigo-500 bg-indigo-500/20' : 'border-purple-500 bg-purple-500/20'}`} />
                </div>

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ${isLeft ? '' : 'md:ml-auto'}`}>
                  <div className="experience-container glass-card p-6">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className={`work-education-box text-xs px-2 py-0.5 rounded-full font-medium ${item.type === 'work' ? 'bg-indigo-500/15 text-indigo-400' : 'bg-purple-500/15 text-purple-400'}`}>
                        {item.type === 'work' ? '💼 Work' : '🎓 Education'}
                      </span>
                      <span className="text-xs text-gray-500 font-mono">{item.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-indigo-400 font-medium mb-2">{item.org}</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.description}</p>
                    <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                      {item.tags.map(tag => (
                        <span key={tag} className="exp-skill-box px-2 py-0.5 text-[10px] font-medium text-gray-400 bg-white/5 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
