
import React from 'react';
import { PROFILE_NAME, TAGLINE, HEADING, SUB_TAGLINE, PROFILE_IMAGE, SECTIONS } from './constants';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div className="h-screen md:min-h-screen relative overflow-hidden md:overflow-auto md:pb-20 bg-white">
      <div className="container max-w-xl mx-auto px-4 md:px-6 pt-4 md:pt-16 relative z-10 h-full md:h-auto flex flex-col md:block">
        
        {/* Header Section */}
        <header className="text-center mb-4 md:mb-16 flex-shrink-0">
          <div className="relative inline-block mb-3 md:mb-10 group">
            {/* Ambient Pulse - Light Emerald */}
            <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl scale-150 animate-pulse hidden md:block"></div>
            
            <div className="relative w-28 h-28 md:w-44 md:h-44 mx-auto rounded-full p-[3px] bg-gradient-to-tr from-emerald-500 via-cyan-500 to-emerald-500 profile-glow shadow-xl transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-gray-50">
                <img 
                  src={PROFILE_IMAGE} 
                  alt={PROFILE_NAME}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Active Badge */}
            <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-white p-1 md:p-1.5 rounded-full border border-gray-100 shadow-xl">
              <div className="bg-emerald-500 text-white w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-check text-[8px] md:text-[11px] font-bold"></i>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 md:space-y-4 px-2 md:px-4">
            <h1 className="font-display font-black text-lg md:text-3xl text-gray-900 uppercase tracking-tight leading-none">
              {PROFILE_NAME}
            </h1>
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <div className="h-[1px] w-5 md:w-8 bg-emerald-200"></div>
              <p className="text-[9px] md:text-[10px] font-black tracking-[0.25em] md:tracking-[0.5em] text-emerald-600 uppercase">
                {TAGLINE}
              </p>
              <div className="h-[1px] w-5 md:w-8 bg-emerald-200"></div>
            </div>
            <h2 className="text-gray-800 text-sm md:text-lg font-semibold leading-tight md:leading-snug max-w-[300px] md:max-w-md mx-auto">
              {HEADING}
            </h2>
            <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed md:leading-loose max-w-[340px] md:max-w-lg mx-auto font-normal px-2 md:px-4">
              {SUB_TAGLINE}
            </p>
          </div>
        </header>

        {/* Bento Grid Main Content */}
        <main className="space-y-2 md:space-y-4">
          {SECTIONS.map((section, idx) => (
            <Card key={idx} section={section} />
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-20 md:mt-28 pb-12 md:pb-16 text-center">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            {/* Divider */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-300 to-transparent mx-auto mb-12"></div>
            
            {/* Horizontal CTA Button */}
            <a 
              href="https://wa.me/918801279471"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-4 px-8 md:px-16 py-5 md:py-6 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white rounded-2xl md:rounded-full shadow-xl hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 group relative overflow-hidden mb-10 hover:scale-105"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* WhatsApp Icon */}
              <i className="fa-brands fa-whatsapp text-3xl md:text-4xl relative z-10"></i>
              
              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-start">
                <span className="block font-black text-base md:text-xl leading-tight">
                  I am just a ping away!
                </span>
                <span className="block text-xs md:text-sm font-medium text-emerald-50 opacity-85 mt-0.5">
                  Message me on WhatsApp for quick response
                </span>
              </div>
            </a>
            
            {/* Footer Info */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <p className="text-xs md:text-sm text-gray-500 font-medium mb-2">
                ⚡ Quick Response Guaranteed • Available 24/7 ⚡
              </p>
              <p className="text-xs text-gray-400">
                © 2025 Dr. Rehaman Mohammed. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
