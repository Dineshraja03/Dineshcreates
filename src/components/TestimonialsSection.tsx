
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Thirukumaran",
    role: "Marvelsnaps Founder",
    image: "",
    content: "Dinesh delivered a stunning website that perfectly captured our brand. The attention to detail and responsiveness to our needs was exceptional.",
    rating: 4
  },
  {
    name: "Dinakaran",
    role: "Icecream Town Owner",
    image: "",
    content: "Working with Dinesh was a game-changer for our business. He created a website that not only looks amazing but also drives real results with increased conversions.",
    rating: 5
  },
  {
    name: "Gokulvasan",
    role: "Portfolio client",
    image: "",
    content: "Dinesh designed an amazing acting portfolio that truly captures my personality and talent. It's stylish, smooth, and has helped me stand out.",
    rating: 5
  },
  {
    name: "Veerabalaji",
    role: "Portfolio Client",
    image: "",
    content: "Dinesh created a clean and professional portfolio that perfectly showcases my work as a pharmacy student. It's exactly what I needed!",
    rating: 4
  }
];

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showAll, setShowAll] = useState(false);
  
  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section-padding bg-gradient-to-br from-red-50 via-purple-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Feedback from people I've had the pleasure to work with</p>
        </div>
        
        {!showAll ? (
          <div className="relative max-w-6xl mx-auto">
            {/* Desktop View - 2 column layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg relative overflow-hidden animate-glow-border"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-20 animate-border-glow"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-400 to-blue-400 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{testimonial.content}</p>
                    
                    <div className="flex gap-1">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Mobile View - Horizontal Scrollable Carousel */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg min-w-[300px] flex-shrink-0 snap-center relative overflow-hidden animate-glow-border"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-20 animate-border-glow"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-400 to-blue-400 flex items-center justify-center text-white font-bold text-xl">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{testimonial.content}</p>
                      
                      <div className="flex gap-1">
                        {Array(5).fill(0).map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowAll(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                Read More Reviews
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg relative overflow-hidden animate-glow-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-20 animate-border-glow"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-red-400 to-blue-400 flex items-center justify-center text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{testimonial.content}</p>
                    
                    <div className="flex gap-1">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button 
                onClick={() => setShowAll(false)}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Show Less
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
