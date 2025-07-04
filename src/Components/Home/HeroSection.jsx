import React from 'react';

const HeroSection = () => {
  return (
    // Main section container with subtle background gradient and overflow hidden for animations
    <section className="relative overflow-hidden min-h-[95vh] flex items-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-lime-50 font-exo-2">
      {/* Animated Abstract Swirl/Flow SVG in Background - More prominent and dynamic */}
      <svg className="absolute inset-0 w-full h-full z-10 opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.8"/> {/* Emerald-200 */}
            <stop offset="100%" stopColor="#d9f99d" stopOpacity="0"/> {/* Lime-200 */}
          </radialGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bef264" stopOpacity="0.6"/> {/* Lime-300 */}
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0"/> {/* Emerald-300 */}
          </radialGradient>
        </defs>
        {/* Larger, more varied circles with enhanced animation */}
        <circle cx="20" cy="20" r="15" fill="url(#grad1)" className="animate-swirl-1"/>
        <circle cx="80" cy="50" r="20" fill="url(#grad2)" className="animate-swirl-2"/>
        <circle cx="50" cy="80" r="18" fill="url(#grad1)" className="animate-swirl-3"/>
        <circle cx="10" cy="60" r="12" fill="url(#grad2)" className="animate-swirl-4"/>
        <circle cx="90" cy="10" r="10" fill="url(#grad1)" className="animate-swirl-5"/>
      </svg>

      {/* Main Content Grid */}
      <div className="relative z-20 max-w-8xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Section: Text Content - Perfectly Aligned, Impactful */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-left md:pl-12 lg:pl-24"> {/* Adjusted for better left padding */}
          <h1 className="font-tilt-neon text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg tracking-tight animate-text-gradient">
            Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">Vision.</span>
            <br />
            Empower Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-yellow-400">Mind.</span>
          </h1>
          <p className="font-exo-2 text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Unleash your full potential with <span className="font-semibold text-emerald-700">curated insights</span>, groundbreaking tools, and a thriving community dedicated to profound mental clarity, emotional mastery, and accelerated personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full animate-fade-in-up"> {/* Added fade-in-up animation */}
            <button className="font-tilt-neon px-8 py-3 bg-emerald-600 text-white font-bold text-lg rounded-full shadow-xl relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:bg-emerald-700">
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              <span className="relative z-10 block transform group-hover:scale-100 group-hover:translate-x-0 transition-transform duration-300">Start Your Evolution</span>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all duration-300 rounded-full"></span>
            </button>
            <button className="font-exo-2 px-8 py-3 border-2 border-lime-600 text-lime-700 font-semibold text-lg rounded-full relative overflow-hidden group transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:bg-lime-50">
              <span className="absolute inset-0 bg-lime-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
              <span className="relative z-10 block transform group-hover:scale-100 group-hover:translate-x-0 transition-transform duration-300">Explore Our Pathways</span>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-lime-700 transition-all duration-300 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Right Section: Extraordinary, Asymmetrical Image Composition */}
        <div className="relative flex justify-center md:justify-end min-h-[500px] md:min-h-[600px] lg:min-h-[700px] group animate-fade-in-right pr-0 md:pr-12 lg:pr-24">
          {/* Main Image 1 (Colorful Spheres) - "Photo inside case" effect */}
          <div className="absolute w-full max-w-lg h-full z-40" style={{ top: '5%', left: '5%' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-lime-600 to-yellow-400 rounded-3xl shadow-xl p-4 flex items-center justify-center overflow-hidden transition-all duration-500 ease-out rotate-[-5deg] group-hover:shadow-2xl group-hover:scale-[1.02] group-hover:rotate-[-8deg]">
              <img
                src="https://images.unsplash.com/photo-1639584858073-0e2dc200689e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Abstract colorful spheres representing interconnectedness and thought"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out transform rotate-[0deg] scale-[1.02] group-hover:scale-[1.08] group-hover:rotate-[0deg] group-hover:translate-y-[-5px]" // Image inside case moves
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1074x716/E0F2FE/6B7280?text=Image+1'; }}
              />
            </div>
          </div>

          {/* Main Image 2 (Laptop with abstract lines) - "Photo inside case" effect */}
          <div className="absolute w-full max-w-lg h-full z-30" style={{ bottom: '5%', right: '5%' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 to-teal-400 rounded-3xl shadow-xl p-4 flex items-center justify-center overflow-hidden transition-all duration-500 ease-out rotate-[4deg] group-hover:shadow-2xl group-hover:scale-[1.02] group-hover:rotate-[8deg]">
              <img
                src="https://images.unsplash.com/photo-1529485726363-95c8d62f656f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Laptop with abstract lines representing connection and data"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out transform rotate-[0deg] scale-[1.02] group-hover:scale-[1.08] group-hover:rotate-[0deg] group-hover:translate-y-[5px]" // Image inside case moves
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1974x1316/E0F2FE/6B7280?text=Image+2'; }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS and Custom Keyframes */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&family=Tilt+Neon&display=swap');

        .font-exo-2 {
          font-family: 'Exo 2', sans-serif;
        }
        .font-tilt-neon {
          font-family: 'Tilt Neon', cursive;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        /* Swirl Animations for background SVG circles */
        @keyframes swirl-1 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          25% { transform: translate(10vw, 5vh) scale(1.1); opacity: 0.9; }
          50% { transform: translate(20vw, 0) scale(1.2); opacity: 0.8; }
          75% { transform: translate(10vw, -5vh) scale(1.1); opacity: 0.9; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
        }
        @keyframes swirl-2 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(-10vw, -5vh) scale(1.1); opacity: 0.7; }
          50% { transform: translate(-20vw, 0) scale(1.2); opacity: 0.6; }
          75% { transform: translate(-10vw, 5vh) scale(1.1); opacity: 0.7; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        }
        @keyframes swirl-3 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          25% { transform: translate(5vw, -10vh) scale(1.1); opacity: 0.9; }
          50% { transform: translate(0, -20vh) scale(1.2); opacity: 0.8; }
          75% { transform: translate(-5vw, -10vh) scale(1.1); opacity: 0.9; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
        }
        @keyframes swirl-4 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(5vw, 10vh) scale(1.1); opacity: 0.7; }
          50% { transform: translate(0, 20vh) scale(1.2); opacity: 0.6; }
          75% { transform: translate(-5vw, 10vh) scale(1.1); opacity: 0.7; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        }
        @keyframes swirl-5 {
          0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          25% { transform: translate(-5vw, 10vh) scale(1.1); opacity: 0.9; }
          50% { transform: translate(-10vw, 0) scale(1.2); opacity: 0.8; }
          75% { transform: translate(-5vw, -10vh) scale(1.1); opacity: 0.9; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
        }

        /* Draw line animations for intersecting SVGs */
        @keyframes draw-path-one {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes draw-path-two {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Blob animation for background shapes */
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* New: Image glow pulse animation (kept for potential future use or alternative styles) */
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out alternate;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }

        /* New: Text gradient animation */
        @keyframes text-gradient-anim {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-text-gradient .text-transparent {
          background-size: 200% auto;
          animation: text-gradient-anim 3s ease-in-out infinite alternate;
        }

        /* New: Fade in up animation for buttons */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards 0.5s; /* Added delay */
        }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
