import img from "../assets/profile.png";
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Profile Picture */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl opacity-70"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
              <img 
                src={img} 
                alt="Dinesh Raja" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Right Column - About Content */}
        <div className="animate-fade-in-right">
          <h2 className="section-title">About Me</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate web developer and designer creating stunning digital experiences for businesses and individuals alike.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="font-medium">25+ Successful Projects</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <p className="font-medium">Growing Happy Clients</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mb-8">
            My approach combines technical expertise with creative design thinking to create websites that not only look beautiful but also drive results for your business.
          </p>
          
          <a href="#contact" className="btn-primary">Let's build something amazing!</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
