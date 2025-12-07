import { Linkedin, Twitter, Mail } from 'lucide-react';
const TeamMemberCard = ({ name, role, bio, initials, color }) => (
  <div className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
    {/* Avatar */}
    <div className={`h-48 bg-gradient-to-br ${color} flex items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
      <span className="text-5xl font-bold text-white/80 relative z-10">{initials}</span>
    </div>
    
    {/* Content */}
    <div className="p-6">
      <h3 className="text-lg font-semibold text-slate-100 mb-1">{name}</h3>
      <p className="text-cyan-400 text-sm font-medium mb-3">{role}</p>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{bio}</p>
      
      {/* Social Links */}
      <div className="flex gap-2">
        <button className="p-2 bg-slate-700/50 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-all text-slate-400">
          <Linkedin size={16} />
        </button>
        <button className="p-2 bg-slate-700/50 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-all text-slate-400">
          <Twitter size={16} />
        </button>
        <button className="p-2 bg-slate-700/50 hover:bg-cyan-400/20 hover:text-cyan-400 rounded-lg transition-all text-slate-400">
          <Mail size={16} />
        </button>
      </div>
    </div>
  </div>
);
export default TeamMemberCard;