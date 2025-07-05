import React from 'react';
import { Shield, CheckCircle } from 'lucide-react'; // Importing necessary icons

const CTA = () => {
  return (
    <section className="relative mx-10 py-14 md:py-16 bg-gradient-to-br from-purple-800 via-indigo-900 to-black overflow-hidden isolate rounded-2xl">
      {/* Subtle Background Elements for depth */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
      }}></div>
      <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight drop-shadow-lg"
            style={{ fontFamily: 'Tilt Neon, cursive' }}>
          Ready to Elevate Your Well-being?
        </h2>

        {/* Sub-description */}
        <p className="text-lg md:text-xl text-purple-200 mb-8 leading-relaxed max-w-2xl mx-auto opacity-90"
           style={{ fontFamily: 'Exo 2, sans-serif' }}>
          Join thousands who are transforming their mental health and unlocking their full emotional potential today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="inline-flex items-center justify-center
                             bg-white text-purple-700 px-8 py-3 rounded-full font-bold
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-out
                             text-base tracking-wide group animate-cta-pulse"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}>
            <Shield className="w-4 h-4 mr-2" /> Start Free Trial
          </button>
          <button className="inline-flex items-center justify-center
                             border-2 border-white text-white px-8 py-3 rounded-full font-bold
                             hover:bg-white hover:text-purple-700 transition-all duration-300 ease-out
                             shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base tracking-wide"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}>
            <CheckCircle className="w-4 h-4 mr-2" /> Learn More
          </button>
        </div>

        {/* Benefit Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-purple-300 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-fuchsia-400" />
            <span style={{ fontFamily: 'Exo 2, sans-serif' }}>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-fuchsia-400" />
            <span style={{ fontFamily: 'Exo 2, sans-serif' }}>Risk-free 14-day trial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;