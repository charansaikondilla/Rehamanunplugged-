
import React from 'react';
import { PROFILE_NAME, TAGLINE, HEADING, SUB_TAGLINE, PROFILE_IMAGE, SECTIONS } from './constants';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <div className="container max-w-xl mx-auto px-4 md:px-6 pt-4 md:pt-16">
        
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
        <main className="space-y-2 md:space-y-4 mb-6 md:mb-10">
          {SECTIONS.map((section, idx) => (
            <Card key={idx} section={section} />
          ))}
        </main>

        {/* Desktop Footer */}
        <footer className="hidden md:block mt-20 text-center pb-10">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-emerald-200 to-transparent mx-auto mb-6"></div>
          <p className="text-sm font-semibold text-gray-600 mb-2">Let's connect</p>
          <a 
            href="https://wa.me/918801279471"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="fa-brands fa-whatsapp mr-2"></i>
            I am just a ping away!
          </a>
          <p className="text-xs text-gray-400 mt-6">© 2025 Dr. Rehaman Mohammed</p>
        </footer>
      </div>

      {/* Mobile Sticky Footer Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
        <a 
          href="https://wa.me/918801279471"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 active:scale-95"
        >
          <i className="fa-brands fa-whatsapp mr-2"></i>
          I am just a ping away!
        </a>
        <p className="text-center text-[9px] text-gray-400 mt-2">⚡ Quick response guaranteed</p>
      </div>
    </div>
  );
};

export default App;
