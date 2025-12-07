import { ArrowRight, Zap, Code, Cpu } from 'lucide-react';
import AnimatedBackground from '../AnimatedBackground/AnimatedBackground';
import FeatureCard from '../FeatureCard/FeatureCard';


const HeroSection = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full hover:border-cyan-400/50 transition-colors">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">Welcome to the future of cloud technology</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Build Tomorrow's
              </span>
              <br />
              <span className="text-slate-100">Infrastructure Today</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              Empower your applications with NovaStack. Advanced cloud solutions designed for developers who demand excellence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2 group">
              Start Building
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300">
              View Documentation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 md:pt-16">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">99.9%</div>
              <p className="text-sm text-slate-400">Uptime SLA</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">10M+</div>
              <p className="text-sm text-slate-400">API Requests/Day</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-purple-400">50+</div>
              <p className="text-sm text-slate-400">Global Regions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-4 md:px-8 py-16 md:py-24 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Powerful Features for Modern Development
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale world-class applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Sub-millisecond response times with global CDN and intelligent routing"
            />
            <FeatureCard
              icon={Code}
              title="Developer First"
              description="Intuitive APIs, comprehensive SDKs, and extensive documentation"
            />
            <FeatureCard
              icon={Cpu}
              title="Auto Scaling"
              description="Automatically handle traffic spikes with intelligent resource management"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;