import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react'; // Importing necessary icons

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I know which category is right for me?",
      answer: "Our platform is designed with clear categories based on your role and needs. Whether you're a psychologist seeking professional development, a parent looking to help your children, or someone on a personal growth journey, each section is tailored with specific resources and tools."
    },
    {
      question: "Are the resources evidence-based?",
      answer: "Yes, all our resources are curated by mental health professionals and based on current research in psychology and emotional well-being. We regularly update our content to reflect the latest findings in the field."
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer: "Absolutely! Our platform is fully responsive and optimized for all devices. You can access meditation exercises, tracking tools, and resources seamlessly on your smartphone, tablet, or computer."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial that gives you access to all our resources and tools. No credit card required to start your journey toward better mental well-being."
    },
    {
      question: "How often is new content added?",
      answer: "We add new content weekly, including fresh courses, updated techniques, and new self-reflection exercises. Premium members get early access to new resources and exclusive content."
    },
    {
      question: "Can I track my progress over time?",
      answer: "Yes, our platform includes comprehensive tracking tools that help you monitor your emotional growth, stress levels, and overall well-being progress. You'll receive personalized insights and recommendations based on your journey."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Got questions? We've got answers. Here are the most common questions about our platform.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-purple-50 rounded-2xl border border-purple-200 overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-100 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index} // Accessibility improvement
                aria-controls={`faq-answer-${index}`} // Accessibility improvement
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-6" role="region"> {/* Accessibility improvement */}
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
