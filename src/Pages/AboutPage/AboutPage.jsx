import { Users, Zap, Eye, Target, ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';

// Team Member Card Component


// About Page
const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alexandra Chen",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in cloud infrastructure and a passion for simplifying complex systems.",
      initials: "AC",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder",
      bio: "Expert in distributed systems and cloud architecture. Previously at major tech companies.",
      initials: "MJ",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Sophia Williams",
      role: "VP of Product",
      bio: "Product strategist focused on user experience and customer success. Drives innovation at NovaStack.",
      initials: "SW",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "David Kumar",
      role: "Head of Engineering",
      bio: "Full-stack engineer building reliable, scalable systems. Leads our talented engineering team.",
      initials: "DK",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Emma Rodriguez",
      role: "Director of DevOps",
      bio: "Infrastructure expert ensuring 99.99% uptime. 10+ years securing mission-critical systems.",
      initials: "ER",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "James Liu",
      role: "Head of Customer Success",
      bio: "Dedicated to customer satisfaction and success. Builds lasting relationships with enterprise clients.",
      initials: "JL",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Page Title & Intro */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-8 hover:border-cyan-400/50 transition-colors">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">About Us</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Reimagining Cloud Infrastructure
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed">
            We're on a mission to make advanced cloud infrastructure accessible to everyone. Founded by engineers, for engineers, NovaStack combines powerful technology with exceptional simplicity.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-100">Our Story</h2>
              
              <p className="text-slate-400 leading-relaxed">
                NovaStack was born from frustration. In 2019, our founders were building a global application and found themselves wrestling with complex cloud infrastructure. Despite the abundance of tools, nothing felt intuitive or developer-friendly.
              </p>
              
              <p className="text-slate-400 leading-relaxed">
                That's when we decided to build the cloud platform we wished existed. We started with a simple vision: powerful cloud infrastructure shouldn't require a PhD. Today, we're proud to serve thousands of developers and companies worldwide.
              </p>
              
              <p className="text-slate-400 leading-relaxed">
                What started as a side project has grown into a thriving platform trusted by startups and enterprises alike. We've invested heavily in our infrastructure, team, and community to deliver the best possible experience.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Founded in 2019 by engineers who understand your pain</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Backed by leading venture capital firms</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Growing team of 100+ talented engineers and designers</span>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl aspect-square flex items-center justify-center border border-slate-700">
                <Users size={120} className="text-slate-600" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Our Purpose</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Guided by our mission and vision to shape the future of cloud computing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg flex items-center justify-center">
                  <Target size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Our Mission</h3>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                To democratize access to world-class cloud infrastructure, empowering developers and businesses of all sizes to build, deploy, and scale their applications with confidence and ease.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Make complex technology simple and accessible</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Enable innovation through powerful developer tools</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Build trust through reliability and transparency</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-400/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg flex items-center justify-center">
                  <Eye size={24} className="text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Our Vision</h3>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                A world where infrastructure is invisible—where developers focus on building amazing products without worrying about the underlying complexity of cloud computing.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Lead the industry in innovation and reliability</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Foster a thriving global developer community</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span>Shape the future of cloud infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Meet Our Team</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Talented individuals united by a shared passion for building exceptional cloud infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>

          {/* Team Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-800">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100+</div>
              <p className="text-slate-400">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-slate-400">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
              <p className="text-slate-400">Offices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">1000s</div>
              <p className="text-slate-400">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 blur-3xl"></div>
            
            {/* Border gradient effect */}
            <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700 rounded-2xl px-6 md:px-12 py-12 md:py-16">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                  Ready to Experience NovaStack?
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                  Explore our powerful features and see why thousands of developers trust NovaStack for their infrastructure needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                  View Our Services
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;