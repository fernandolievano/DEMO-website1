interface CoverInterface {
  thumbnail: string
  medium: string
  large: string
  full: string
}
interface DateInterface {
  from: string
  to: string
}

export interface PromotionsInterface {
  id: number
  title: string
  slug: string
  featured: boolean
  description: string
  cover: CoverInterface
  due_date: DateInterface
  include: string
  conditions: string
  legals: string
}
