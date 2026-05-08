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

// --- Constants & Types ---

const COLORS = {
  primary: '#5A5A40', // Olive green from reference
  bg: '#F5F2ED',      // Warm off-white
  dark: '#1C1C1C',    // Charcoal dark
  accent: '#A49F86',  // Muted sage
  cta: '#FF583F',     // Vibrant Orange-Red
};

const NAV_LINKS = [
  { name: 'Reservations', href: '/reservations' },
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
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

const Logo = () => (
  <div id="nav-logo" className="flex items-center group cursor-pointer">
    <img 
      src="/popina-logo.jpg" 
      alt="Popina - Relaxed Rural Restaurant in Queensberry" 
      className="h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-105"
      referrerPolicy="no-referrer"
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
              className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-dark/70 hover:text-[#FF583F] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            id="nav-cta" 
            to="/reservations"
            className="bg-[#FF583F] hover:bg-dark text-white px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-md active:scale-95 text-center ml-4"
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
              className="bg-[#FF583F] text-white py-4 rounded-sm text-center"
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
                className="mt-2 bg-[#E64D35] text-white px-10 py-5 rounded-sm text-[12px] font-extrabold tracking-[0.4em] uppercase hover:bg-dark hover:scale-105 transition-all inline-block w-fit text-center shadow-xl hover:shadow-2xl active:scale-95"
              >
                Buy a Gift Card
              </Link>
              
              <div className="pt-4">
                <h5 className="text-dark mb-4 text-[10px] tracking-[0.3em] font-extrabold uppercase">Follow Us</h5>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/popina_queensberry" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-dark/10 flex items-center justify-center text-dark/60 hover:bg-dark hover:text-white transition-all">
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
              <p className="opacity-80">26 Pukerangi Drive, Queensberry 9383</p>
            </div>
            <div>
              <h5 className="text-dark mb-4 text-[10px] tracking-[0.3em] font-extrabold uppercase">Phone</h5>
              <p className="opacity-80">+64 274 110 697</p>
            </div>
            <div>
              <h5 className="text-dark mb-4 text-[10px] tracking-[0.3em] font-extrabold uppercase text-center">Opening Hours</h5>
              <div className="space-y-1 opacity-80">
                <p className="mb-2">Thursday - Sunday</p>
                <p>11:00 am - Last Seating 7:30 pm</p>
                <p className="italic mt-6 font-medium tracking-tight">15% Surcharge on public holidays</p>
              </div>
            </div>
          </div>
        </div>

        <div id="footer-perks" className="bg-[#A49F86]/20 p-8 lg:p-12 border border-dark/5 flex flex-col justify-center max-w-md lg:max-w-none mx-auto lg:mx-0">
          <h4 className="text-2xl lg:text-3xl font-mono mb-6 text-dark/90 leading-tight">Enjoy exclusive perks, just for our community.</h4>
          <p className="text-dark/60 text-[11px] font-medium leading-[1.8] mb-10 tracking-wide">
            Join our family for happy hours specials, first access to community events, and always in the know. No fees, just good times.
          </p>
          <button className="w-full bg-[#FF583F] text-white py-5 rounded-sm text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-dark transition-all shadow-xl active:scale-[0.98]">
            Join Now
          </button>
        </div>
      </div>

      <div className="border-t border-dark/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-dark/40 font-bold text-center gap-6">
        <div className="flex space-x-8">
          <a href="#" className="hover:text-dark transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-dark transition-colors">Terms of Service</a>
        </div>
        <p>© 2026 POPINA. HANDCRAFTED WITH SOUL BY 8TWENTY.</p>
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
            src="/popina-hero.jpg" 
            alt="Popina Rural Modern Restaurant at Golden Hour" 
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
                  <Star key={i} size={12} className="fill-[#FF583F] text-[#FF583F]" />
                ))}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white">5-Star Google Reviews</span>
            </div>

            <span className="text-[#FF583F] uppercase tracking-[0.5em] text-[15px] lg:text-[18px] font-extrabold block mb-8 drop-shadow-sm">
              FOR LOCALS, FAMILIES, AND TRAVELERS
            </span>
            
            <h1 className="text-4xl lg:text-7xl font-mono font-bold leading-[1.1] tracking-tight drop-shadow-lg">
              A relaxed rural restaurant <br className="hidden lg:block" /> serving honest food & <br className="hidden lg:block" /> genuine hospitality.
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-40 lg:mt-64 flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link 
                to="/reservations"
                className="bg-[#FF583F] text-white px-14 py-5 rounded-sm text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-[#E64D35] transition-all shadow-2xl hover:scale-105 active:scale-95 text-center"
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
        {/* Faded Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <img 
            src="/popina-logo.jpg" 
            alt="" 
            className="w-[80%] max-w-5xl h-auto grayscale" 
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-8">Welcome to Popina</span>
            <h2 className="text-3xl lg:text-6xl font-script italic text-dark/90 leading-tight mb-12">
              Popina is a modern café and evening restaurant built around honest food, genuine hospitality, and respect for where good things come from.
            </h2>
            <div className="space-y-6 text-dark/60 text-lg lg:text-xl font-medium leading-relaxed max-w-3xl mx-auto italic">
              <p>
                We’re creating a space where people can slow down, connect, and enjoy hospitality that feels thoughtful, comforting, and real.
              </p>
              <p className="text-[#FF583F] font-bold uppercase tracking-widest text-[11px] not-italic mt-8">
                A quick coffee, a long lunch, or dinner shared with friends.
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
            href="https://www.google.com/maps/dir/?api=1&destination=26+Pukerangi+Drive,+Queensberry+9383" 
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
                src="/popina-localspot.jpg" 
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
            <UtensilsCrossed size={40} className="text-[#FF583F] mb-8" />
            <h3 className="text-2xl font-mono mb-6">View Menu</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              Discover real food lovingly prepared with quality ingredients for your pleasure
            </p>
            <Link 
              to="/reservations"
              className="bg-[#FF583F] text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all text-center"
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
            <Calendar size={40} className="text-[#FF583F] mb-8" />
            <h3 className="text-2xl font-mono mb-6">Book a Table</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              Settle in for genuine hospitality in our relaxed rural setting
            </p>
            <Link 
              to="/reservations"
              className="bg-[#FF583F] text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all text-center"
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
            href="https://www.instagram.com/popina_queensberry"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8 }}
            className="bg-[#E9E5DE] p-10 px-12 flex flex-col items-center text-center justify-center shadow-sm"
          >
            <Info size={40} className="text-[#FF583F] mb-8" />
            <h3 className="text-2xl font-mono mb-6">Current Events</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              From Live Music to community gathering - check out whats on at the Popina corner
            </p>
            <div className="bg-[#FF583F] text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all">
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
            <Wine size={40} className="text-[#FF583F] mb-8" />
            <h3 className="text-2xl font-mono mb-6">Celebrations</h3>
            <p className="text-dark/50 text-sm mb-10 leading-relaxed font-medium">
              Got a celebration coming up? Let us host your next special moment.
            </p>
            <Link 
              to="/celebrations"
              className="bg-[#FF583F] text-white w-full py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-dark transition-all text-center"
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
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-extrabold block mb-6">Testimonials</span>
            <h2 className="text-4xl lg:text-6xl font-mono text-dark/90">Notes from the Table</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-dark/10 overflow-hidden border border-dark/10 shadow-2xl">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px">
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
                        <Star key={i} size={14} className="fill-[#FF583F] text-[#FF583F]" />
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
              <div className="bg-white overflow-hidden aspect-square md:aspect-auto h-80 md:h-auto border-t md:border-t-0 md:border-l border-dark/10 group">
                <Image 
                  src="/popina-view.jpg" 
                  alt="A beautifully presented seasonal dish and a glass of wine, showcasing Popina's honest food and hospitality" 
                  aspectRatio="w-full h-full"
                  className="group-hover:scale-105 transition-transform duration-[3s]"
                />
              </div>
            </div>

            {/* Vertical Profile Image Overlay */}
            <div className="lg:col-span-4 h-[600px] lg:h-auto relative group overflow-hidden">
              <Image 
                src="/popina-southview.jpg" 
                alt="Stunning southern landscape view from the Popina restaurant building, showing the iconic New Zealand rural scenery" 
                aspectRatio="w-full h-full"
                className="group-hover:scale-105 transition-transform duration-[3s]"
              />
              {/* Removed overlay text as requested */}
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
              href="https://www.google.com/search?sca_esv=c17abc454b143b6a&rlz=1C5CHFA_enNZ981NZ982&sxsrf=ANbL-n7YeAHD7_4jY9KZBDcuV0YD0yCohg:1778231860360&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOS5lnDTDnrwLSICulQqfj4pjR1wQXlzPZo7BQxHPoRpBRfroMt8_KSB5w43IdL9F_jhRE1DjoBUePxiFlNjSQt06tk1E&q=Popina+Reviews&sa=X&ved=2ahUKEwjs_vDyramUAxXoVPUHHZVKEusQ0bkNegQIKxAH&biw=1358&bih=707&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#FF583F] font-bold uppercase tracking-[0.3em] text-[10px] hover:gap-4 transition-all"
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
          <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-6">Reservations</span>
          <h1 className="text-5xl lg:text-8xl font-mono font-bold text-dark/90 mb-8">Book Your Table</h1>
          <p className="text-dark/50 text-lg lg:text-xl max-w-2xl mx-auto font-medium italic">
            Join us for honest food and genuine hospitality in the heart of rural Queensberry. 
            We look forward to welcoming you to the Popina corner.
          </p>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-sm shadow-xl border border-dark/5 overflow-hidden">
          <iframe 
            data-id="nbi-widget" 
            src="https://bookings.nowbookit.com/?accountid=159faaf0-9137-4042-9224-bcbb3f90a2d9&venueid=14462&theme=light&colors=hex,80cbc4,00695c&font=Montserrat"
            className="w-full h-[800px] border-none"
            title="Now Book It Reservation Widget"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
           <div>
             <h3 className="text-2xl font-mono mb-4">Groups & Celebrations</h3>
              <p className="text-dark/60 text-sm leading-relaxed mb-6">
                For groups larger than 12 or to talk to us about hosting your next private event, please view our celebrations page or get in touch on +64 274 110 697
              </p>
             <Link 
               to="/celebrations"
               className="text-[#FF583F] font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:gap-3 transition-all mx-auto md:mx-0"
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
          <span className="text-[#FF583F] uppercase tracking-[0.6em] text-[10px] font-extrabold block mb-6">Gift Cards</span>
          <h1 className="text-5xl lg:text-8xl font-mono font-bold text-dark/90 mb-8">Share the Love</h1>
          <p className="text-dark/50 text-lg lg:text-xl max-w-2xl mx-auto font-medium italic">
            The perfect gift for any occasion. Treat your friends and family to the Popina experience.
          </p>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-sm shadow-xl border border-dark/5 overflow-hidden">
          <iframe 
            data-id="nbi-widget" 
            src="https://giftcards.nowbookit.com/cards?accountid=159faaf0-9137-4042-9224-bcbb3f90a2d9&venueid=14462&theme=light&accent=95,124,138"
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
      <div id="popina-app" className="bg-[#F5F2ED] text-dark font-sans selection:bg-[#FF583F]/30 antialiased min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
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
