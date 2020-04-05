import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

import NavItem from './NavItem'

const Layout = (props) => {
  const router = useRouter()

  return (
    <div className="flex flex-col w-screen h-screen font-sans bg-gray-900 sm:flex-row">
      {router.pathname !== '/' && (
        <motion.nav
          key="desktopNav"
          transition={{ duration: 1.2 }}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          className="flex-col items-center hidden w-1/5 text-white bg-gray-800 shadow-md sm:flex"
        >
          <ul className="w-full">
            <NavItem href="/" text="Home" />
            <NavItem
              active={router.pathname === '/about_me'}
              href="/about_me"
              text="About me"
            />
            <NavItem
              active={router.pathname === '/blog'}
              href="/blog"
              text="Blog"
            />
          </ul>
        </motion.nav>
      )}
      {router.pathname !== '/' ? (
        <motion.div
          key="content"
          transition={{ duration: 1.2 }}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ opacity: 0 }}
          className="w-full h-full p-8"
        >
          {props.children}
        </motion.div>
      ) : (
        <div className="w-full h-full">{props.children}</div>
      )}
      {router.pathname !== '/' && (
        <div className="block sm:hidden">
          <motion.nav
            key="mobileNav"
            transition={{ duration: 0.5 }}
            initial={{ y: 3000 }}
            animate={{ y: 0 }}
            exit={{ y: 3000 }}
            className="w-full h-32 text-white bg-gray-800 shadow-md"
          >
            <ul className="flex flex-row items-center justify-between h-full">
              <NavItem href="/" text="Home" />
              <NavItem
                active={router.pathname === '/about_me'}
                href="/about_me"
                text="About me"
              />
              <NavItem
                active={router.pathname === '/blog'}
                href="/blog"
                text="Blog"
              />
            </ul>
          </motion.nav>
        </div>
      )}
    </div>
  )
}

export default Layout
