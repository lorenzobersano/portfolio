import Link from 'next/link'

const NavItem = ({ href, text, active }) => (
  <li className="flex items-center justify-center w-full h-full md:h-auto">
    <Link href={href}>
      <a
        className={`w-full p-4 hover:bg-gray-700 h-full flex items-center justify-center md:justify-start md:h-auto ${
          active ? 'bg-gray-700' : ''
        }`}
      >
        {text}
      </a>
    </Link>
  </li>
)

export default NavItem
