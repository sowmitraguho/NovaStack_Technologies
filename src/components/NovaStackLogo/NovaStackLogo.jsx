 const NovaStackLogo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg transform rotate-45"></div>
      <div className="absolute inset-1 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-lg transform rotate-45"></div>
      <div className="absolute inset-2 bg-black rounded-lg transform rotate-45 flex items-center justify-center">
        <span className="text-cyan-400 font-bold text-xs transform -rotate-45">NS</span>
      </div>
    </div>
    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
      NovaStack
    </span>
  </div>
);
export default NovaStackLogo;