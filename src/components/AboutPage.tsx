import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F2ED] selection:bg-[#FF583F]/30 antialiased">
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
              <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8">The Land</span>
              <h1 className="text-5xl lg:text-7xl font-mono font-bold leading-[1.05] tracking-tight mb-8">
                From dry land to <br/> something living.
              </h1>
              <div className="space-y-8 text-dark/70 text-base lg:text-lg leading-relaxed font-medium">
                <p>
                  For the past ten years, Brenda and Tony have been growing trees from seed and planting them across the property. Slowly, and with no grand performance. Just the work
                </p>
                <p>
                  The vision is simple: restore the land, make it productive, and let the place become part of the experience.
                </p>
                <p className="bg-[#5A5A40]/5 p-8 border-l border-[#5A5A40]/20 italic">
                  "Fruit trees. Garlic. Saffron. Gardens. Compost. Chickens. Eggs for baking. Food scraps are going back into the system."
                </p>
                <p>
                  It is not sustainability as a slogan. It is a loop. A working, circular rhythm that starts with care for the land and comes back to the table.
                </p>
              </div>
            </motion.div>
            <div className="order-2">
              <div className="grid grid-cols-2 gap-6 scale-95 lg:scale-100">
                <div className="space-y-6 pt-12">
                  <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg transform -rotate-2">
                    <img src="popina-honey.jpg" alt="Beehives at Popina" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg transform rotate-1">
                    <img src="popina-saffron.jpg" alt="Saffron harvest" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-lg transform rotate-2">
                    <img src="Popina-Food.jpg" alt="Fresh zucchini and saffron" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg transform -rotate-1">
                    <img src="popina-preserve-3507.jpg" alt="Preserved garden produce" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 lg:py-40 bg-white overflow-hidden">
        {/* Faded Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <img 
            src="/popina-logo.jpg" 
            alt="" 
            className="w-[80%] max-w-5xl h-auto grayscale" 
            aria-hidden="true"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-6xl font-script italic text-dark/90 leading-tight mb-10">
              "Not a polished city restaurant dropped into the country. Something more useful than that. A community oasis, grown from the ground up."
            </h2>
            <div className="w-16 h-px bg-dark/20 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Our Food Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
             <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-12">Culinary Heart</span>
             <h2 className="text-4xl lg:text-6xl font-mono font-bold mb-12 leading-tight">
               Our Food
             </h2>
             <div className="space-y-8 text-dark/70 text-lg lg:text-xl font-medium leading-relaxed max-w-3xl">
                <p className="text-dark font-bold">
                  Honest dishes, fresh, simple, and seasonal.
                </p>
                <p>
                  Our menus take gentle inspiration from the Mediterranean, shaped by local produce, thoughtful technique, and a love of food made to be shared. Everything is guided by simplicity, flavour, and care.
                </p>
             </div>
          </motion.div>
        </div>
      </section>


      {/* History & Hospitality */}
      <section className="py-24 lg:py-40 bg-[#F5F2ED] text-dark shadow-inner overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF583F] rounded-full blur-[150px] -mr-48 -mt-48" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5A5A40] rounded-full blur-[150px] -ml-48 -mb-48" />
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
                src="/popina-restaurant.jpg" 
                alt="Inside Popina Restaurant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl"
            >
              <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-12">Expertise</span>
              <h2 className="text-4xl lg:text-6xl font-mono font-bold mb-16 leading-tight">
                Hospitality, with <br/> history behind it.
              </h2>
              <div className="space-y-8 text-dark/70 text-lg leading-relaxed font-medium">
                <div className="space-y-8">
                  <p>
                    Brenda and Tony are not new to feeding people. Before Popina, they spent more than 20 years running Wellington’s Ministry of Food, followed by a stint at Missy’s Kitchen in Wanaka.
                  </p>
                  <p>
                    Years of kitchens, service, regulars, early mornings, late finishes, and knowing exactly when a table needs attention and when it needs to be left alone.
                  </p>
                </div>
                <div className="space-y-8">
                  <p>
                    Behind the scenes is a passionate team that cares deeply about hospitality, quality, and creating an experience that feels welcoming, relaxed, and genuine.
                  </p>
                  <p className="text-[#FF583F] text-2xl font-mono italic border-t border-dark/10 pt-8">
                    "Popina is for people who like food that makes sense."
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
              <img src="/popina-hero1.jpg" alt="Popina restaurant ambience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8">The Restaurant</span>
              <h2 className="text-4xl lg:text-6xl font-mono font-bold mb-8 leading-tight">
                A restaurant with <br className="hidden lg:block"/> room to breathe.
              </h2>
              <div className="space-y-8 text-dark/70 text-lg leading-relaxed font-medium">
                <p>
                  Seasonal produce. Proper ingredients. Simple cooking done with care. Drinks chosen with the same thought. 
                </p>
                <p>
                  A room where people can relax, talk, laugh, bring the family, park the boat, pull in with the horse float, or stop in after driving through Central Otago.
                </p>
                <div className="flex flex-col gap-4 py-8">
                  <div className="flex items-center gap-4 text-dark/90 font-bold uppercase tracking-widest text-[11px]">
                    <ArrowRight size={14} className="text-[#FF583F]" />
                    A place for locals.
                  </div>
                  <div className="flex items-center gap-4 text-dark/90 font-bold uppercase tracking-widest text-[11px]">
                    <ArrowRight size={14} className="text-[#FF583F]" />
                    A place for travellers who want the real thing.
                  </div>
                  <div className="flex items-center gap-4 text-dark/90 font-bold uppercase tracking-widest text-[11px]">
                    <ArrowRight size={14} className="text-[#FF583F]" />
                    A place for families.
                  </div>
                </div>
                <p className="border-l-4 border-[#FF583F] pl-8 py-2">
                  Popina is still growing. The orchard will take time. Gardens do not hurry because you have a launch date. Trees are famously bad at respecting marketing timelines.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 lg:py-32 bg-[#5A5A40] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-mono italic mb-12">Welcome.</h2>
          <p className="text-white/80 text-xl lg:text-2xl font-mono leading-relaxed mb-16">
            Come for lunch or dinner. Stay for a drink. Bring the family. Bring the people who make sitting around a table feel easy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/reservations" 
              className="bg-[#FF583F] text-white px-10 py-4 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-dark transition-all w-full sm:w-auto text-center"
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
