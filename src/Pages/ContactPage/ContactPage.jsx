import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Check, AlertCircle, Send } from 'lucide-react';
import { useState } from 'react';

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setErrors({});

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:support@novastack.io', label: 'Email', text: 'support@novastack.io' },
    { icon: Phone, href: 'tel:+15551234567', label: 'Phone', text: '+1 (555) 123-4567' },
    { icon: MapPin, href: '#', label: 'Address', text: '123 Tech Avenue, San Francisco, CA' }
  ];

  const socialMedia = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Page Title & Intro */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full mb-8 hover:border-cyan-400/50 transition-colors">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us Today
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed">
            Have questions about NovaStack? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-8">Send us a Message</h2>
              
              {submitted ? (
                // Success State
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <Check size={32} className="text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">Message Sent!</h3>
                  <p className="text-slate-300 mb-4">
                    Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                  </p>
                  <p className="text-slate-400 text-sm">
                    We appreciate your interest in NovaStack!
                  </p>
                </div>
              ) : (
                // Form
                <div className="space-y-5">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500/50 focus:border-red-400'
                          : 'border-slate-700 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/50 focus:border-red-400'
                          : 'border-slate-700 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us how we can help..."
                      rows="6"
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/50 focus:border-red-400'
                          : 'border-slate-700 focus:border-cyan-400'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="text-slate-500 text-sm text-center">
                    All fields marked with <span className="text-red-400">*</span> are required
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-8">Get in Touch</h2>

              {/* Contact Links */}
              <div className="space-y-6 mb-12">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all">
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-100 mb-1">{link.label}</p>
                        <p className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                          {link.text}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-slate-800">
                <h3 className="text-lg font-semibold text-slate-100 mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time Info */}
              <div className="mt-8 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-lg">
                <h4 className="font-semibold text-slate-100 mb-2">Response Time</h4>
                <p className="text-slate-400 text-sm mb-3">
                  Our support team typically responds within 24 hours. For urgent matters, please call us.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Support Available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 blur-3xl"></div>
            
            {/* Border gradient effect */}
            <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700 rounded-2xl px-6 md:px-12 py-12 md:py-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
                Prefer to Explore First?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                Check out our comprehensive documentation or view our services to learn more about what NovaStack offers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300">
                  View Services
                </button>
                <button className="px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300">
                  Read Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;