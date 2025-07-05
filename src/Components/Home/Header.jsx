import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Brain, X, Menu } from 'lucide-react'; // Assuming Brain, X, and Menu icons are from lucide-react

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-[73%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Mentora
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-lg">
            <Link to="/" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Services</Link>
            <Link to="/find-a-therapist" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Find a Therapist</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Contact Us</Link>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Content (Conditional Rendering) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100 py-4 space-y-4 px-4">
            <Link to="/" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">About</Link>
            <Link to="/how-it-works" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">How It Works</Link>
            <Link to="/testimonials" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Testimonials</Link>
            <Link to="/faq" className="block text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">FAQ</Link>
            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-full font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;