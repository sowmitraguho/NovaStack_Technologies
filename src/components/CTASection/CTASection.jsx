import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CTASection = () => {
  const features = [
    "No credit card required",
    "Free for first 3 months",
    "Instant setup & deployment",
    "24/7 expert support"
  ];

  return (
    <section className="bg-slate-950 px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 blur-3xl"></div>
          
          {/* Border gradient effect */}
          <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl"></div>

          {/* Content */}
          <div className="relative z-10 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700 rounded-2xl px-6 md:px-12 py-12 md:py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Join thousands of developers building the future with NovaStack. Start free today, no credit card needed.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                Get Started Free
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-10 pt-10 border-t border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-4">Trusted by leading companies</p>
              <div className="flex flex-wrap justify-center gap-6">
                {['Stripe', 'Netflix', 'Airbnb', 'Uber'].map((company, index) => (
                  <div key={index} className="text-slate-500 font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;