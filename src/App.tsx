/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X, 
  MapPin, 
  UtensilsCrossed, 
  Calendar, 
  Info, 
  Wine, 
  Instagram, 
  Facebook,
  ChevronRight,
  ChevronLeft,
  Star,
  Shell
} from 'lucide-react';

import AboutPage from './components/AboutPage';
import CelebrationsPage from './components/CelebrationsPage';
import MenuPage from './components/MenuPage';
import { SITE_CONFIG, getAssetUrl } from './site-config';

// --- Constants & Types ---

const COLORS = SITE_CONFIG.colors;

const NAV_LINKS = [
  { name: 'Reservations', href: '/reservations' },
  { name: 'Menu', href: '/menu' },
  { name: 'Our Story', href: '/about' },
  { name: 'Celebrations', href: '/celebrations' },
  { name: 'Gift Card', href: '/gift-cards' },
];

const TESTIMONIALS = [
  {
    quote: "Tripped out here while visiting Queensberry, as it popped up on my FB feed. So glad we checked it out! What a gem. Completely random, but incredible food, service & architecture. Iconic NZ landscape. Share plates between the 4 of us , the lamb was amazing! Definitely recommend stopping by!",
    author: "Sara M",
    rating: 5,
    source: "On Google"
  },
  {
    quote: "We came back to experience Popina in the day - it was even better. The building is stunning and the views are beautiful. We had a mid afternoon coffee and delicious treats, sun poured in & friendly staff. Could t ask for a more perfect spot.",
    author: "Jules Grey",
    rating: 5,
    source: "On Google"
  },
  {
    quote: "Incredible building set in a lovely location. Everything about this place was perfect. Super attentive staff and a kid friendly environment. Nice and close to Wanaka.",
    author: "Richie Hawkins",
    rating: 5,
    source: "On Google"
  }
];

