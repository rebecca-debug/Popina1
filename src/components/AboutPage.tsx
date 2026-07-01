import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../site-config';

const AboutPage = () => {
  const COLORS = SITE_CONFIG.colors;
  const content = SITE_CONFIG.about;
  const images = SITE_CONFIG.images;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F2ED] selection:bg-[#CC5300]/30 antialiased">
      {/* Hero Section: From Dry Land to Living */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1"
            >
              <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8" style={{ color: COLORS.cta }}>{content.hero.label}</span>
              <h1 className="text-5xl lg:text-7xl font-mono font-bold leading-[1.05] tracking-tight mb-8">
                {content.hero.headline}
              </h1>
              <div className="space-y-8 text-dark/70 text-base lg:text-lg leading-relaxed font-medium">
                <p>
                  {content.hero.p1}
                </p>
                <p>
                  {content.hero.p2}
                </p>
                <p className="p-8 border-l italic" style={{ backgroundColor: COLORS.primary + '0D', borderColor: COLORS.primary + '33' }}>
                  "{content.hero.quote}"
                </p>
                <p>
                  {content.hero.p3}
                </p>
              </div>
            </motion.div>
            <div className="order-2">
              <div className="grid grid-cols-2 gap-6 scale-95 lg:scale-100">
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg transform -rotate-2">
                    <img src={images.aboutHero1} alt="Beehives at Popina" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg transform rotate-1">
                    <img src={images.aboutHero2} alt="Saffron harvest" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg transform rotate-2">
                    <img src={images.aboutHero3} alt="Fresh zucchini and saffron" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg transform -rotate-1">
                    <img src={images.aboutHero4} alt="Preserved garden produce" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
        {/* Faded Saffron Logo Background (Pure Vector) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none overflow-hidden">
          <svg className="w-[85%] max-w-4xl h-auto text-[#5A5A40]" viewBox="0 0 500 500" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M250 400c-82.8 0-150-67.2-150-150S167.2 100 250 100s150 67.2 150 150-67.2 150-150 150z" className="opacity-10" fill="currentColor" />
            <path d="M150 250a100 100 0 0 1 100-100m100 100a100 100 0 0 1-100 100" strokeWidth="2" strokeDasharray="3 3" />
            <path d="M250 80c40 0 75 30 75 70s-35 70-75 70-75-30-75-70 35-70 75-70z" className="opacity-5" fill="currentColor" />
            <text x="250" y="245" textAnchor="middle" className="font-serif text-[44px] tracking-[0.35em] font-light" fill="currentColor">POPINA</text>
            <text x="250" y="280" textAnchor="middle" className="font-sans text-[10px] tracking-[0.5em] uppercase font-semibold" fill="currentColor">EST. 2026</text>
            <text x="250" y="305" textAnchor="middle" className="font-sans text-[8px] tracking-[0.4em] uppercase" fill="currentColor">QUEENSBERRY</text>
            <path d="M160 210c-5-10-15-15-25-10s-10 15-5 25M340 210c5-10 15-15 25-10s10 15 5 25" fill="currentColor" />
            <path d="M190 160c-2-12-10-20-20-18s-12 12-10 24M310 160c2-12 10-20 20-18s12 12 10 24" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-10">
              <img 
                src="src="/popina_saffron_logo.jpg?v=8" 
                alt="Popina Saffron Logo" 
                className="h-28 md:h-36 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl lg:text-6xl font-script italic text-dark/90 leading-tight mb-10">
              "{content.philosophy.quote}"
            </h2>
            <div className="w-16 h-px bg-dark/20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Our Food Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
               <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-12" style={{ color: COLORS.cta }}>{content.culinary.label}</span>
               <h2 className="text-4xl lg:text-6xl font-mono font-bold mb-12 leading-tight">
                 {content.culinary.headline}
               </h2>
               <div className="space-y-8 text-dark/70 text-lg lg:text-xl font-medium leading-relaxed">
                  <p className="text-dark font-bold">
                     {content.culinary.p1}
                  </p>
                  <p>
                     {content.culinary.p2}
                  </p>
               </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src={images.hospo} 
                alt="Culinary heart and hospitality of Popina" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* History & Hospitality */}
      <section className="py-24 lg:py-40 bg-[#F5F2ED] text-dark shadow-inner overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] -mr-48 -mt-48" style={{ backgroundColor: COLORS.cta }} />
           <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[150px] -ml-48 -mb-48" style={{ backgroundColor: COLORS.primary }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src={images.restaurantInterior} 
                alt="Inside Popina Restaurant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-12" style={{ color: COLORS.cta }}>{content.hospitality.label}</span>
              <h2 className="text-4xl lg:text-6xl font-mono font-bold mb-16 leading-tight">
                {content.hospitality.headline}
              </h2>
              <div className="space-y-8 text-dark/70 text-lg leading-relaxed font-medium">
                <div className="space-y-8">
                  <p>
                    {content.hospitality.p1}
                  </p>
                  <p>
                    {content.hospitality.p2}
                  </p>
                </div>
                <div className="space-y-8">
                  <p>
                    {content.hospitality.p3}
                  </p>
                  <p className="text-2xl font-mono italic border-t border-dark/10 pt-8" style={{ color: COLORS.cta }}>
                    "{content.hospitality.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Room to Breathe */}
      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl group"
            >
              <img src={images.ambientHero} alt="Popina restaurant ambience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8" style={{ color: COLORS.cta }}>{content.restaurant.label}</span>
              <h2 className="text-4xl lg:text-6xl font-mono font-bold mb-8 leading-tight">
                {content.restaurant.headline}
              </h2>
              <div className="space-y-8 text-dark/70 text-lg leading-relaxed font-medium">
                <p>
                  {content.restaurant.p1}
                </p>
                <p>
                  {content.restaurant.p2}
                </p>
                <div className="flex flex-col gap-4 py-8">
                  {content.restaurant.list.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-dark/90 font-bold uppercase tracking-widest text-[11px]">
                      <ArrowRight size={14} style={{ color: COLORS.cta }} />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="border-l-4 pl-8 py-2" style={{ borderColor: COLORS.cta }}>
                  {content.restaurant.note}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 lg:py-32 text-white" style={{ backgroundColor: COLORS.primary }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-mono italic mb-12">Welcome.</h2>
          <p className="text-white/80 text-xl lg:text-2xl font-mono leading-relaxed mb-16">
            Come for lunch or dinner. Stay for a drink. Bring the family. Bring the people who make sitting around a table feel easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/reservations" 
              className="text-white px-10 py-4 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-dark transition-all w-full sm:w-auto text-center"
              style={{ backgroundColor: COLORS.cta }}
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
