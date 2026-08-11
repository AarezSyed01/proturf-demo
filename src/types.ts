export interface BookingFormData {
  sport: 'turf' | 'pickleball' | 'both';
  date: string;
  timeSlot: string;
  playerName: string;
  phone: string;
  playersCount?: string;
  specialNotes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  quote: string;
  badge?: string;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'turf' | 'cricket' | 'football' | 'pickleball' | 'ambience';
  imageUrl: string;
  description: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
}

export interface WhyUsFeature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
