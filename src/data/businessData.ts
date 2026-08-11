import { ReviewItem, GalleryItem, FacilityItem, WhyUsFeature, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: "Pro Turf & Pro Pickleball",
  tagline: "PLAY. COMPETE. DOMINATE.",
  subtitle: "Premium Turf & Pickleball Experience in Latur",
  description: "Whether it’s a friendly match, tournament, or a competitive pickleball session, Pro Turf gives you the perfect place to play.",
  category: "Sports Club / Turf & Pickleball Facility",
  location: "LIC Office Latur Road, Subhedar Ramji Nagar, Deep Jyoti Nagar, Latur, Maharashtra 413512",
  city: "Latur, Maharashtra",
  plusCode: "CH74+4V Latur, Maharashtra",
  phoneDisplay: "070202 05220",
  phoneNumber: "+917020205220",
  phoneRaw: "07020205220",
  whatsappNumber: "917020205220",
  whatsappUrl: "https://wa.me/917020205220?text=Hi%20Pro%20Turf%20%26%20Pro%20Pickleball%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20slot.",
  googleRating: 4.9,
  reviewCount: 138,
  timings: "Open 24 Hours",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pro+Turf+%26+Pro+Pickleball+Latur+CH74%2B4V",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.45!2d76.5772!3d18.4088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzMxLjciTiA3NsKwMzQnMzcuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const FACILITIES: FacilityItem[] = [
  {
    id: "turf",
    title: "PRO TURF",
    badge: "Multi-Sport Arena",
    tagline: "Cricket & Football Turf",
    description: "Get ready for an exciting turf experience with quality playing conditions, excellent lighting and a setup designed for competitive and recreational games.",
    features: [
      "Quality Turf & Safe Surface",
      "Evening & Night Play (Bright Floodlights)",
      "Strong & High Boundary Nets",
      "Tournament Friendly Layout",
      "Smooth Slot Booking"
    ],
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Book Turf"
  },
  {
    id: "pickleball",
    title: "PRO PICKLEBALL",
    badge: "Pickleball Court",
    tagline: "Fast & Energetic Gameplay",
    description: "Step onto the court and enjoy an energetic pickleball experience with friends, family, or fellow players.",
    features: [
      "Premium Surface Court",
      "Superb Night Lighting",
      "Friendly & Competitive Matchplay",
      "Family & Group Friendly",
      "Easy Online/WhatsApp Booking"
    ],
    image: "https://images.unsplash.com/photo-1626245550262-6750346a06e9?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Book Pickleball"
  }
];

