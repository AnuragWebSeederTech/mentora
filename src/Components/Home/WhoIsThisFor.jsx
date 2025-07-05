import React from 'react';
import { Brain, Heart, Users, Zap, BookOpen, CheckCircle } from 'lucide-react'; // Importing necessary icons

const WhoIsThisFor = () => {
  const audiences = [
    {
      title: "Psychologists",
      description: "Courses, training, and therapy techniques. Materials for professional development",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      features: ["Professional Development", "Therapy Techniques", "Training Materials"],
      color: "from-purple-50 to-purple-100"
    },
    {
      title: "Emotional Well-being",
      description: "Meditation and relaxation techniques. Self-reflection exercises",
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      features: ["Meditation Techniques", "Relaxation Methods", "Self-reflection"],
      color: "from-pink-50 to-purple-100"
    },
    {
      title: "Parents",
      description: "How to develop emotional intelligence in children. Tips for raising emotionally resilient kids",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      features: ["Child Development", "Emotional Intelligence", "Parenting Tips"],
      color: "from-indigo-50 to-purple-100"
    },
    {
      title: "Busy Professionals",
      description: "Quick stress-relief techniques. Resources for better focus and productivity",
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      features: ["Stress Relief", "Focus Enhancement", "Productivity Tools"],
      color: "from-violet-50 to-purple-100"
    },
    {
      title: "Self-Analysis",
      description: "Psychological tests and self-discovery methods. Emotion tracking journals",
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      features: ["Self-Discovery", "Psychological Tests", "Emotion Tracking"],
      color: "from-purple-50 to-indigo-100"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Who Is This Platform For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find helpful resources for your mental well-being and emotional growth, tailored for different audiences and needs.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-gradient-to-br ${audience.color} border border-purple-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>
              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{audience.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{audience.description}</p>
              {/* Features List */}
              <div className="space-y-3">
                {audience.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Call to Action Button */}
              <button className="mt-6 w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
