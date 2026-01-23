
import React from 'react';
import { Section } from '../types';

interface CardProps {
  section: Section;
}

const Card: React.FC<CardProps> = ({ section }) => {
  const isGradient = section.type === 'gradient';

  return (
    <div className={`w-full rounded-[2rem] overflow-hidden transition-all duration-500 hover:translate-y-[-4px] shadow-sm hover:shadow-xl group border ${
      isGradient 
        ? 'bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border-emerald-500' 
        : 'bg-white border-gray-100 text-gray-900'
    }`}>
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className={`font-display font-black text-xl tracking-tight uppercase ${isGradient ? 'text-white' : 'text-emerald-700'}`}>
              {section.title}
            </h3>
            {section.description && (
              <p className={`text-[10px] font-black tracking-widest opacity-60 uppercase mt-1 ${isGradient ? 'text-emerald-50' : 'text-gray-400'}`}>
                {section.description}
              </p>
            )}
          </div>
          <div className={`flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-300 ${isGradient ? 'bg-white/20 group-hover:rotate-45' : 'bg-gray-50 group-hover:bg-emerald-50 group-hover:rotate-45'}`}>
             <i className={`fa-solid fa-arrow-up-right text-xs ${isGradient ? 'text-white' : 'text-emerald-600'}`}></i>
          </div>
        </div>

        {section.items.length > 0 && (
          <div className="space-y-5">
            {section.items.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url}
                className={`block group/item transition-all py-1`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className={`block font-bold text-sm tracking-tight transition-colors uppercase ${isGradient ? 'group-hover/item:text-emerald-200' : 'group-hover/item:text-emerald-600'}`}>
                      {item.label}
                    </span>
                    {item.sublabel && (
                      <span className={`block text-[9px] mt-1 uppercase tracking-wider font-semibold opacity-40 ${isGradient ? 'text-white' : 'text-gray-500'}`}>
                        {item.sublabel}
                      </span>
                    )}
                  </div>
                  <i className={`fa-solid fa-chevron-right text-[8px] transition-all ${isGradient ? 'text-white opacity-20' : 'text-emerald-500 opacity-20'} group-hover/item:opacity-100 group-hover/item:translate-x-1`}></i>
                </div>
              </a>
            ))}
          </div>
        )}

        {section.socials && (
          <div className={`${section.items.length > 0 ? 'mt-10 border-t pt-6' : ''} ${isGradient ? 'border-white/10' : 'border-gray-50'}`}>
            {isGradient ? (
              /* Icons-only horizontal layout for gradient cards */
              <div className="flex justify-center items-center gap-5">
                {section.socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.platform}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 bg-white/20 hover:bg-white/30 text-white"
                  >
                    <i className={`fa-brands fa-${social.platform} text-2xl`}></i>
                  </a>
                ))}
              </div>
            ) : (
              /* Grid layout with details for outlined cards */
              <div className="grid grid-cols-2 gap-4">
                {section.socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl transition-all hover:scale-105 group/social bg-gray-50 hover:bg-emerald-50 border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-all bg-white text-emerald-600 group-hover/social:bg-emerald-600 group-hover/social:text-white">
                      <i className={`fa-brands fa-${social.platform} text-lg`}></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {social.platform}
                      </p>
                      <p className="text-[11px] font-semibold truncate text-gray-700">
                        {social.handle}
                      </p>
                    </div>
                    <i className="fa-solid fa-arrow-up-right text-[10px] transition-all opacity-0 group-hover/social:opacity-100 text-emerald-600"></i>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
