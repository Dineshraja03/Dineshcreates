
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-heading mb-4 text-primary">Dinesh Creates</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Freelance Web Developer & Designer creating modern, responsive websites that help businesses grow online. Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/mdineshraja03/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Dineshraja03" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.instagram.com/dinesh.creates/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>mdineshraja03@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Instagram size={16} />
                <span>@dinesh.creates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              Powered by Dinesh Creates | © All rights reserved {year}
            </p>
            <div className="flex gap-6 text-sm">
              <span className="text-gray-400">Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
