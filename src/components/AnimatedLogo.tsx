
import { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const [showImage, setShowImage] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('showing-text'); // 'showing-text', 'fading-text', 'showing-image', 'fading-image'

  useEffect(() => {
    const cycle = () => {
      // Phase 1: Show text for 3 seconds
      setAnimationPhase('showing-text');
      setShowImage(false);
      
      setTimeout(() => {
        // Phase 2: Fade out text (1 second)
        setAnimationPhase('fading-text');
        
        setTimeout(() => {
          // Phase 3: Show image with zoom-in (3 seconds)
          setAnimationPhase('showing-image');
          setShowImage(true);
          
          setTimeout(() => {
            // Phase 4: Fade out image (1 second)
            setAnimationPhase('fading-image');
            
            setTimeout(() => {
              // Loop back to start
              cycle();
            }, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    };

    cycle();
  }, []);

  return (
    <div className="relative w-48 h-12 flex items-center">
      {/* Text Logo */}
      <div 
        className={`absolute inset-0 flex items-center text-2xl font-bold font-heading transition-all duration-1000 ${
          animationPhase === 'showing-text' 
            ? 'opacity-100' 
            : animationPhase === 'fading-text'
            ? 'opacity-0'
            : 'opacity-0'
        }`}
      >
        <span 
          className={`text-primary transition-all duration-500 ${
            animationPhase === 'fading-text' ? 'transform -translate-x-8 opacity-0' : ''
          }`}
        >
          Dinesh
        </span>
        <span 
          className={`text-accent transition-all duration-500 delay-300 ${
            animationPhase === 'fading-text' ? 'transform translate-x-8 opacity-0' : ''
          }`}
        >
          {' '}Creates
        </span>
      </div>

      {/* Image Logo */}
      <div 
        className={`absolute left-0 flex items-center transition-all duration-1000 ${
          animationPhase === 'showing-image'
            ? 'opacity-100 scale-100'
            : animationPhase === 'fading-image'
            ? 'opacity-0 scale-75'
            : showImage
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-125'
        }`}
      >
        <img 
          src="/lovable-uploads/a9268a87-5105-4a9f-8f2a-b4542ff83bc7.png" 
          alt="DC Logo" 
          className="h-14 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AnimatedLogo;
