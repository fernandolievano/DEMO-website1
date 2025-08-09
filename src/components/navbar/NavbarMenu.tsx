import { navigationLinks } from '@/constants/general';
import { poppins } from '@/utils/fonts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useNavbar from '@/hooks/useNavBar';
const NavbarMenu = () => {
  const { navbarStatus, setNavbarStatus } = useNavbar();
  const currentPath = usePathname();

  return (
    <div className={`${navbarStatus ? 'h-fit  py-4 my-4 ' : ' h-0  py-0 my-0'} overflow-hidden lg:h-fit lg:my-0 lg:py-0  transition-all`}>
      <div className="flex flex-col items-end gap-4 lg:flex-row lg:items-center lg:gap-0 lg:justify-between">
        {
          navigationLinks.map(link => (
            <Link
              href={link.href}
              key={link.pageName}
              className={`${currentPath === link.href ? 'navbar-link--active' : ' font-light'} ${link.customClass} ${poppins.className}`}
              onClick={() => setNavbarStatus(false)}
            >
              <span>{link.pageName}</span>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default NavbarMenu;