export const WHY_CHOOSE_US: WhyUsFeature[] = [
  {
    id: "exp",
    iconName: "Trophy",
    title: "Premium Playing Experience",
    description: "Quality setup designed for an enjoyable, high-energy game for players of all skill levels."
  },
  {
    id: "lights",
    iconName: "Zap",
    title: "Great Night Lighting",
    description: "Perfect atmosphere with high-lumen floodlights for comfortable evening and night matches."
  },
  {
    id: "tournament",
    iconName: "Award",
    title: "Tournament Ready",
    description: "Big and tall venue with high nets, ideal for local competitive games, leagues, and tournaments."
  },
  {
    id: "clean",
    iconName: "ShieldCheck",
    title: "Clean & Safe Environment",
    description: "Maintained with care to provide a clean, safe, and family-friendly sporting environment."
  },
  {
    id: "booking",
    iconName: "CalendarCheck",
    title: "Easy Booking",
    description: "Make enquiries and slot reservations quick and seamless via direct WhatsApp or phone call."
  },
  {
    id: "location",
    iconName: "MapPin",
    title: "Central Latur Location",
    description: "Conveniently located near LIC Office on Latur Road, Deep Jyoti Nagar, accessible from across the city."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Night Turf Action",
    category: "turf",
    imageUrl: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000&auto=format&fit=crop",
    description: "High-intensity night games under powerful LED floodlights."
  },
  {
    id: "g2",
    title: "Box Cricket Battles",
    category: "cricket",
    imageUrl: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000&auto=format&fit=crop",
    description: "Smooth turf surface for fast-paced cricket matches."
  },
  {
    id: "g3",
    title: "Football Frenzy",
    category: "football",
    imageUrl: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000&auto=format&fit=crop",
    description: "Spacious multi-sport turf ideal for 5v5 football."
  },
  {
    id: "g4",
    title: "Pickleball Court Setup",
    category: "pickleball",
    imageUrl: "https://images.unsplash.com/photo-1626245550262-6750346a06e9?q=80&w=1000&auto=format&fit=crop",
    description: "Dedicated pickleball area for fast paddle rallies."
  },
  {
    id: "g5",
    title: "Illuminated Ambience",
    category: "ambience",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop",
    description: "Big and tall surrounding nets with vibrant ambience."
  },
  {
    id: "g6",
    title: "Tournament Matches",
    category: "turf",
    imageUrl: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000&auto=format&fit=crop",
    description: "Host or join high-stakes weekend tournaments in Latur."
  },
  {
    id: "g7",
    title: "Evening Cricket Session",
    category: "cricket",
    imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1000&auto=format&fit=crop",
    description: "Perfect turf bounce and grip for evening cricket matches."
  },
  {
    id: "g8",
    title: "Pickleball Rallies",
    category: "pickleball",
    imageUrl: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1000&auto=format&fit=crop",
    description: "Fun, competitive pickleball sessions for groups and families."
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "r1",
    author: "Local Player",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Pro Turf is one of the best turfs I’ve played on. Turf quality is excellent and safe, lighting is perfect for night matches, and nets are strong.",
    badge: "Verified Google Review",
    highlight: "Safe Turf & Great Lighting"
  },
  {
    id: "r2",
    author: "Cricket Enthusiast",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Excellent cricket turf experience. The lighting is great for evening matches and the overall facilities are clean.",
    badge: "Verified Google Review",
    highlight: "Clean Facilities & Crisp Lights"
  },
  {
    id: "r3",
    author: "Tournament Organizer",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Pro Turf is one of the best places for tournament matches. Great turf quality and ambience.",
    badge: "Verified Google Review",
    highlight: "Best Turf for Tournaments"
  },
  {
    id: "r4",
    author: "Sports Enthusiast",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Latur city's best Turf for family. Staff is very cooperative, facilities are well maintained and booking is smooth.",
    badge: "Verified Google Review",
    highlight: "Family Friendly & Cooperative Staff"
  },
  {
    id: "r5",
    author: "Night Match Player",
    rating: 5,
    timeAgo: "Google Verified Review",
    quote: "Turf is big and tall with great ambience! Fantastic playing experience and night lighting is spot on.",
    badge: "Verified Google Review",
    highlight: "Big & Tall Ambience"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "What sports can I play at Pro Turf & Pro Pickleball?",
    answer: "At Pro Turf & Pro Pickleball, you can play turf games like Box Cricket and Football, as well as exciting Pickleball matches on our dedicated court."
  },
  {
    id: "faq-2",
    question: "Is Pro Turf open at night?",
    answer: "Yes! Pro Turf is open 24 hours. Our facility features powerful, bright floodlights specifically appreciated by players for night and evening matches."
  },
  {
    id: "faq-3",
    question: "How can I book a slot?",
    answer: "Booking is smooth and fast! You can directly click the WhatsApp or Call buttons on this website to enquire about live slot availability and reserve your preferred timing."
  },
  {
    id: "faq-4",
    question: "Where is Pro Turf located in Latur?",
    answer: "We are located at LIC Office Latur Road, Subhedar Ramji Nagar, Deep Jyoti Nagar, Latur, Maharashtra 413512 (Google Plus Code: CH74+4V Latur)."
  },
  {
    id: "faq-5",
    question: "Is Pro Turf suitable for hosting tournaments?",
    answer: "Yes, absolutely! Pro Turf is recognized by players and organizers as one of the best turfs in Latur for competitive matches, league events, and tournaments."
  }
];

export const TIME_SLOTS = [
  "Early Morning (6:00 AM - 8:00 AM)",
  "Morning (8:00 AM - 11:00 AM)",
  "Afternoon (11:00 AM - 4:00 PM)",
  "Evening Prime (4:00 PM - 7:00 PM)",
  "Night Prime (7:00 PM - 10:00 PM)",
  "Late Night (10:00 PM - 2:00 AM)",
  "24/7 Custom Slot"
];
