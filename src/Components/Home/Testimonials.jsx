import React from 'react';
import { Star } from 'lucide-react'; // Importing Star icon for ratings

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Licensed Psychologist",
      image: "/images/girl1.jpg",
      text: "The professional development resources have transformed my practice. The therapy techniques are evidence-based and incredibly effective.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      image: "/images/boy1.jpg",
      text: "As a busy professional, the quick stress-relief techniques have been a game-changer. I can now manage workplace pressure much better.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Mother of Two",
      image: "/images/girl2.jpg",
      text: "The parenting resources helped me develop emotional intelligence in my children. They're more resilient and emotionally aware now.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Life Coach",
      image: "/images/boy2.jpg",
      text: "The self-analysis tools and emotion tracking journals have been invaluable for my personal growth and my clients' development.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from people who've transformed their mental well-being with our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              {/* Star Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-purple-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
