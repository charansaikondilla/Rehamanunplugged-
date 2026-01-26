import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/918801279471"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
      title="Chat on WhatsApp"
    >
      {/* Floating Button Background Pulse */}
      <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg animate-pulse opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Main Button */}
      <div className="relative bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
        <i className="fa-brands fa-whatsapp text-2xl md:text-3xl"></i>
      </div>

      {/* Tooltip Text */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="block font-semibold text-sm">I am just a ping away!</span>
        <span className="block text-[10px] text-emerald-300 mt-1">Quick response guaranteed</span>
        {/* Arrow */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
