import React from 'react';
import { Brain, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'; // Importing necessary icons

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8"> {/* Changed from bg-gray-900 text-white */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section of the footer with grid layout */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">MENTORA</span> {/* Changed text-white to text-gray-900 */}
            </div>
            <p className="text-gray-600 leading-relaxed mb-6"> {/* Changed text-gray-400 to text-gray-600 */}
              Empowering mental well-being and emotional growth through evidence-based resources and professional guidance.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Facebook"> {/* Changed text-gray-400 to text-gray-600, hover to purple-600 */}
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Twitter"> {/* Changed text-gray-400 to text-gray-600, hover to purple-600 */}
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="Instagram"> {/* Changed text-gray-400 to text-gray-600, hover to purple-600 */}
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors" aria-label="LinkedIn"> {/* Changed text-gray-400 to text-gray-600, hover to purple-600 */}
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Resources</h4> {/* Changed text-white to text-gray-900 */}
            <ul className="space-y-3 text-gray-600"> {/* Changed text-gray-400 to text-gray-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">For Psychologists</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">For Parents</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">For Professionals</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">Self-Analysis Tools</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">Meditation Guides</a></li> {/* Changed hover to purple-600 */}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Company</h4> {/* Changed text-white to text-gray-900 */}
            <ul className="space-y-3 text-gray-600"> {/* Changed text-gray-400 to text-gray-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">About Us</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">Our Team</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">Careers</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">Press</a></li> {/* Changed hover to purple-600 */}
              <li><a href="#" className="hover:text-purple-600 transition-colors">Blog</a></li> {/* Changed hover to purple-600 */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact</h4> {/* Changed text-white to text-gray-900 */}
            <div className="space-y-4 text-gray-600"> {/* Changed text-gray-400 to text-gray-600 */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-600" /> {/* Changed text-purple-400 to text-purple-600 for better contrast */}
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-600" /> {/* Changed text-purple-400 to text-purple-600 */}
                <span>hello@MENTORA.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-600" /> {/* Changed text-purple-400 to text-purple-600 */}
                <span>123 Wellness Street, Mental Health City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section of the footer (Copyright and Policies) */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between"> {/* Changed border-gray-800 to border-gray-300 */}
          <p className="text-gray-600 text-sm"> {/* Changed text-gray-400 to text-gray-600 */}
            © 2024 MENTORA. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Privacy Policy</a> {/* Changed text-gray-400 to text-gray-600, hover to purple-600 */}
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Terms of Service</a> {/* Changed text-gray-400 to text-gray-600, hover to purple-600 */}
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">Cookie Policy</a> {/* Changed text-gray-400 to text-gray-600, hover to purple-600 */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
