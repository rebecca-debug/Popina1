import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ZoomIn, Eye, Download, Info } from 'lucide-react';
import { SITE_CONFIG } from '../site-config';

const MenuPage = () => {
  const COLORS = SITE_CONFIG.colors;
  const content = SITE_CONFIG.menu;
  const images = SITE_CONFIG.images;

  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F2ED] selection:bg-[#CC5300]/30 antialiased min-h-screen">
      {/* Header section */}
      <section className="relative pt-40 pb-16 lg:pt-52 lg:pb-24 overflow-hidden border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-6 animate-pulse" style={{ color: COLORS.cta }}>
              {content.hero.label}
            </span>
            <h1 className="text-5xl lg:text-7xl font-mono font-bold leading-tight tracking-tight mb-8">
              {content.hero.headline}
            </h1>
            
            {/* Elegant Disclosure Container */}
            <div className="max-w-2xl mx-auto mt-6 p-6 border-l-2 bg-[#A49F86]/10 text-dark/70 text-xs lg:text-sm leading-relaxed tracking-wide font-medium rounded-r-sm shadow-sm" style={{ borderColor: COLORS.primary }}>
              <div className="flex items-start gap-3 text-left">
                <Info size={16} className="shrink-0 mt-0.5 text-[#5A5A40]" />
                <p>
                  {content.hero.disclosure}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Image Display Section */}
      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Toolbar Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button 
                onClick={() => setIsZoomed(!isZoomed)}
                className="flex items-center gap-2 hover:bg-dark text-white px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-md active:scale-95"
                style={{ backgroundColor: COLORS.primary }}
              >
                <ZoomIn size={14} />
                {isZoomed ? 'Actual Size' : 'Zoom In'}
              </button>
              
              <a 
                href={images.menu}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#F5F2ED] hover:bg-dark text-dark hover:text-white px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all border border-dark/10"
              >
                <Eye size={14} />
                Open In New Tab
              </a>

              <a 
                href={images.menu}
                download="Popina-Menu.jpg"
                className="flex items-center gap-2 bg-white hover:bg-dark text-dark hover:text-white px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all border border-dark/10"
              >
                <Download size={14} />
                Save Menu Image
              </a>
            </div>

            {/* Menu Image Container */}
            <div 
              className={`w-full bg-[#F5F2ED] p-4 lg:p-8 rounded-sm border border-dark/10 shadow-xl overflow-auto transition-all duration-300 ${
                isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <img 
                src={images.menu} 
                alt="Popina seasonal restaurant menu showing carefully prepared selections" 
                className={`mx-auto h-auto transition-all duration-300 rounded-sm ${
                  isZoomed ? 'w-[150%] max-w-none md:w-[120%]' : 'w-full max-w-4xl'
                }`}
              />
            </div>

            {/* Micro Instruction */}
            <p className="text-[10px] uppercase tracking-widest text-dark/40 font-bold mt-4">
              * Click the menu image to zoom in / out
            </p>
          </motion.div>
        </div>
      </section>

      {/* Decorative footer snippet */}
      <section className="py-16 bg-[#F5F2ED] border-t border-dark/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-mono text-xs text-dark/50 uppercase tracking-[0.3em] mb-4">
            Popina Queensberry
          </p>
          <p className="font-script italic text-xl lg:text-2xl text-dark/70 leading-relaxed max-w-lg mx-auto">
            "A rural community spot built for good food, close friends and long afternoons."
          </p>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
