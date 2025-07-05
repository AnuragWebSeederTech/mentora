import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      image: "/images/img2.jpg",
      quote: "Mentora helped me find balance in my practice and personal life, truly transformative!",
      name: "Dr. Sarah Chen",
      role: "Clinical Psychologist"
    },
    {
      image: "/images/img1.jpg",
      quote: "The mindfulness resources transformed my daily routine completely, fostering a sense of calm.",
      name: "Maya Patel",
      role: "Wellness Coach"
    },
    {
      image: "/images/image.png",
      quote: "Our family grew stronger through emotional intelligence tools; it was a game-changer for us.",
      name: "Jennifer & Mark",
      role: "Parents of Two"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-purple-50 via-purple-50 to-pink-50 overflow-hidden font-['Exo_2']"> {/* Enhanced background gradient for stronger purple shades */}
      {/* Artistic Background Elements */}
      <div className="absolute inset-0">
        {/* Organic Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-3xl" 
             style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-200/50 to-violet-200/50 rounded-full blur-3xl"
             style={{ transform: `translateY(${scrollY * -0.1}px)` }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-rose-200/40 to-purple-200/40 rounded-full blur-3xl" /> {/* Stronger rose/purple gradient */}

        {/* Geometric Accents */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-purple-500 rounded-full opacity-70 animate-pulse" /> {/* Stronger purple accent */}
        <div className="absolute top-40 left-32 w-1 h-1 bg-pink-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }} /> {/* Stronger pink accent */}
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-indigo-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }} /> {/* Stronger indigo accent */}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 min-h-screen flex items-center mt-6 lg:mt-0">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-12 gap-8 items-center">

            {/* Left Content */}
            <div className="col-span-12 lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-['Tilt_Neon']">
                  <span className="block text-gray-900">Find Resources for</span>
                  <span className="bg-gradient-to-r from-purple-600 via-rose-500 to-purple-700 bg-clip-text text-transparent"> {/* Darker gradient colors */}
                    Mental Well-being
                  </span>
                  <span className="block text-gray-900">& Emotional Growth</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"> {/* Darker gray text for better contrast */}
                Our platform is dedicated to helping you find resources to support every stage of your emotional journey, from professional development to personal growth. Discover curated content, expert guidance, and practical tools.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-purple-600 via-rose-500 to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 justify-center"> {/* Darker purple/pink gradient button */}
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="bg-white/90 backdrop-blur-sm text-purple-900 px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl border border-purple-400 flex items-center gap-3 justify-center"> {/* Darker purple text and border button */}
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Visual - Enhanced! */}
            <div className="col-span-12 lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
              <div className="relative w-full max-w-lg mx-auto aspect-[3/4] rounded-4xl shadow-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Background "Polaroid" Effect */}
                <div className="absolute inset-0 bg-white rounded-4xl p-4 shadow-inner">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                      key={currentSlide} // Key for re-render and transition on slide change
                    />

                    {/* Gradient Overlay for Testimonial */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end"> {/* Retained dark overlay for text readability */}
                      <div className="p-6 text-white text-left space-y-2"> {/* Retained white text for readability */}
                        <p className="text-lg font-medium italic leading-relaxed">
                          "{testimonials[currentSlide].quote}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-bold text-xl">{testimonials[currentSlide].name}</p>
                            <p className="text-sm opacity-80">{testimonials[currentSlide].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats - repositioned and styled */}
                <div className="absolute -top-12 -left-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-purple-300 transform -rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"> {/* Stronger purple border */}
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-purple-800 font-['Tilt_Neon']">10K+</div> {/* Darker purple text */}
                    <div className="text-sm text-gray-700 font-medium">Happy Users</div>
                  </div>
                </div>

                <div className="absolute -bottom-12 -right-8 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-pink-300 transform rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105"> {/* Stronger pink border */}
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-pink-800 font-['Tilt_Neon']">500+</div> {/* Darker pink text */}
                    <div className="text-sm text-gray-700 font-medium">Curated Resources</div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-purple-800 w-8' /* Darker purple active indicator */
                        : 'bg-purple-400 hover:bg-purple-500' /* Stronger purple inactive indicator */
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      
    </div>
  );
};

export default HeroSection;
