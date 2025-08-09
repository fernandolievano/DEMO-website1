interface ImageInterface {
  src: string
  alt: string
}

export interface TourismInterface {
  id: number
  title: string
  slug: string
  featured: boolean
  cover: ImageInterface
  cover_featured?: ImageInterface
  description: string
  gallery: ImageInterface[]
}
