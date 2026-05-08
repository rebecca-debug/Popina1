import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Calendar, Users, User, Quote, ArrowRight } from 'lucide-react';

const CelebrationsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to info@popina.co.nz
    // For now, we simulate the submission
    console.log('Form submitted:', formData);
    
    // Construct mailto link as a fallback/action for the user to actually send it if they want
    const subject = encodeURIComponent('Event Enquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Event Date: ${formData.date}\n` +
      `Estimated Guests: ${formData.guests}\n`
    );
    // window.location.href = `mailto:info@popina.co.nz?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5F2ED] selection:bg-[#FF583F]/30 antialiased">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden border-b border-dark/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8">Exclusive Events</span>
              <h1 className="text-5xl lg:text-7xl font-mono font-bold leading-[1.05] tracking-tight mb-8">
                Gatherings that feel generous.
              </h1>
              <p className="text-dark/60 text-lg lg:text-xl font-medium leading-relaxed italic pr-12">
                Popina is made for moments that matter. Exclusive use of the venue gives you the space to settle in, spread out, and make the place your own.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl"
            >
              <img 
                src="/popina-southview.jpg" 
                alt="Popina Event Setting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-12"
            >
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-mono text-dark font-bold leading-tight">
                  Whether it is a long lunch, a milestone birthday, or a wedding welcome dinner.
                </h2>
                <div className="text-dark/70 text-lg lg:text-xl font-medium leading-relaxed space-y-6">
                  <p>
                    The venue can host up to <span className="text-dark font-bold">80 guests seated</span> or <span className="text-dark font-bold">120 guests cocktail-style</span>, with plenty of room for good food, good wine, and the kind of conversation that gets better as the afternoon rolls on.
                  </p>
                  <p>
                    Food is served <span className="text-[#FF583F] italic">family-style</span> to the table, designed for sharing. Generous, seasonal, and without too much fuss—exactly how we like to eat.
                  </p>
                  <p>
                    Menus and beverages can be customised to suit the occasion, from a relaxed shared feast to a more considered celebration with selected wines and local beers.
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#F5F2ED] p-12 lg:p-16 rounded-sm relative overflow-hidden"
              >
                <Quote className="absolute top-8 right-8 text-[#FF583F]/10 w-24 h-24" />
                <div className="relative z-10">
                  <p className="text-2xl lg:text-3xl font-script italic text-dark/80 mb-8 leading-relaxed">
                    “What can I say, your Team smashed Saturday out of the park!!!! The venue, the service, the food, just everything was faultless. Our day could not have been more wonderful.”
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-[#FF583F]" />
                    <span className="uppercase tracking-widest text-[11px] font-extrabold text-dark/60">Tracey Henderson — May 2026</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar Stats/Info */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-dark text-white p-10 rounded-sm space-y-8">
                <h3 className="text-xl font-mono border-b border-white/10 pb-6">At a glance</h3>
                <div className="space-y-6">
                  <div>
                    <span className="block text-[#FF583F] uppercase tracking-widest text-[10px] font-bold mb-1">Capacity</span>
                    <p className="text-lg">80 Seated / 120 Standing</p>
                  </div>
                  <div>
                    <span className="block text-[#FF583F] uppercase tracking-widest text-[10px] font-bold mb-1">Catering</span>
                    <p className="text-lg">Family-style Sharing</p>
                  </div>
                  <div>
                    <span className="block text-[#FF583F] uppercase tracking-widest text-[10px] font-bold mb-1">Setting</span>
                    <p className="text-lg">Rural Queensberry Oasis</p>
                  </div>
                </div>
              </div>
              <div className="aspect-square rounded-sm overflow-hidden shadow-xl">
                 <img src="/popina-localspot.jpg" alt="Local gathering" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry" className="py-24 lg:py-40 bg-dark text-white relative overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF583F] rounded-full blur-[150px] -mr-[250px] -mt-[250px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5A5A40] rounded-full blur-[150px] -ml-[250px] -mb-[250px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8">The Enquiry</span>
              <h2 className="text-5xl lg:text-7xl font-mono font-bold mb-12 leading-tight">
                Plan your <br/> perfect day.
              </h2>
              <div className="space-y-8 text-white/60 text-lg leading-relaxed font-medium max-w-lg">
                <p>
                  Popina gives you the bones of a beautiful event: warm hospitality, honest food, a calm setting, and a team that knows how to make people feel well cared for.
                </p>
                <div className="flex items-center gap-4 py-4 border-t border-white/10">
                  <Mail className="text-[#FF583F]" size={20} />
                  <span>info@popina.co.nz</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 lg:p-16 rounded-sm shadow-2xl"
            >
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-[#5A5A40]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <Mail className="text-[#5A5A40] w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-mono font-bold text-dark mb-4">Thank you for your enquiry.</h3>
                  <p className="text-dark/60 text-lg italic mb-8">We'll be in touch soon to discuss your event at Popina.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#FF583F] font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto"
                  >
                    Send another enquiry <ArrowRight size={14} />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-dark/40 ml-1">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={16} />
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name"
                          className="w-full bg-[#F5F2ED] border border-transparent text-dark p-4 pl-12 rounded-sm focus:border-[#FF583F] focus:ring-4 focus:ring-[#FF583F]/10 focus:bg-white transition-all outline-none placeholder:text-dark/20 font-medium"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-dark/40 ml-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={16} />
                        <input 
                          required
                          type="email" 
                          placeholder="name@email.com"
                          className="w-full bg-[#F5F2ED] border border-transparent text-dark p-4 pl-12 rounded-sm focus:border-[#FF583F] focus:ring-4 focus:ring-[#FF583F]/10 focus:bg-white transition-all outline-none placeholder:text-dark/20 font-medium"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-dark/40 ml-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={16} />
                        <input 
                          required
                          type="tel" 
                          placeholder="+64 --- --- ----"
                          className="w-full bg-[#F5F2ED] border border-transparent text-dark p-4 pl-12 rounded-sm focus:border-[#FF583F] focus:ring-4 focus:ring-[#FF583F]/10 focus:bg-white transition-all outline-none placeholder:text-dark/20 font-medium"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-dark/40 ml-1">Event Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={16} />
                        <input 
                          required
                          type="date" 
                          className="w-full bg-[#F5F2ED] border border-transparent text-dark p-4 pl-12 rounded-sm focus:border-[#FF583F] focus:ring-4 focus:ring-[#FF583F]/10 focus:bg-white transition-all outline-none font-medium text-dark/60"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-dark/40 ml-1">Estimated Guests</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-dark/20" size={16} />
                      <input 
                        required
                        type="number" 
                        placeholder="e.g. 50"
                        className="w-full bg-[#F5F2ED] border border-transparent text-dark p-4 pl-12 rounded-sm focus:border-[#FF583F] focus:ring-4 focus:ring-[#FF583F]/10 focus:bg-white transition-all outline-none placeholder:text-dark/20 font-medium"
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-dark text-white py-5 rounded-sm text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-[#FF583F] transition-all transform active:scale-[0.98] mt-4"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CelebrationsPage;
