import { PromotionsInterface } from '@/interfaces/promotions'

export const mockPromotions: PromotionsInterface[] = [
  {
    id: 1,
    title: 'Sunrise Getaway',
    slug: 'sunrise-getaway',
    featured: true,
    description:
      'Enjoy guided sunrise hikes, buffet breakfast, and panoramic mountain views from your room.',
    cover: {
      thumbnail: '',
      medium: '',
      large: '',
      full: 'https://picsum.photos/id/1016/2560/1440'
    },
    due_date: { from: '2025-09-01', to: '2025-09-30' },
    include: 'Buffet breakfast • Sunrise hike • Unlimited Wi-Fi',
    conditions: 'Book at least 10 days in advance',
    legals: 'Cannot be combined with other promotions; subject to availability.'
  },
  {
    id: 2,
    title: 'Wellness Weekend',
    slug: 'wellness-weekend',
    featured: false,
    description:
      'Relax for two nights with spa access, yoga classes, and a 50-minute soothing treatment.',
    cover: {
      thumbnail: '',
      medium: '',
      large: '',
      full: 'https://picsum.photos/seed/spa/1920/1080'
    },
    due_date: { from: '2025-10-05', to: '2025-10-20' },
    include: '2 nights • Unlimited spa • Yoga class • Relaxing massage',
    conditions: 'Minimum 2-night stay',
    legals: 'Free cancellation up to 48 hours before check-in.'
  },
  {
    id: 3,
    title: 'Family Adventure',
    slug: 'family-adventure',
    featured: false,
    description:
      'Family room stay with a guided trail walk and an kids’ activity kit provided.',
    cover: {
      thumbnail: '',
      medium: '',
      large: '',
      full: 'https://picsum.photos/id/1015/2560/1440'
    },
    due_date: { from: '2025-11-01', to: '2025-11-15' },
    include: 'Family room • Guided trail walk • Activity kit • Breakfast',
    conditions: 'Kids up to 12 stay free; limited capacity',
    legals: 'Valid weekends only.'
  },
  {
    id: 4,
    title: 'Romantic Retreat',
    slug: 'romantic-retreat',
    featured: true,
    description:
      'Private candlelit dinner, sparkling wine, and special room setup for two.',
    cover: {
      thumbnail: '',
      medium: '',
      large: '',
      full: 'https://picsum.photos/id/129/4910/3252'
    },
    due_date: { from: '2025-09-10', to: '2025-09-25' },
    include: 'Candlelit dinner • Sparkling wine • VIP room amenities',
    conditions: 'Book at least 3 days in advance',
    legals: 'Adults only; not combinable.'
  },
  {
    id: 5,
    title: 'Last-Minute Deal',
    slug: 'last-minute-deal',
    featured: false,
    description:
      'Get 20% off last-minute bookings and enjoy late check-out (subject to availability).',
    cover: {
      thumbnail: '',
      medium: '',
      large: '',
      full: 'https://picsum.photos/id/46/3264/2448'
    },
    due_date: { from: '2025-08-10', to: '2025-08-31' },
    include: '20% off • Late check-out • Free Wi-Fi',
    conditions: 'Book within 7 days of stay',
    legals: 'Non-refundable; subject to availability.'
  },
  {
    id: 6,
    title: 'Gourmet Mountain Dinner',
    slug: 'gourmet-mountain-dinner',
    featured: false,
    description:
      'Five-course gourmet menu featuring local ingredients with wine pairing included.',
    cover: {
      thumbnail: '',
      medium: '',
      large: '',
      full: 'https://picsum.photos/seed/gourmet/1920/1080'
    },
    due_date: { from: '2025-10-01', to: '2025-10-10' },
    include: '5-course menu • Wine pairing • Lounge access',
    conditions: 'Maximum 20 guests per night',
    legals: 'Transfer not included.'
  }
]
