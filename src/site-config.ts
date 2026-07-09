/**
 * POPINA SITE CONFIGURATION
 */

export const getAssetUrl = (path: string): string => {
  const base = (import.meta as any).env?.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const SITE_CONFIG = {
  colors: {
    primary: '#5A5A40',
    bg: '#F5F2ED',
    dark: '#1C1C1C',
    accent: '#A49F86',
    cta: '#CC5300',
  },

  logo: '/popina-logo.jpg?v=9',
  brandName: 'POPINA',
  tagline: 'A relaxed rural restaurant serving honest food & genuine hospitality.',
  trustBadge: '5-Star Google Reviews',

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

  home: {
    hero: {
      topLabel: 'FOR LOCALS, FAMILIES AND TRAVELERS',
      headline: 'A relaxed rural restaurant serving honest food & genuine hospitality.',
    },
    welcome: {
      label: 'Welcome to Popina',
      headline: 'Popina is a modern café and evening restaurant built around honest food, genuine hospitality and respect for where good things come from.',
      description: "We've created a space where people can slow down, connect and enjoy hospitality that feels thoughtful, comforting and real.",
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

  about: {
    hero: {
      label: 'The Land',
      headline: 'From dry land to something living.',
      p1: 'For the past ten years, Brenda and Tony have been restoring the Pukerangi land — planting trees, building soil health, and developing productive gardens, orchards, and groves across the property.',
      p2: 'Their vision is simple: restore the land, make it productive, and let it become an integral part of the Popina experience. The Productive Patch supplies saffron, garlic, vegetables and herbs, alongside a heritage cider apple orchard, olive grove, feijoas and nut trees.',
      quote: "Fruit trees. Garlic. Saffron. Gardens. Compost. Chickens. Eggs for baking. Food scraps. More compost. Soil fertility. And around we go again.",
      p3: "This isn't sustainability as a slogan. It's a working cycle — where care for the land comes back through the kitchen, and ultimately becomes part of the experience at Popina.",
    },
    philosophy: {
      quote: "A community oasis, grown from the ground up."
    },
    culinary: {
      label: 'Culinary Heart',
      headline: 'Our Food',
      p1: 'Honest dishes, fresh, simple and seasonal.',
      p2: 'Our menus take gentle inspiration from the Mediterranean, shaped by local produce, thoughtful technique and a love of food made to be shared. Everything is guided by simplicity, flavour and care.'
    },
    hospitality: {
      label: 'Expertise',
      headline: 'Hospitality, with history behind it.',
      p1: "Brenda and Tony are not new to feeding people. Before Popina, they spent more than 20 years running Wellington's Ministry of Food, followed by a stint at Missy's Kitchen in Wanaka.",
      p2: 'Years of kitchens, service, regulars, early mornings, late finishes and knowing exactly when a table needs attention and when it needs to be left alone.',
      p3: 'Behind the scenes is a passionate team that cares deeply about hospitality, quality and creating an experience that feels welcoming, relaxed and genuine.',
      quote: "Popina is for people who like food that makes sense."
    },
    restaurant: {
      label: 'The Restaurant',
      headline: 'A restaurant with room to breathe.',
      p1: 'Seasonal produce. Thoughtfully selected local wines and beers. Simple cooking crafted with care. Cocktails and great coffee chosen with the same thinking.',
      p2: 'A room where people can relax, talk, laugh, bring the family, park the boat, pull in with the horse float, or stop in after driving through Central Otago.',
      list: [
        'A place for locals.',
        'A place for travellers who want the real thing.',
        'A place for families.'
      ],
      note: 'Popina is still growing. The orchard will take time. Gardens do not hurry because you have a launch date. Trees are famously bad at respecting marketing timelines.'
    }
  },

  celebrations: {
    hero: {
      label: 'Exclusive Events',
      headline: 'Gatherings that feel generous.',
      description: 'Popina is made for moments that matter. Exclusive use of the venue gives you the space to settle in, spread out and make the place your own.'
    },
    details: {
      headline: 'Whether it is a long lunch, a milestone birthday, or a wedding welcome dinner.',
      p1: 'The venue can host up to 80 guests seated or 120 guests cocktail-style, with plenty of room for good food, good wine and the kind of conversation that gets better as the afternoon rolls on.',
      p2: 'Food is served family-style to the table, designed for sharing. Generous, seasonal and without too much fuss — exactly how we like to eat.',
      p3: 'Menus and beverages can be customised to suit the occasion, from a relaxed shared feast to a more considered celebration with selected wines and local beers.'
    },
    testimonial: {
      quote: "What can I say, your Team smashed Saturday out of the park!!!! The venue, the service, the food, just everything was faultless. Our day could not have been more wonderful.",
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
      p1: 'Popina gives you the bones of a beautiful event: warm hospitality, honest food, a calm setting and a team that knows how to make people feel well cared for.'
    }
  },

  menu: {
    hero: {
      label: 'On the Table',
      headline: 'The Menu',
      disclosure: 'Please note: our menu is subject to change due to seasonality, produce availability and pricing fluctuations. We cook with what is fresh, honest and available in the moment.'
    }
  },

  images: {
    hero: '/popina-hero.jpg?v=10',
    aboutHero1: '/popina-honey.jpg?v=9',
    aboutHero2: '/popina-saffron.jpg?v=9',
    aboutHero3: '/Popina-Food.jpg?v=9',
    aboutHero4: '/popina-preserve-3507.jpg?v=9',
    restaurantInterior: '/popina-restaurant.jpg?v=9',
    ambientHero: '/popina-hero1.jpg?v=9',
    localSpot: '/popina-localspot.jpg?v=9',
    landscapeSouth: '/popina-southview.jpg?v=9',
    foodView: '/popina-view.jpg?v=9',
    menu: '/popina-menu.jpg?v=9',
    wedding: '/popina-wedding.jpg?v=9',
    hospo: '/popina-hospo.jpg?v=9',
  },

  links: {
    instagram: 'https://www.instagram.com/popina_queensberry',
    googleReviews: 'https://www.google.com/search?q=Popina+Reviews',
    directions: 'https://www.google.com/maps/dir/?api=1&destination=26+Pukerangi+Drive,+Queensberry+9383',
    bookingIframe: 'https://bookings.nowbookit.com/?accountid=159faaf0-9137-4042-9224-bcbb3f90a2d9&venueid=14462&theme=light&colors=hex,80cbc4,00695c&font=Montserrat',
    giftCardIframe: 'https://giftcards.nowbookit.com/cards?accountid=159faaf0-9137-4042-9224-bcbb3f90a2d9&venueid=14462&theme=light&accent=95,124,138'
  }
};
