const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all">
        <Icon size={24} className="text-cyan-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
    </div>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);
export default FeatureCard;