import Link from 'next/link'
import { Icon } from 'components/Icon'

const NavItem = ({ href, icon, text, active, fullWidth = false }) => (
  <li
    className={`flex items-center ${
      fullWidth ? 'justify-center' : 'justify-start'
    } ${fullWidth ? 'w-full' : ''} h-full md:h-auto`}
  >
    <Link href={href}>
      <a
        className={`${
          fullWidth ? 'w-full' : ''
        } hover:bg-gray-800 h-full flex items-center ${
          fullWidth ? 'md:rounded-full py-4 px-6' : 'rounded-full p-4'
        } ${
          fullWidth ? 'justify-center' : 'justify-start'
        } md:justify-start md:h-auto text-lg sm:text-xl ${
          active ? 'bg-gray-700' : ''
        }`}
      >
        {icon && <Icon name={icon} />}
        {text && text}
      </a>
    </Link>
  </li>
)

export default NavItem