// --- Utility Components ---

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly to ensure layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const Image = ({ 
  src, 
  alt, 
  className = "", 
  priority = false, 
  aspectRatio = "aspect-square",
  fallbackSrc,
  delay = 0
}: { 
  src: string; 
  alt: string; 
  className?: string; 
  priority?: boolean;
  aspectRatio?: string;
  fallbackSrc?: string;
  delay?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className} bg-[#E9E5DE]`}>
      {/* Skeleton / Blur Placeholder */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.5, delay }}
        className="absolute inset-0 bg-gradient-to-br from-[#E9E5DE] to-[#D1CDC3] z-10"
      />
      
      <motion.img
        src={error && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut", delay }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        loading={priority ? 'eager' : 'lazy'}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const Logo = () => (
  <div id="nav-logo" className="flex items-center group cursor-pointer">
    <img 
      src={SITE_CONFIG.logo} 
      alt={`${SITE_CONFIG.brandName} - Relaxed Rural Restaurant in Queensberry`} 
      className="h-14 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105"
      onError={(e) => {
        // Fallback placeholder if image is not found
        (e.target as HTMLImageElement).src = "https://placehold.co/200x80/1c1c1c/ffffff?text=POPINA";
      }}
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabelStyle = { color: COLORS.dark + 'B3' }; // dark/70

  return (
    <nav 
      id="navbar"
      className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white py-2 border-b border-dark/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 lg:h-28 flex items-center justify-between">
        {/* Logo (Left) */}
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Desktop Links (Right) */}
        <div id="nav-desktop-right" className="hidden lg:flex items-center justify-end space-x-12">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-[10px] font-extrabold uppercase tracking-[0.3em] transition-colors"
              style={{ color: COLORS.dark + 'B3' }}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            id="nav-cta" 
            to="/reservations"
            className="hover:bg-dark text-white px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-md active:scale-95 text-center ml-4"
            style={{ backgroundColor: COLORS.cta }}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button id="nav-toggle" className="lg:hidden p-2 text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-8 flex flex-col space-y-6 lg:hidden font-bold tracking-widest text-xs uppercase"
          >
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className="text-dark hover:text-primary transition-colors border-b border-dark/5 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/reservations"
              className="text-white py-4 rounded-sm text-center"
              style={{ backgroundColor: COLORS.cta }}
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer id="footer" className="bg-[#B9B3A7] pt-20 lg:pt-32 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-20 lg:mb-24 lg:px-10">
        <div id="footer-nav" className="flex flex-col gap-12 lg:gap-16">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-dark/40">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="group flex items-center gap-2 text-dark/80 hover:text-dark transition-colors text-[10px] font-extrabold uppercase tracking-[0.3em]">
                    <span className="w-0 group-hover:w-4 h-px bg-dark transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="space-y-6 text-[11px] font-bold uppercase tracking-[0.15em] text-dark/60">
              <Link 
                to="/gift-cards"
                className="mt-2 text-white px-10 py-5 rounded-sm text-[12px] font-extrabold tracking-[0.4em] uppercase hover:bg-dark hover:scale-105 transition-all inline-block w-fit text-center shadow-xl hover:shadow-2xl active:scale-95"
                style={{ backgroundColor: COLORS.cta }}
              >
                Buy a Gift Card
              </Link>
              
              <div className="pt-4">
                <h5 className="text-dark mb-4 text-[10px] tracking-[0.3em] font-extrabold uppercase">Follow Us</h5>
                <div className="flex gap-3">
                  <a href={SITE_CONFIG.links.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-dark/10 flex items-center justify-center text-dark/60 hover:bg-dark hover:text-white transition-all">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full border border-dark/10 flex items-center justify-center text-dark/60 hover:bg-dark hover:text-white transition-all">
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="footer-info" className="flex flex-col items-center text-center">
          <h4 className="text-xs font-bold uppercase tracking-[0.4em] mb-8 text-dark/40">Business Info</h4>
          <div className="space-y-10 text-[11px] font-bold uppercase tracking-[0.15em] text-dark/60">
            <div>
              <h5 className="text-dark mb-4 text-[10px] tracking-[0.3em] font-extrabold uppercase">Address</h5>
              <p className="opacity-80">{SITE_CONFIG.contact.address}</p>
            </div>
            <div>
              <h5 className="text-dark mb-4 text-[10px] tracking-[0.3em] font-extrabold uppercase">Phone</h5>
              <p className="opacity-80">{SITE_CONFIG.contact.phone}</p>
            </div>
            <div>
              <h5 className="text-dark mb-4 text-[10px] tracking-[0.3em] font-extrabold uppercase text-center">Opening Hours</h5>
              <div className="space-y-1 opacity-80">
                <p className="mb-2">{SITE_CONFIG.contact.openingHours.days}</p>
                <p>{SITE_CONFIG.contact.openingHours.hours}</p>
                <p className="italic mt-6 font-medium tracking-tight">{SITE_CONFIG.contact.openingHours.note}</p>
              </div>
            </div>
          </div>
        </div>

        <div id="footer-perks" className="bg-[#A49F86]/20 p-8 lg:p-12 border border-dark/5 flex flex-col justify-center max-w-md lg:max-w-none mx-auto lg:mx-0">
          <h4 className="text-2xl lg:text-3xl font-mono mb-6 text-dark/90 leading-tight">Enjoy exclusive perks, just for our community.</h4>
          <p className="text-dark/60 text-[11px] font-medium leading-[1.8] mb-10 tracking-wide">
            Join our family for happy hours specials, first access to community events and always in the know. No fees, just good times.
          </p>
          <button 
            className="w-full text-white py-5 rounded-sm text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-dark transition-all shadow-xl active:scale-[0.98]"
            style={{ backgroundColor: COLORS.cta }}
          >
            Join Now
          </button>
        </div>
      </div>

      <div className="border-t border-dark/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-dark/40 font-bold text-center gap-6">
        <div className="flex space-x-8">
          <a href="#" className="hover:text-dark transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-dark transition-colors">Terms of Service</a>
        </div>
        <p>© 2026 {SITE_CONFIG.brandName}. HANDCRAFTED WITH SOUL BY 8TWENTY.</p>
      </div>
    </div>
  </footer>
);

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); // Subtler parallax

  return (
    <>
      {/* Hero Section */}
      <header id="hero" className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image Container with Parallax */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0 h-[120%]" // Ensure it's taller for parallax
        >
          <Image 
            src={SITE_CONFIG.images.hero} 
            alt={`${SITE_CONFIG.brandName} Rural Modern Restaurant at Golden Hour`} 
            priority={true}
            aspectRatio="h-full w-full"
            className="w-full h-full"
            delay={0.8} // Fade in after text starts
            fallbackSrc="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2070"
          />
          {/* Sophisticated darkened overlay for legibility */}
          <div className="absolute inset-0 bg-dark/25 backdrop-blur-[1px] transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-transparent to-dark/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Trust Badge */}
            <div className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md py-2 px-5 rounded-full w-fit mx-auto border border-white/20">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} style={{ color: COLORS.cta, fill: COLORS.cta }} />
                ))}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white">{SITE_CONFIG.trustBadge}</span>
            </div>

            <span className="uppercase tracking-[0.5em] text-[15px] lg:text-[18px] font-extrabold block mb-8 drop-shadow-sm" style={{ color: COLORS.cta }}>
              {SITE_CONFIG.home.hero.topLabel}
            </span>
            
            <h1 className="text-4xl lg:text-7xl font-mono font-bold leading-[1.1] tracking-tight drop-shadow-lg">
              {SITE_CONFIG.home.hero.headline}
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 lg:mt-24 flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link 
                to="/reservations"
                className="text-white px-14 py-5 rounded-sm text-[12px] font-bold uppercase tracking-[0.4em] transition-all shadow-2xl hover:scale-105 active:scale-95 text-center"
                style={{ backgroundColor: COLORS.cta }}
              >
                Book a Table
              </Link>
              <Link 
                to="/about"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-14 py-5 rounded-sm text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-dark transition-all text-center"
              >
                View our story
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-px h-12 bg-gradient-to-t from-white to-transparent mx-auto" />
        </motion.div>
      </header>

      {/* Intro Section */}
      <section id="intro" className="relative py-24 lg:py-40 overflow-hidden bg-white">
        {/* Faded Logo Background (Pure Vector) */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-10">
              <img 
                src={getAssetUrl('/popina_saffron_logo.png?v=5')} 
                alt="Popina Saffron Logo" 
                className="h-28 md:h-36 w-auto object-contain"
              />
            </div>
            <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8" style={{ color: COLORS.cta }}>{SITE_CONFIG.home.welcome.label}</span>
            <h2 className="text-3xl lg:text-6xl font-script italic text-dark/90 leading-tight mb-12">
              {SITE_CONFIG.home.welcome.headline}
            </h2>
            <div className="space-y-6 text-dark/60 text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto italic">
              <p>
                {SITE_CONFIG.home.welcome.description}
              </p>
              <p className="font-bold uppercase tracking-widest text-[11px] not-italic mt-8" style={{ color: COLORS.cta }}>
                {SITE_CONFIG.home.welcome.subDescription}
              </p>
            </div>
            <div className="w-16 h-px bg-dark/20 mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      {/* Directions Strip */}
      <section id="directions" className="bg-[#A49F86]/90 backdrop-blur-sm py-12 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-white px-10"
        >
          <h2 className="text-2xl font-mono tracking-wide">Find your way to the Popina Corner</h2>
          <a 
            href={SITE_CONFIG.links.directions} 
            target="_blank" 
            rel="noopener noreferrer"
            id="directions-btn" 
            className="bg-dark hover:bg-black text-white px-10 py-3.5 rounded-sm text-[11px] font-bold uppercase tracking-[0.2em] transition-all flex items-center gap-2 group text-center"
          >
            Get Directions <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Action Grid */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main Visual Card */}
          <motion.div 
            id="feature-vibe" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 row-span-1 md:row-span-2 bg-[#F3EFE9] h-[400px] md:h-auto rounded-sm overflow-hidden shadow-xl group"
          >
            <div className="relative h-full overflow-hidden">
              <Image 
                src={SITE_CONFIG.images.localSpot} 
                alt="Atmospheric view of the Popina corner, a cozy and relaxed rural dining space in Queensberry" 
                aspectRatio="w-full h-full"
                className="group-hover:scale-110 transition-transform duration-[5s]"
              />
              {/* Removed overlay text as requested */}
            </div>
          </motion.div>

          {/* Menu Card */}
          <motion.div 
            id="feature-menu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white p-10 px-12 flex flex-col items-center text-center justify-center border border-dark/5 shadow-sm"
          >
            <UtensilsCrossed size={40} className="mb-8" style={{ color: COLORS.cta }} />
            <h3 className="text-2xl font-mono mb-6">{SITE_CONFIG.home.features.menu.title}</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              {SITE_CONFIG.home.features.menu.description}
            </p>
            <Link 
              to="/menu"
              className="text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all text-center"
              style={{ backgroundColor: COLORS.cta }}
            >
              View The Menu
            </Link>
          </motion.div>

          {/* Table Card */}
          <motion.div 
            id="feature-table"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-[#E9E5DE] p-10 px-12 flex flex-col items-center text-center justify-center shadow-sm"
          >
            <Calendar size={40} className="mb-8" style={{ color: COLORS.cta }} />
            <h3 className="text-2xl font-mono mb-6">{SITE_CONFIG.home.features.booking.title}</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              {SITE_CONFIG.home.features.booking.description}
            </p>
            <Link 
              to="/reservations"
              className="text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all text-center"
              style={{ backgroundColor: COLORS.cta }}
            >
              Reserve Now
            </Link>
          </motion.div>

          {/* Events Card */}
          <motion.a 
            id="feature-events"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href={SITE_CONFIG.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8 }}
            className="bg-[#E9E5DE] p-10 px-12 flex flex-col items-center text-center justify-center shadow-sm"
          >
            <Info size={40} className="mb-8" style={{ color: COLORS.cta }} />
            <h3 className="text-2xl font-mono mb-6">{SITE_CONFIG.home.features.events.title}</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              {SITE_CONFIG.home.features.events.description}
            </p>
            <div className="text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all" style={{ backgroundColor: COLORS.cta }}>
              Follow Us on Instagram
            </div>
          </motion.a>

          {/* Celebrations Card */}
          <motion.div 
            id="feature-celebrations"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -8 }}
            className="bg-white p-10 px-12 flex flex-col items-center text-center justify-center border border-dark/5 shadow-sm"
          >
            <Wine size={40} className="mb-8" style={{ color: COLORS.cta }} />
            <h3 className="text-2xl font-mono mb-6">{SITE_CONFIG.home.features.celebrations.title}</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              {SITE_CONFIG.home.features.celebrations.description}
            </p>
            <Link 
              to="/celebrations"
              className="text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all text-center"
              style={{ backgroundColor: COLORS.cta }}
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 lg:py-40 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <span className="uppercase tracking-[0.4em] text-[10px] font-extrabold block mb-6" style={{ color: COLORS.accent }}>Testimonials</span>
            <h2 className="text-4xl lg:text-6xl font-mono text-dark/90">Notes from the Table</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/10 overflow-hidden border border-dark/10 shadow-2xl max-w-5xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 lg:p-16 flex flex-col justify-between text-left group hover:bg-dark transition-colors duration-500"
              >
                <div className="group-hover:text-white transition-colors">
                  <div className="flex space-x-1 mb-8">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} style={{ color: COLORS.cta, fill: COLORS.cta }} />
                    ))}
                  </div>
                  <p className="text-xl font-mono italic font-light leading-relaxed mb-10">
                    "{t.quote}"
                  </p>
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-white/60 transition-colors">
                  <span className="text-dark group-hover:text-white">{t.author},</span>
                  <span className="text-dark/40 ml-2">{t.source}</span>
                </div>
              </motion.div>
            ))}
            
            {/* Featured Food Image */}
            <div className="bg-white overflow-hidden aspect-square h-80 md:h-auto border-t md:border-t-0 border-dark/10 group">
              <Image 
                src={SITE_CONFIG.images.foodView} 
                alt="A beautifully presented seasonal dish and a glass of wine, showcasing Popina's honest food and hospitality" 
                aspectRatio="w-full h-full"
                className="group-hover:scale-105 transition-transform duration-[3s]"
              />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16"
          >
            <a 
              href={SITE_CONFIG.links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.3em] text-[10px] hover:gap-4 transition-all"
              style={{ color: COLORS.cta }}
            >
              Read more reviews on Google <ChevronRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const ReservationPage = () => {
  useEffect(() => {
    // Add NowBookIt script
    const script = document.createElement('script');
    script.src = "https://plugins.nowbookit.com/iframe-resizer-build/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      // Clean up script
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-[#F5F2ED] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-6" style={{ color: COLORS.cta }}>Reservations</span>
          <h1 className="text-5xl lg:text-8xl font-mono font-bold text-dark/90 mb-8">Book Your Table</h1>
          <p className="text-dark/50 text-lg lg:text-xl max-w-2xl mx-auto font-medium italic">
            Join us for honest food and genuine hospitality in the heart of rural Queensberry. 
            We look forward to welcoming you to the Popina corner.
          </p>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-sm shadow-xl border border-dark/5 overflow-hidden">
          <iframe 
            data-id="nbi-widget" 
            src={SITE_CONFIG.links.bookingIframe}
            className="w-full h-[800px] border-none"
            title="Now Book It Reservation Widget"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
           <div>
             <h3 className="text-2xl font-mono mb-4">Groups & Celebrations</h3>
              <p className="text-dark/60 text-sm leading-relaxed mb-6">
                For groups larger than 12 or to talk to us about hosting your next private event, please view our celebrations page or get in touch on {SITE_CONFIG.contact.phone}
              </p>
             <Link 
               to="/celebrations"
               className="font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:gap-3 transition-all mx-auto md:mx-0"
               style={{ color: COLORS.cta }}
             >
               View Celebrations <ChevronRight size={14} />
             </Link>
           </div>
           <div>
             <h3 className="text-2xl font-mono mb-4">Plan Your Visit</h3>
             <p className="text-dark/60 text-sm leading-relaxed">
               We recommend booking in advance, especially during weekends and public holidays. 
               Last seating for dinner is at 7:30 pm.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

const GiftCardPage = () => {
  useEffect(() => {
    // Add NowBookIt script
    const script = document.createElement('script');
    script.src = "https://plugins.nowbookit.com/iframe-resizer-build/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      // Clean up script
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-[#F5F2ED] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-6" style={{ color: COLORS.cta }}>Gift Cards</span>
          <h1 className="text-5xl lg:text-8xl font-mono font-bold text-dark/90 mb-8">Share the Love</h1>
          <p className="text-dark/50 text-lg lg:text-xl max-w-2xl mx-auto font-medium italic">
            The perfect gift for any occasion. Treat your friends and family to the Popina experience.
          </p>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-sm shadow-xl border border-dark/5 overflow-hidden">
          <iframe 
            data-id="nbi-widget" 
            src={SITE_CONFIG.links.giftCardIframe}
            className="w-full h-[800px] border-none"
            title="Now Book It Gift Card Widget"
          />
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
           <h3 className="text-2xl font-mono mb-4">A Taste of Queensberry</h3>
           <p className="text-dark/60 text-sm leading-relaxed">
             Our digital gift cards are delivered instantly via email and can be used for any dining experience at Popina. 
           </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div id="popina-app" className="bg-[#F5F2ED] text-dark font-sans selection:bg-[#CC5300]/30 antialiased min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/celebrations" element={<CelebrationsPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/gift-cards" element={<GiftCardPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
