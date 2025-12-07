import { Star } from 'lucide-react';
import { useState } from 'react';
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CTO at TechFlow",
      avatar: "SM",
      rating: 5,
      text: "NovaStack has transformed how we deploy applications. The simplicity combined with power is unmatched. Our deployment time went from hours to minutes."
    },
    {
      name: "James Chen",
      role: "Founder at DataCore",
      avatar: "JC",
      rating: 5,
      text: "The support team is incredible. We had a critical issue at 2 AM and they resolved it in 15 minutes. Best investment we've made for our infrastructure."
    },
    {
      name: "Emma Rodriguez",
      role: "DevOps Lead at CloudFirst",
      avatar: "ER",
      rating: 5,
      text: "The API documentation is comprehensive and the developer experience is exceptional. Our team was productive immediately. Highly recommended!"
    },
    {
      name: "Michael Zhang",
      role: "VP Engineering at FastScale",
      avatar: "MZ",
      rating: 5,
      text: "We scaled from 1M to 100M requests per month without any headaches. NovaStack's auto-scaling is truly reliable and cost-effective."
    }
  ];

  return (
    <section className="bg-slate-950 px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-6 hover:border-cyan-400/50 transition-colors">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="text-sm text-slate-300">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See what industry leaders say about NovaStack
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="flex-1">
              <div className="flex gap-2 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-slate-100 mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-slate-950 font-semibold text-sm">{testimonials[activeIndex].avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">{testimonials[activeIndex].name}</p>
                  <p className="text-slate-400 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex flex-wrap justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/50'
                  : 'bg-slate-800 text-slate-300 hover:border hover:border-cyan-400/50'
              }`}
            >
              {testimonial.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;