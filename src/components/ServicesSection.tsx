
import { Code, LayoutDashboard, FileText, Database, Palette, Play } from 'lucide-react';

const services = [
  {
    icon: <Code size={36} className="text-primary" />,
    title: "Web Development",
    description: "From static pages to dynamic web applications. Professional websites that work smoothly across all devices.",
    gradientClass: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
  },
  {
    icon: <LayoutDashboard size={36} className="text-secondary" />,
    title: "Design & Branding",
    description: "UI/UX design, logo design, and brand identity. Clean, engaging designs that make your brand stand out.",
    gradientClass: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
  },
  {
    icon: <FileText size={36} className="text-accent" />,
    title: "Landing Pages",
    description: "Conversion-focused single-page designs that drive results and engage your audience effectively.",
    gradientClass: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200"
  },
  {
    icon: <Database size={36} className="text-primary" />,
    title: "Website with Backend",
    description: "Full-stack web applications with user authentication, database integration, and admin panels.",
    gradientClass: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
  },
  {
    icon: <Palette size={36} className="text-secondary" />,
    title: "Graphic Design",
    description: "Posters, banners, social media graphics, and thumbnails. Creative visuals for your brand.",
    gradientClass: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
  },
  {
    icon: <Play size={36} className="text-accent" />,
    title: "Photo & Video Editing",
    description: "Professional photo editing, reels, shorts, and YouTube video editing for creators and brands.",
    gradientClass: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">Comprehensive web solutions tailored to your specific needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`card card-hover flex flex-col border-2 ${service.gradientClass} shadow-lg`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
