import Link from 'next/link'

const NavItem = ({ href, text, active }) => (
  <li className="flex items-center justify-center w-full h-full">
    <Link href={href}>
      <a
        className={`w-full h-full p-4 hover:bg-gray-700 ${
          active ? 'bg-gray-700' : ''
        }`}
      >
        {text}
      </a>
    </Link>
  </li>
)

export default NavItem
