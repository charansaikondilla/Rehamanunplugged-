
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { sendMessageToMentor } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const MentorChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Rehaman's Strategy Hub. How can I help you architect your future today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await sendMessageToMentor(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Action Button - Modern Light Style */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-6 w-16 h-16 bg-white border border-gray-100 text-emerald-600 rounded-3xl shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <div className="absolute inset-0 rounded-3xl bg-emerald-50 blur opacity-0 group-hover:opacity-100 transition-all"></div>
        <i className="fa-solid fa-bolt-lightning text-xl relative z-10"></i>
      </button>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            />
            
            {/* Chat Window - Light Mode Glassmorphism */}
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-lg mx-auto bg-white rounded-t-[3rem] h-[85vh] flex flex-col shadow-2xl border-t border-gray-100 overflow-hidden relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-8 pb-6 flex justify-between items-center border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900 text-lg tracking-tight uppercase">Strategy AI</h3>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-[9px] text-emerald-600 opacity-70 uppercase tracking-[0.2em] font-black">Link Secure</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <i className="fa-solid fa-xmark text-gray-400"></i>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-white/50">
                {messages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] p-5 rounded-3xl text-[13px] leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-emerald-600 text-white rounded-tr-none' 
                          : 'bg-gray-50 text-gray-700 border border-gray-100 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-50 border border-gray-100 p-5 rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-8 pb-12 border-t border-gray-50">
                <div className="flex gap-3 bg-gray-50 rounded-3xl p-2 items-center border border-gray-100 focus-within:border-emerald-500/30 transition-all">
                  <input 
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Inquire legacy strategy..."
                    className="flex-1 bg-transparent border-none outline-none px-6 text-gray-900 text-sm placeholder:text-gray-300 font-medium"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-all disabled:opacity-50"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MentorChat;
