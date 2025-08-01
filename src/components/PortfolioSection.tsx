
import { ExternalLink } from 'lucide-react';

const portfolioProjects = [
  {
    title: "Dinesh Raja – Portfolio",
    description: "A personal portfolio built for a Computer Science Engineering student to showcase skills, projects, and achievements with smooth animations and interactive UI.",
    image: "https://dineshraja.vercel.app/og-image.jpg",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://dineshraja.vercel.app",
    category: "Portfolio"
  },
  {
    title: "Veera Balaji – B.Pharm Portfolio",
    description: "A career-focused portfolio for a Pharmacy student with clean visuals, intuitive interface, and modern layout ideal for job market entry.",
    image: "https://veerabalaji.vercel.app/og-image.jpg",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://veerabalaji.vercel.app",
    category: "Portfolio"
  },
  {
    title: "Gokulvasan – Artist Portfolio",
    description: "A feature-rich portfolio for an artist showcasing short films, photo gallery, and personal profile with social media integration.",
    image: "https://gokulvasan.vercel.app/og-image.jpg",
    technologies: ["React.js", "Gallery", "Contact Forms"],
    liveUrl: "https://gokulvasan.vercel.app",
    category: "Portfolio"
  },
  {
    title: "Sivakumar – Actor Portfolio",
    description: "A visually expressive portfolio for a performing artist with photo gallery, YouTube integration, and embedded contact form.",
    image: "https://sivakumar-actor.vercel.app/og-image.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "YouTube API"],
    liveUrl: "https://sivakumar-actor.vercel.app/",
    category: "Portfolio"
  },
  {
    title: "MarvelSnaps.in – Photography Brand",
    description: "A stylish and interactive business website for a freelance photographer with WhatsApp API integration and custom domain hosting.",
    image: "https://marvelsnaps2.vercel.app/og-image.jpg",
    technologies: ["React.js", "WhatsApp API", "Vercel", "GoDaddy"],
    liveUrl: "https://marvelsnaps2.vercel.app",
    category: "Business"
  },
  {
    title: "IcecreamTown.in – Ice Cream Parlor",
    description: "A fun and colorful website for an ice cream parlor showcasing products, flavors, and services with mobile-friendly design.",
    image: "https://icecreamtown.in/og-image.jpg",
    technologies: ["React.js", "Vercel", "Responsive Design"],
    liveUrl: "https://icecreamtown.in",
    category: "Business"
  }
];

const PortfolioSection = () => {
  const portfolioItems = portfolioProjects.filter(project => project.category === "Portfolio");
  const businessItems = portfolioProjects.filter(project => project.category === "Business");

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real projects showcasing my expertise in web development and design</p>
        </div>
        
        {/* Portfolio Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">Portfolio Websites</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioItems.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover glassmorphism"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-64 overflow-hidden relative">
                  <iframe 
                    src={project.liveUrl} 
                    title={project.title}
                    className="w-full h-full border-none transform scale-50 origin-top-left"
                    style={{ 
                      width: '200%', 
                      height: '200%',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left'
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex justify-center">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 text-sm py-2"
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Business Category */}
        <div>
          <h3 className="text-2xl font-bold mb-8 pb-2 border-b border-gray-200">Business Websites</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {businessItems.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover glassmorphism"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="h-64 overflow-hidden relative">
                  <iframe 
                    src={project.liveUrl} 
                    title={project.title}
                    className="w-full h-full border-none transform scale-50 origin-top-left"
                    style={{ 
                      width: '200%', 
                      height: '200%',
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left'
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/90 text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{project.title}</h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex justify-center">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 text-sm py-2"
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
