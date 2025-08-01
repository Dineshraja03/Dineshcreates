
import { ArrowRight, User } from 'lucide-react';
import { HeroGeometric } from './ui/shape-landing-hero';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen overflow-hidden relative">
      <HeroGeometric
        badge={null}
        title1="Hi, I'm Dinesh"
        title2="Building Digital Excellence"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#portfolio" className="px-6 py-3 bg-primary text-white rounded-md font-medium transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg flex items-center gap-2">
            <span>My Works</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </HeroGeometric>
    </section>
  );
};

export default HeroSection;
