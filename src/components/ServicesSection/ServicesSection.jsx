import { Cloud, Database, Shield, Zap, BarChart3, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Deploy and scale applications instantly with our global cloud platform. Zero configuration required."
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Enterprise-grade databases with automatic backups, replication, and 99.99% uptime guarantee."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Military-grade encryption, DDoS protection, and compliance with GDPR, HIPAA, and SOC 2."
    },
    {
      icon: Zap,
      title: "Edge Computing",
      description: "Process data at the edge for ultra-low latency. Perfect for real-time applications."
    },
    {
      icon: BarChart3,
      title: "Analytics & Monitoring",
      description: "Real-time insights into your application performance with advanced analytics dashboards."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert support team available round the clock to help you succeed."
    }
  ];

  return (
    <section className="bg-slate-950 px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6 hover:border-cyan-400/50 transition-colors">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="text-sm text-slate-300">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Comprehensive Cloud Solutions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale modern applications on our trusted platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all">
                    <Icon size={28} className="text-cyan-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
