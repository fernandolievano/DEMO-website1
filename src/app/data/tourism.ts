import { TourismInterface } from '@/interfaces/tourism'

export const tourismGallery: string[] = [
  '/images/tourism/1.webp',
  '/images/tourism/2.webp',
  '/images/tourism/3.webp',
  '/images/tourism/4.webp',
  '/images/tourism/7.webp',
  '/images/tourism/5.webp',
  '/images/tourism/6.webp',
  '/images/tourism/8.webp',
  '/images/tourism/14.webp',
  '/images/tourism/9.webp',
  '/images/tourism/10.webp',
  '/images/tourism/11.webp',
  '/images/tourism/12.webp',
  '/images/tourism/13.webp'
]

export const tourismData: TourismInterface[] = [
  {
    id: 1,
    title: 'Historic Old Town Walk',
    slug: 'historic-old-town-walk',
    featured: false,
    cover: {
      src: '/images/tourism/tourism_demo_1.webp',
      alt: 'old town walk'
    },
    description:
      'Discover charming streets lined with traditional architecture, artisanal shops, and cozy cafés. Ideal for a relaxed afternoon exploring culture and history.',
    gallery: [
      {
        src: '/images/tourism/12.webp',
        alt: ''
      },
      {
        src: '/images/tourism/4.webp',
        alt: ''
      },
      {
        src: '/images/tourism/6.webp',
        alt: ''
      }
    ]
  },
  {
    id: 2,
    title: 'Mountain Panorama Trail',
    slug: 'mountain-panorama-trail',
    featured: true,
    cover: {
      src: '/images/tourism/tourism_demo_2.webp',
      alt: ''
    },
    cover_featured: {
      src: '/images/tourism/tourism_demo_2_featured.webp',
      alt: ''
    },
    description:
      'Enjoy breathtaking panoramic views on a scenic hike through high-altitude paths surrounded by nature and fresh air.',
    gallery: [
      {
        src: '/images/tourism/1.webp',
        alt: ''
      },
      {
        src: '/images/tourism/3.webp',
        alt: ''
      },
      {
        src: '/images/tourism/7.webp',
        alt: ''
      },
      {
        src: '/images/tourism/11.webp',
        alt: ''
      }
    ]
  },
  {
    id: 3,
    title: 'Local Artisan Market',
    slug: 'local-artisan-market',
    featured: false,
    cover: {
      src: '/images/tourism/tourism_demo_3.webp',
      alt: ''
    },
    description:
      'Browse unique handmade crafts, textiles, and souvenirs while experiencing the vibrant atmosphere of a traditional marketplace.',
    gallery: [
      {
        src: '/images/tourism/tourism_demo_3.webp',
        alt: ''
      },
      {
        src: '/images/tourism/4.webp',
        alt: ''
      }
    ]
  },
  {
    id: 4,
    title: 'Riverside Picnic Area',
    slug: 'riverside-picnic-area',
    featured: true,
    cover: {
      src: '/images/tourism/tourism_demo_4.webp',
      alt: ''
    },
    cover_featured: {
      src: '/images/tourism/tourism_demo_4_featured.webp',
      alt: ''
    },
    description:
      'Spend a peaceful day by the river, enjoying shaded green spaces perfect for picnics, reading, or simply relaxing while listening to the sound of flowing water.',
    gallery: [
      {
        src: '/images/tourism/9.webp',
        alt: ''
      },
      {
        src: '/images/tourism/14.webp',
        alt: ''
      },
      {
        src: '/images/tourism/2.webp',
        alt: ''
      }
    ]
  },
  {
    id: 5,
    title: 'Cultural Heritage Museum',
    slug: 'cultural-heritage-museum',
    featured: false,
    cover: {
      src: '/images/tourism/tourism_demo_5.webp',
      alt: ''
    },
    description:
      "Explore exhibitions showcasing the region's history, art, and traditions, with interactive displays for visitors of all ages.",
    gallery: [
      {
        src: '/images/tourism/12.webp',
        alt: ''
      },
      {
        src: '/images/tourism/6.webp',
        alt: ''
      },
      {
        src: '/images/tourism/tourism_demo_5.webp',
        alt: ''
      }
    ]
  },
  {
    id: 6,
    title: 'Botanical Garden Walk',
    slug: 'botanical-garden-walk',
    featured: false,
    cover: {
      src: '/images/tourism/tourism_demo_6.webp',
      alt: ''
    },
    description:
      'Wander through beautifully maintained gardens featuring a wide variety of plants and flowers from different climates and regions.',
    gallery: [
      {
        src: '/images/tourism/11.webp',
        alt: ''
      },
      {
        src: '/images/tourism/tourism_demo_6.webp',
        alt: ''
      }
    ]
  },
  {
    id: 7,
    title: 'Sunset Viewpoint',
    slug: 'sunset-viewpoint',
    featured: true,
    cover: {
      src: '/images/tourism/tourism_demo_7.webp',
      alt: ''
    },
    cover_featured: {
      src: '/images/tourism/tourism_demo_7_featured.webp',
      alt: ''
    },
    description:
      'Watch the sky transform into vibrant shades of orange and pink from a peaceful vantage point overlooking the horizon.',
    gallery: [
      {
        src: '/images/tourism/tourism_demo_7.webp',
        alt: ''
      },
      {
        src: '/images/tourism/tourism_demo_7_featured.webp',
        alt: ''
      },
      {
        src: '/images/tourism/3.webp',
        alt: ''
      },
      {
        src: '/images/tourism/7.webp',
        alt: ''
      }
    ]
  },
  {
    id: 8,
    title: 'Adventure Cycling Route',
    slug: 'adventure-cycling-route',
    featured: false,
    cover: {
      src: '/images/tourism/tourism_demo_8.webp',
      alt: ''
    },
    description:
      'Follow a scenic cycling path that winds through gentle hills, open fields, and quiet rural roads perfect for outdoor enthusiasts.',
    gallery: [
      {
        src: '/images/tourism/tourism_demo_8.webp',
        alt: ''
      },
      {
        src: '/images/tourism/10.webp',
        alt: ''
      }
    ]
  },
  {
    id: 9,
    title: 'Riverside Walking Path',
    slug: 'riverside-walking-path',
    featured: false,
    cover: {
      src: '/images/tourism/tourism_demo_9.webp',
      alt: ''
    },
    description:
      'Stroll along a serene riverside path surrounded by lush vegetation and the calming sound of flowing water.',
    gallery: [
      {
        src: '/images/tourism/tourism_demo_7.webp',
        alt: ''
      },
      {
        src: '/images/tourism/14.webp',
        alt: ''
      },
      {
        src: '/images/tourism/2.webp',
        alt: ''
      },
      {
        src: '/images/tourism/9.webp',
        alt: ''
      }
    ]
  }
]
