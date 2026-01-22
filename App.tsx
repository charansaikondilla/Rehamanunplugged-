
import React from 'react';
import { PROFILE_NAME, TAGLINE, HEADING, SUB_TAGLINE, PROFILE_IMAGE, SECTIONS } from './constants';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative pb-20 overflow-x-hidden bg-white">
      <div className="container max-w-xl mx-auto px-6 pt-16 relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="relative inline-block mb-10 group">
            {/* Ambient Pulse - Light Emerald */}
            <div className="absolute inset-0 bg-emerald-100 rounded-full blur-3xl scale-150 animate-pulse"></div>
            
            <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full p-[3px] bg-gradient-to-tr from-emerald-500 via-cyan-500 to-emerald-500 profile-glow shadow-xl transition-transform duration-500 hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white bg-gray-50">
                <img 
                  src={PROFILE_IMAGE} 
                  alt={PROFILE_NAME}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            
            {/* Active Badge */}
            <div className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full border border-gray-100 shadow-xl">
              <div className="bg-emerald-500 text-white w-7 h-7 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-check text-[11px] font-bold"></i>
              </div>
            </div>
          </div>

          <div className="space-y-4 px-4">
            <h1 className="font-display font-black text-3xl text-gray-900 uppercase tracking-tight leading-none mb-2">
              {PROFILE_NAME}
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-emerald-200"></div>
              <p className="text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase">
                {TAGLINE}
              </p>
              <div className="h-[1px] w-8 bg-emerald-200"></div>
            </div>
            <h2 className="text-gray-800 text-base md:text-lg font-semibold leading-snug max-w-[320px] md:max-w-md mx-auto px-2">
              {HEADING}
            </h2>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed md:leading-loose max-w-[300px] md:max-w-lg mx-auto font-normal tracking-normal px-4">
              {SUB_TAGLINE}
            </p>
          </div>
        </header>

        {/* Bento Grid Main Content */}
        <main className="space-y-4">
          {SECTIONS.map((section, idx) => (
            <Card key={idx} section={section} />
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-emerald-100 to-transparent mx-auto mb-8"></div>
          <p className="text-[8px] font-black tracking-[0.7em] text-gray-300 uppercase">
            © {new Date().getFullYear()} Rehaman Mohammed • Building Legacies
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
