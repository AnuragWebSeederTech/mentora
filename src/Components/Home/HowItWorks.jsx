import React from 'react';
import { Users, BookOpen, Heart, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create an account and set your preferences. Get personalized recommendations.",
      icon: <Users className="w-10 h-10 text-white" />
    },
    {
      step: "02",
      title: "Choose Your Path",
      description: "Find a psychologist for online sessions. Take psychological tests. Explore courses & self-help materials.",
      icon: <BookOpen className="w-10 h-10 text-white" />
    },
    {
      step: "03",
      title: "Take Action",
      description: "Book a consultation or start a course. Track your emotions with a mood journal. Practice relaxation techniques.",
      icon: <Heart className="w-10 h-10 text-white" />
    },
    {
      step: "04",
      title: "See the Results",
      description: "Improve emotional resilience. Monitor progress & stay balanced. Join the MindfulMood community for support.",
      icon: <Zap className="w-10 h-10 text-white" />
    }
  ];

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-fuchsia-50">
      {/* Subtle background gradients/blobs */}
      <div className="absolute -top-1/4 -right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-72 h-72 md:w-96 md:h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ fontFamily: 'Tilt Neon, cursive' }}>
            Your Journey, Step-by-Step
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Unveiling a clear and transformative path to holistic well-being. See how our process guides you at every turn.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Main vertical line for the timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-fuchsia-400 rounded-full z-0 animate-draw-line hidden md:block"></div>
          {/* Mobile vertical line */}
          <div className="absolute left-6 md:hidden h-full w-1 bg-gradient-to-b from-purple-400 to-fuchsia-400 rounded-full z-0 animate-draw-line"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center w-full my-8 md:my-12">
              {/* Central Icon Bubble for Desktop */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
                             w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full
                             flex items-center justify-center shadow-lg border-4 border-white
                             group-hover:scale-110 transition-transform duration-300 ease-out hidden md:flex">
                {step.icon}
                {/* Step Number on Icon for Desktop */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-white rounded-full shadow-md z-20">
                  <span className="text-sm font-bold text-purple-700" style={{ fontFamily: 'Exo 2, sans-serif' }}>{step.step}</span>
                </div>
              </div>

              {/* Central Icon Bubble for Mobile */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10
                             w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-full
                             flex items-center justify-center shadow-lg border-4 border-white
                             group-hover:scale-110 transition-transform duration-300 ease-out md:hidden">
                {step.icon}
                {/* Step Number on Icon for Mobile */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-1.5 py-0.5 bg-white rounded-full shadow-md z-20">
                  <span className="text-xs font-bold text-purple-700" style={{ fontFamily: 'Exo 2, sans-serif' }}>{step.step}</span>
                </div>
              </div>

              {/* Step Content Box - Alternating Sides for Desktop, always right for Mobile */}
              <div
                className={`flex-1 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 bg-white
                           transform transition-all duration-700 ease-out group
                           ${index % 2 === 0 ? 'md:ml-0 md:mr-[calc(50%+4rem)] md:text-right' : 'md:mr-0 md:ml-[calc(50%+4rem)] md:text-left'}
                           ml-20 text-left`}
                
                style={{
                  // Add a pseudo-element for the angled pointer
                  position: 'relative',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '0',
                    height: '0',
                    borderStyle: 'solid',
                  },
                  // Desktop specific styles for the pointer
                  '@media (min-width: 768px)': { // md breakpoint
                    '&:before': {
                      ...(index % 2 === 0 ? {
                        borderWidth: '10px 0 10px 10px',
                        borderColor: 'transparent transparent transparent #f9fafb', // Adjust to match bg-white
                        right: '-9px', // Position on the right
                      } : {
                        borderWidth: '10px 10px 10px 0',
                        borderColor: 'transparent #f9fafb transparent transparent',
                        left: '-9px', // Position on the left
                      }),
                    },
                  },
                  // Mobile specific styles for the pointer
                  '@media (max-width: 767px)': { // Before md breakpoint
                    '&:before': {
                      borderWidth: '10px 10px 10px 0',
                      borderColor: 'transparent #f9fafb transparent transparent',
                      left: '-9px', // Always on the left for mobile
                    },
                  },
                }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3 tracking-wide" style={{ fontFamily: 'Tilt Neon, cursive' }}>{step.title}</h3>
                <p className="text-sm md:text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>{step.description}</p>
              </div>

              {/* SVG Path for the curved line connector (Desktop only) */}
              <svg
                className={`absolute top-1/2 transform -translate-y-1/2 z-0 pointer-events-none hidden md:block`}
                style={{
                  width: 'calc(50% - 4rem)', // Width from icon center to box edge
                  height: '100px', // Adjusted height to accommodate vertical curve
                  [index % 2 === 0 ? 'right' : 'left']: 'calc(50% + 4rem)' // Position relative to icon center
                }}
                viewBox="0 0 200 100" preserveAspectRatio="none"
              >
                {index % 2 === 0 ? ( // Right side box
                  <path
                    d="M0 50 H100 Q120 50 120 25 V0"
                    stroke="url(#gradientPathConnector)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    className="animate-draw-path" style={{ strokeDasharray: '200', strokeDashoffset: '200' }}
                  />
                ) : ( // Left side box
                  <path
                    d="M200 50 H100 Q80 50 80 25 V0"
                    stroke="url(#gradientPathConnector)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    className="animate-draw-path" style={{ strokeDasharray: '200', strokeDashoffset: '200' }}
                  />
                )}
                <defs>
                  <linearGradient id="gradientPathConnector" x1="0" y1="50" x2="200" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7"/> {/* purple-500 */}
                    <stop offset="1" stopColor="#EC4899"/> {/* fuchsia-500 */}
                  </linearGradient>
                </defs>
              </svg>

              {/* SVG Path for the straight line connector (Mobile only) */}
              <svg
                className={`absolute top-1/2 transform -translate-y-1/2 z-0 pointer-events-none md:hidden`}
                style={{
                  width: 'calc(100% - 7rem)', // Width from mobile icon center to box edge
                  height: '2px', // Thin line
                  left: '3.5rem' // Positioned from the left edge (half of icon width + some spacing)
                }}
                viewBox="0 0 100 2" preserveAspectRatio="none"
              >
                <path
                  d="M0 1 H100"
                  stroke="url(#gradientPathConnectorMobile)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                  className="animate-draw-path" style={{ strokeDasharray: '100', strokeDashoffset: '100' }}
                />
                <defs>
                  <linearGradient id="gradientPathConnectorMobile" x1="0" y1="1" x2="100" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7"/>
                    <stop offset="1" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ))}
        </div>

        {/* Engaging Call to Action Button */}
        <div className="text-center mt-16 md:mt-20">
          <button className="inline-flex items-center px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold rounded-full
                               shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-400 ease-out
                               text-base md:text-lg tracking-wide group animate-pulse-light"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}>
            Start Your Empowering Journey
            <svg className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;