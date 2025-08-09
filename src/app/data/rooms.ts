import { RoomInterface } from '@/interfaces/rooms'

export const rooms: RoomInterface[] = [
  {
    id: 'duplicated-vip-1',
    imagePath: '/images/habitaciones/vip-1/houses-demo-1.webp',
    name: 'VIP 1',
    isFeatured: true,
    shortDescription:
      'It features two en-suite bedrooms on the ground floor, a private bathroom, and a small inner patio.',
    longDescription:
      'This unit offers a comfortable and private stay, with two en-suite bedrooms on the ground floor—one with a sitting area and small inner patio, and the other with views of the pool. Both rooms include generous closet space, a safe, and LCD TV. Upstairs, guests can enjoy a spacious common area featuring a fully equipped kitchen, dining room, lounge, and a panoramic balcony or terrace with scenic mountain views.',
    url: '/houses/vip-1',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'duplicated-vip-2',
    imagePath: '/images/habitaciones/vip-2/houses-demo-2.webp',
    name: 'VIP 2',
    isFeatured: true,
    shortDescription:
      'It features two en-suite bedrooms on the ground floor, a private bathroom, and a small interior patio.',
    longDescription:
      'This unit offers a comfortable and private stay with two en-suite bedrooms on the ground floor, each with its own bathroom. One includes access to a small interior patio, while the other overlooks the pool area. The upper level features a spacious social area with a fully equipped kitchen, dining space, living room, and a panoramic balcony or terrace.',
    url: '/houses/vip-2',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'duplicated-boutique-3',
    imagePath: '/images/habitaciones/3-4-5/houses-demo-3.webp',
    name: '3',
    isFeatured: false,
    shortDescription:
      'Includes a cozy suite on the ground floor and a private balcony with breathtaking views of the surrounding mountains.',
    longDescription:
      'The house offers a comfortable and exclusive stay, featuring two en-suite bedrooms on the ground floor, each with its own private bathroom. The rooms are equipped with spacious closets, a safe, and a flat-screen TV. Upstairs, you will find a bright and inviting social area with a fully equipped kitchen, dining space, and a panoramic balcony offering scenic mountain views.',
    url: '/houses/boutique-3',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'duplicated-boutique-4-5',
    imagePath: '/images/habitaciones/3-4-5/houses-demo-4.webp',
    name: '4 & 5',
    isFeatured: false,
    shortDescription:
      'These units feature two comfortable en-suite bedrooms on the ground floor. Upstairs, you will find the living area and kitchen.',
    longDescription:
      'This house offers a comfortable and exclusive accommodation experience, featuring two ground-floor suites, each with its own private bathroom. The rooms are equipped with spacious closets, a safe, and a flat-screen TV. Upstairs, you will find an inviting social area with a living room, a fully equipped kitchen, a dining space, and a panoramic balcony.',
    url: '/houses/boutique-4-5',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'duplicated-boutique-6',
    imagePath: '/images/habitaciones/6/houses-demo-6.webp',
    name: '6',
    isFeatured: false,
    shortDescription:
      'This two-story house features a cozy en-suite bedroom on the ground floor with generous closet space.',
    longDescription:
      'The ground floor includes a comfortable en-suite bedroom with spacious built-in closets. The upper floor offers a bright and open social area with a fully equipped kitchen, dining space, living room, and a panoramic balcony. A calm and functional space designed for a relaxing stay.',
    url: '/houses/boutique-6',
    persons: 2,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'duplicated-boutique-7-10',
    imagePath: '/images/habitaciones/7-10/houses-demo-7.webp',
    name: '7-10',
    isFeatured: false,
    shortDescription:
      'These three houses share the same layout and feature two comfortable en-suite bedrooms on the ground floor, each with a private bathroom and access to a small internal patio.',
    longDescription:
      'Designed for a relaxing stay, these houses offer two en-suite bedrooms on the ground floor, each with a private bathroom. They are equipped with spacious closets, a safe, and television with satellite service. The upper floor includes a large open-concept area with a kitchen, dining room, and living space, plus a balcony or terrace.',
    url: '/houses/boutique-7-10',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'vip-1',
    imagePath: '/images/habitaciones/vip-1/houses-demo-1.webp',
    name: 'VIP 1',
    isFeatured: true,
    shortDescription:
      'It features two en-suite bedrooms on the ground floor, a private bathroom, and a small inner patio.',
    longDescription:
      'This unit offers a comfortable and private stay, with two en-suite bedrooms on the ground floor—one with a sitting area and small inner patio, and the other with views of the pool. Both rooms include generous closet space, a safe, and LCD TV. Upstairs, guests can enjoy a spacious common area featuring a fully equipped kitchen, dining room, lounge, and a panoramic balcony or terrace with scenic mountain views.',
    url: '/houses/vip-1',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'vip-2',
    imagePath: '/images/habitaciones/vip-2/houses-demo-2.webp',
    name: 'VIP 2',
    isFeatured: true,
    shortDescription:
      'It features two en-suite bedrooms on the ground floor, a private bathroom, and a small interior patio.',
    longDescription:
      'This unit offers a comfortable and private stay with two en-suite bedrooms on the ground floor, each with its own bathroom. One includes access to a small interior patio, while the other overlooks the pool area. The upper level features a spacious social area with a fully equipped kitchen, dining space, living room, and a panoramic balcony or terrace.',
    url: '/houses/vip-2',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'boutique-3',
    imagePath: '/images/habitaciones/3-4-5/houses-demo-3.webp',
    name: '3',
    isFeatured: false,
    shortDescription:
      'Includes a cozy suite on the ground floor and a private balcony with breathtaking views of the surrounding mountains.',
    longDescription:
      'The house offers a comfortable and exclusive stay, featuring two en-suite bedrooms on the ground floor, each with its own private bathroom. The rooms are equipped with spacious closets, a safe, and a flat-screen TV. Upstairs, you will find a bright and inviting social area with a fully equipped kitchen, dining space, and a panoramic balcony offering scenic mountain views.',
    url: '/houses/boutique-3',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'boutique-4-5',
    imagePath: '/images/habitaciones/3-4-5/houses-demo-4.webp',
    name: '4 & 5',
    isFeatured: false,
    shortDescription:
      'These units feature two comfortable en-suite bedrooms on the ground floor. Upstairs, you will find the living area and kitchen.',
    longDescription:
      'This house offers a comfortable and exclusive accommodation experience, featuring two ground-floor suites, each with its own private bathroom. The rooms are equipped with spacious closets, a safe, and a flat-screen TV. Upstairs, you will find an inviting social area with a living room, a fully equipped kitchen, a dining space, and a panoramic balcony.',
    url: '/houses/boutique-4-5',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'boutique-6',
    imagePath: '/images/habitaciones/6/houses-demo-6.webp',
    name: '6',
    isFeatured: false,
    shortDescription:
      'This two-story house features a cozy en-suite bedroom on the ground floor with generous closet space.',
    longDescription:
      'The ground floor includes a comfortable en-suite bedroom with spacious built-in closets. The upper floor offers a bright and open social area with a fully equipped kitchen, dining space, living room, and a panoramic balcony. A calm and functional space designed for a relaxing stay.',
    url: '/houses/boutique-6',
    persons: 2,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  },
  {
    id: 'boutique-7-10',
    imagePath: '/images/habitaciones/7-10/houses-demo-7.webp',
    name: '7-10',
    isFeatured: false,
    shortDescription:
      'These three houses share the same layout and feature two comfortable en-suite bedrooms on the ground floor, each with a private bathroom and access to a small internal patio.',
    longDescription:
      'Designed for a relaxing stay, these houses offer two en-suite bedrooms on the ground floor, each with a private bathroom. They are equipped with spacious closets, a safe, and television with satellite service. The upper floor includes a large open-concept area with a kitchen, dining room, and living space, plus a balcony or terrace.',
    url: '/houses/boutique-7-10',
    persons: 4,
    services: [
      {
        iconPath: '/images/icons/services-bed-qs.svg',
        name: '1 Queen Size Bed or 2 Single Beds'
      },
      { iconPath: '/images/icons/services-pool.svg', name: 'Seasonal Pool' },
      {
        iconPath: '/images/icons/services-jacuzzi.png',
        name: 'Heated Jacuzzi'
      },
      { iconPath: '/images/icons/services-bikes.svg', name: 'Touring Bicycles' }
    ],
    gallery: [
      '/images/habitaciones/gallery/1.png',
      '/images/habitaciones/gallery/2.png',
      '/images/habitaciones/gallery/3.png',
      '/images/habitaciones/gallery/4.png',
      '/images/habitaciones/gallery/5.png',
      '/images/habitaciones/gallery/6.png'
    ]
  }
]
