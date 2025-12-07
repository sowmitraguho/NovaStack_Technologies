import NovaStackLogo from "../NovaStackLogo/NovaStackLogo";

const DesktopNav = () => (
  <nav className="hidden md:flex items-center justify-between bg-slate-950 border-b border-slate-800 px-8 py-4 sticky top-0 z-40">
    <NovaStackLogo />
    
    <div className="flex items-center gap-8">
      <a href="/" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
        Home
      </a>
      <a href="services" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
        Services
      </a>
      <a href="about" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
        About
      </a>
      <a href="contact" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
        Contact
      </a>
    </div>

    <div className="flex items-center gap-4">
      <button className="px-6 py-2 text-slate-300 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors text-sm font-medium">
        Sign In
      </button>
      <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all text-sm">
        Get Started
      </button>
    </div>
  </nav>
);
export default DesktopNav;
