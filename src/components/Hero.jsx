import { useEffect, useState } from 'react';

const roles = [
  'MERN Stack Developer',
  'Full-Stack Engineer',
  'React.js Specialist',
  'Node.js Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[128px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="badge-box inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="green-dot relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="available text-sm text-indigo-300 font-medium">Available for opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="myname text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          Hi, I&apos;m{' '}
          <span className="gradient-text animate-gradient">Akash</span>
        </h1>

        {/* Typewriter role */}
        <div className="typewriter-box flex items-center justify-center gap-1 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6 min-h-[2.5rem] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <span className="font-mono text-indigo-400">&gt;</span>
          <span>{text}</span>
          <span className="w-0.5 h-7 bg-indigo-400 ml-0.5" style={{ animation: 'typewriter-blink 1s step-end infinite' }} />
        </div>

        {/* Tagline */}
        <p className="tagline-box text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          I craft <span className="text-white font-medium">performant</span>, <span className="text-white font-medium">scalable</span>, and{' '}
          <span className="text-white font-medium">beautiful</span> web applications using the MERN stack.
          Passionate about turning ideas into production-ready digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="cta-box flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="glow-btn">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            View Projects
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="glow-btn-outline">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-box mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="inline-flex flex-col items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll Down</span>
            <div className="w-5 h-8 border-2 border-current rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
