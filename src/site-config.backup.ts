/**
 * POPINA SITE CONFIGURATION BACKUP
 * 
 * This is a 'read-only' backup of your original settings.
 * If you make changes to 'site-config.ts' and want to go back to 
 * how things were, you can copy the text from this file.
 */

export const SITE_CONFIG_BACKUP = {
  // --- VISUAL IDENTITY (Colors) ---
  colors: {
    primary: '#5A5A40', // Olive green (e.g. Buttons, highlights)
    bg: '#F5F2ED',      // Warm off-white (Main background)
    dark: '#1C1C1C',    // Charcoal dark (Text and dark components)
    accent: '#A49F86',  // Muted sage
    cta: '#FF583F',     // Vibrant Orange-Red (Call to Actions)
  },

  // --- BRANDING ---
  logo: '/popina-logo.jpg',
  brandName: 'POPINA',
  tagline: 'A relaxed rural restaurant serving honest food & genuine hospitality.',
  trustBadge: '5-Star Google Reviews',

  // --- CONTACT & BUSINESS INFO ---
  contact: {
    address: '26 Pukerangi Drive, Queensberry 9383',
    phone: '+64 274 110 697',
    email: 'info@popina.co.nz',
    instagram: 'popina_queensberry',
    openingHours: {
      days: 'Thursday - Sunday',
      hours: '11:00 am - Last Seating 7:30 pm',
      note: '15% Surcharge on public holidays'
    }
  },

  // --- HOME PAGE CONTENT ---
  home: {
    hero: {
      topLabel: 'FOR LOCALS, FAMILIES, AND TRAVELERS',
      headline: 'A relaxed rural restaurant serving honest food & genuine hospitality.',
    },
    welcome: {
      label: 'Welcome to Popina',
      headline: 'Popina is a modern café and evening restaurant built around honest food, genuine hospitality, and respect for where good things come from.',
      description: 'We’re creating a space where people can slow down, connect, and enjoy hospitality that feels thoughtful, comforting, and real.',
      subDescription: 'A quick coffee, a long lunch, or dinner shared with friends.'
    },
    features: {
      menu: {
        title: 'View Menu',
        description: 'Discover real food lovingly prepared with quality ingredients for your pleasure'
      },
      booking: {
        title: 'Book a Table',
        description: 'Settle in for genuine hospitality in our relaxed rural setting'
      },
      events: {
        title: 'Current Events',
        description: 'From Live Music to community gathering - check out whats on at the Popina corner'
      },
      celebrations: {
        title: 'Celebrations',
        description: 'Got a celebration coming up? Let us host your next special moment.'
      }
    }
  },

  // --- ABOUT PAGE CONTENT ---
  about: {
    hero: {
      label: 'The Land',
      headline: 'From dry land to something living.',
      p1: 'For the past ten years, Brenda and Tony have been growing trees from seed and planting them across the property. Slowly, and with no grand performance. Just the work',
      p2: 'The vision is simple: restore the land, make it productive, and let the place become part of the experience.',
      quote: "Fruit trees. Garlic. Saffron. Gardens. Compost. Chickens. Eggs for baking. Food scraps are going back into the system.",
      p3: 'It is not sustainability as a slogan. It is a loop. A working, circular rhythm that starts with care for the land and comes back to the table.'
    },
    philosophy: {
      quote: "Not a polished city restaurant dropped into the country. Something more useful than that. A community oasis, grown from the ground up."
    },
    culinary: {
      label: 'Culinary Heart',
      headline: 'Our Food',
      p1: 'Honest dishes, fresh, simple, and seasonal.',
      p2: 'Our menus take gentle inspiration from the Mediterranean, shaped by local produce, thoughtful technique, and a love of food made to be shared. Everything is guided by simplicity, flavour, and care.'
    },
    hospitality: {
      label: 'Expertise',
      headline: 'Hospitality, with history behind it.',
      p1: 'Brenda and Tony are not new to feeding people. Before Popina, they spent more than 20 years running Wellington’s Ministry of Food, followed by a stint at Missy’s Kitchen in Wanaka.',
      p2: 'Years of kitchens, service, regulars, early mornings, late finishes, and knowing exactly when a table needs attention and when it needs to be left alone.',
      p3: 'Behind the scenes is a passionate team that cares deeply about hospitality, quality, and creating an experience that feels welcoming, relaxed, and genuine.',
      quote: "Popina is for people who like food that makes sense."
    },
    restaurant: {
      label: 'The Restaurant',
      headline: 'A restaurant with room to breathe.',
      p1: 'Seasonal produce. Proper ingredients. Simple cooking done with care. Drinks chosen with the same thought.',
      p2: 'A room where people can relax, talk, laugh, bring the family, park the boat, pull in with the horse float, or stop in after driving through Central Otago.',
      list: [
        'A place for locals.',
        'A place for travellers who want the real thing.',
        'A place for families.'
      ],
      note: 'Popina is still growing. The orchard will take time. Gardens do not hurry because you have a launch date. Trees are famously bad at respecting marketing timelines.'
    }
  },

  // --- CELEBRATIONS CONTENT ---
  celebrations: {
    hero: {
      label: 'Exclusive Events',
      headline: 'Gatherings that feel generous.',
      description: 'Popina is made for moments that matter. Exclusive use of the venue gives you the space to settle in, spread out, and make the place your own.'
    },
    details: {
      headline: 'Whether it is a long lunch, a milestone birthday, or a wedding welcome dinner.',
      p1: 'The venue can host up to 80 guests seated or 120 guests cocktail-style, with plenty of room for good food, good wine, and the kind of conversation that gets better as the afternoon rolls on.',
      p2: 'Food is served family-style to the table, designed for sharing. Generous, seasonal, and without too much fuss—exactly how we like to eat.',
      p3: 'Menus and beverages can be customised to suit the occasion, from a relaxed shared feast to a more considered celebration with selected wines and local beers.'
    },
    testimonial: {
      quote: "“What can I say, your Team smashed Saturday out of the park!!!! The venue, the service, the food, just everything was faultless. Our day could not have been more wonderful.”",
      author: "Tracey Henderson — May 2026"
    },
    sidebar: {
      capacity: '80 Seated / 120 Standing',
      catering: 'Family-style Sharing',
      setting: 'Rural Queensberry Oasis'
    },
    enquiry: {
      label: 'The Enquiry',
      headline: 'Plan your perfect day.',
      p1: 'Popina gives you the bones of a beautiful event: warm hospitality, honest food, a calm setting, and a team that knows how to make people feel well cared for.'
    }
  },

  // --- IMAGE PATHS (Update these if you upload new files) ---
  images: {
    hero: '/popina-hero.jpg',
    aboutHero1: '/popina-honey.jpg',
    aboutHero2: '/popina-saffron.jpg',
    aboutHero3: '/Popina-Food.jpg',
    aboutHero4: '/popina-preserve-3507.jpg',
    restaurantInterior: '/popina-restaurant.jpg',
    ambientHero: '/popina-hero1.jpg',
    localSpot: '/popina-localspot.jpg',
    landscapeSouth: '/popina-southview.jpg',
    foodView: '/popina-view.jpg',
  },

  // --- EXTERNAL LINKS ---
  links: {
    instagram: 'https://www.instagram.com/popina_queensberry',
    googleReviews: 'https://www.google.com/search?q=Popina+Reviews',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=26+Pukerangi+Drive,+Queensberry+9383',
    bookingIframe: 'https://bookings.nowbookit.com/?accountid=159faaf0-9137-4042-9224-bcbb3f90a2d9&venueid=14462&theme=light&colors=hex,80cbc4,00695c&font=Montserrat',
    giftCardIframe: 'https://giftcards.nowbookit.com/cards?accountid=159faaf0-9137-4042-9224-bcbb3f90a2d9&venueid=14462&theme=light&accent=95,124,138'
  }
};
