
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <AnimatedLogo />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
          <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
          <a href="#portfolio" className="font-medium hover:text-primary transition-colors">Portfolio</a>
          <a href="#pricing" className="font-medium hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="btn-primary">Contact Me</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 glassmorphism animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="font-medium hover:text-primary" onClick={toggleMenu}>Home</a>
            <a href="#about" className="font-medium hover:text-primary" onClick={toggleMenu}>About</a>
            <a href="#services" className="font-medium hover:text-primary" onClick={toggleMenu}>Services</a>
            <a href="#portfolio" className="font-medium hover:text-primary" onClick={toggleMenu}>Portfolio</a>
            <a href="#pricing" className="font-medium hover:text-primary" onClick={toggleMenu}>Pricing</a>
            <a href="#contact" className="btn-primary text-center" onClick={toggleMenu}>Contact Me</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
