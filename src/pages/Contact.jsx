import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Importing necessary icons

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-white">
      {/* Subtle Background Abstract Shapes for Depth and Professionalism */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a855f7\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM16 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM56 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM56 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM56 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM56 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM56 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM56 54v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 24v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 44v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 44v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 44v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 44v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 44v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 44v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 64v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM4 64v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 64v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM24 64v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 64v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM44 64v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        backgroundSize: '60px 60px',
        backgroundRepeat: 'repeat',
      }}></div>
      {/* Dynamic Blobs for subtle movement */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-700 leading-tight tracking-tight"
              style={{ fontFamily: 'Tilt Neon, cursive' }}>
            Connect With Us
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
             style={{ fontFamily: 'Exo 2, sans-serif' }}>
            We're here to listen and assist you. Reach out through our contact form or find our direct details below.
          </p>
        </div>

        {/* Main Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-16">
          {/* Contact Information Card - Reimagined for Professionalism */}
          <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between
                        lg:order-1 order-2 overflow-hidden group"> {/* Added group for hover effects */}
            {/* Inner subtle pattern for depth */}
            <div className="absolute inset-0 z-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at top left, rgba(147, 197, 253, 0.1) 0%, transparent 70%)',
            }}></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-blue-200" style={{ fontFamily: 'Tilt Neon, cursive' }}>
                Our Details
              </h3>
              <p className="text-base text-gray-800 mb-8 leading-relaxed" style={{ fontFamily: 'Exo 2, sans-serif' }}>
                Whether you have questions, feedback, or need assistance, we're here to provide clarity and support.
              </p>

              <div className="space-y-8"> {/* Increased spacing */}
                {/* Email */}
                <div className="flex items-start space-x-5">
                  <div className="p-4 rounded-full bg-blue-500/10 text-blue-600 shadow-lg flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>Email Us</h4>
                    <a href="mailto:info@yourwebsite.com" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 text-base" style={{ fontFamily: 'Exo 2, sans-serif' }}>info@yourwebsite.com</a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start space-x-5">
                  <div className="p-4 rounded-full bg-purple-500/10 text-purple-600 shadow-lg flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>Call Us</h4>
                    <a href="tel:+11234567890" className="text-gray-800 hover:text-purple-600 transition-colors duration-200 text-base" style={{ fontFamily: 'Exo 2, sans-serif' }}>+1 (123) 456-7890</a>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start space-x-5">
                  <div className="p-4 rounded-full bg-fuchsia-500/10 text-fuchsia-600 shadow-lg flex-shrink-0 group-hover:bg-fuchsia-600 group-hover:text-white transition-all duration-300">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800" style={{ fontFamily: 'Exo 2, sans-serif' }}>Visit Us</h4>
                    <p className="text-gray-800 text-base" style={{ fontFamily: 'Exo 2, sans-serif' }}>123 Mindful Lane, Serenity City, 90210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card - Elevated Design */}
          <div className="relative bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-2xl border border-gray-100 transform hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 ease-out
                        lg:order-2 order-1 overflow-hidden group"> {/* Added group for hover effects */}
            {/* Inner subtle pattern for depth */}
            <div className="absolute inset-0 z-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
            }}></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-purple-200" style={{ fontFamily: 'Tilt Neon, cursive' }}>
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 text-base font-medium mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 text-base"
                    placeholder="John Doe"
                    style={{ fontFamily: 'Exo 2, sans-serif' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-800 text-base font-medium mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-3 focus:ring-purple-400 focus:border-purple-400 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 text-base"
                    placeholder="john.doe@example.com"
                    style={{ fontFamily: 'Exo 2, sans-serif' }}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-800 text-base font-medium mb-2" style={{ fontFamily: 'Exo 2, sans-serif' }}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-3 focus:ring-fuchsia-400 focus:border-fuchsia-400 outline-none transition-all duration-300 text-gray-800 placeholder-gray-500 text-base resize-y"
                    placeholder="Tell us how we can help..."
                    style={{ fontFamily: 'Exo 2, sans-serif' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full
                             shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out
                             text-lg tracking-wide group animate-cta-pulse"
                  style={{ fontFamily: 'Exo 2, sans-serif' }}
                >
                  Send Message <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section - Integrated & Professional */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform hover:shadow-2xl hover:border-fuchsia-200 transition-all duration-500 ease-out">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center pb-2 border-b border-fuchsia-100" style={{ fontFamily: 'Tilt Neon, cursive' }}>
            Our Location
          </h3>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-inner" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.922119938096!2d77.99434457508933!3d30.31649997479704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c88871%3A0x153594371432f913!2sClock%20Tower%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location on Map"
            ></iframe>
          </div>
          <p className="text-center text-gray-800 text-sm mt-4" style={{ fontFamily: 'Exo 2, sans-serif' }}>
            *Map shows our general office area. Please contact us for detailed directions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
