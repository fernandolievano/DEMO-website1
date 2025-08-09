import type { AppContextValues } from '@/interfaces/general'
import { LinkInterface } from '@/interfaces/navbar'

export const DEFAULT_APP_CONTEXT_VALUES: AppContextValues = {
  navbarStatus: false,
  setNavbarStatus: () => {}
}
export const PROMOTIONS_URL = process.env.WP_PROMOTIONS_URL as string

export const navigationLinks: LinkInterface[] = [
  {
    href: '/',
    pageName: 'Home',
    customClass: 'navbar-link'
  },
  {
    href: '/about',
    pageName: 'About Us',
    customClass: 'navbar-link'
  },
  {
    href: '/houses',
    pageName: 'Our Houses',
    customClass: 'navbar-link'
  },
  {
    href: '/services',
    pageName: 'Services',
    customClass: 'navbar-link'
  },
  {
    href: '/offers',
    pageName: 'Offers',
    customClass: 'navbar-link'
  },
  {
    href: '/restaurant',
    pageName: 'Restaurant',
    customClass: 'navbar-link'
  },
  {
    href: '/tourism',
    pageName: 'Things to Do',
    customClass: 'navbar-link'
  }
]
