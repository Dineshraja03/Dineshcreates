
import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Code Icon */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-500">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Design Palette */}
      <div className="absolute top-40 right-20 animate-float opacity-15" style={{ animationDelay: '1s' }}>
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" className="text-purple-500">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6C8 6 8 14 12 14C16 14 16 6 12 6Z" fill="currentColor"/>
        </svg>
      </div>

      {/* HTML Tag */}
      <div className="absolute bottom-32 left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" className="text-orange-500">
          <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 17L12 22L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* React Logo */}
      <div className="absolute top-60 left-1/2 animate-float opacity-15" style={{ animationDelay: '3s' }}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" className="text-cyan-500">
          <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" fill="currentColor"/>
          <path d="M12 1C18 1 23 5.5 23 12S18 23 12 23 1 18.5 1 12 6 1 12 1Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* CSS Icon */}
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '4s' }}>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" className="text-blue-600">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Monitor Icon */}
      <div className="absolute top-80 right-32 animate-float opacity-15" style={{ animationDelay: '5s' }}>
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" className="text-green-500">
          <rect x="2" y="4" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;
