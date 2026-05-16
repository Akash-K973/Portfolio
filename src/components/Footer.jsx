export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span className="gradient-text">&lt;</span>
              <span className="text-white">Akash</span>
              <span className="gradient-text"> /&gt;</span>
            </span>
          </div>

          <p className="text-sm text-gray-500">
            © {year} Akash Dev. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-sm text-gray-500">
            Built with
            <span className="text-red-400 mx-1 animate-pulse">❤</span>
            using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
