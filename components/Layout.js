import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

import NavItem from './NavItem'

const isPathBlogPostRegex = /\/blog\/[A-Za-z0-9\-\_]+/

const Layout = (props) => {
  const router = useRouter()

  return (
    <>
      {router.pathname !== '/' && (
        <div className="block mt-6 mb-4 ml-4 md:hidden">
          <NavItem
            href={isPathBlogPostRegex.test(router.pathname) ? '/blog' : '/'}
            icon="back-arrow"
          />
        </div>
      )}
      <div className="flex flex-col font-sans bg-gray-900 md:flex-row">
        {router.pathname !== '/' && (
          <motion.nav
            key="desktopNav"
            transition={{ duration: 1.2 }}
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            exit={{ x: -1000 }}
            className="sticky flex-col items-center hidden w-1/5 px-8 pb-8 text-white md:flex"
          >
            <ul className="sticky top-0 w-full space-y-2">
              <div className="my-6">
                <NavItem
                  href={
                    isPathBlogPostRegex.test(router.pathname) ? '/blog' : '/'
                  }
                  icon="back-arrow"
                />
              </div>
              <NavItem
                fullWidth
                active={router.pathname === '/about_me'}
                href="/about_me"
                text="About me"
              />
              <NavItem
                fullWidth
                active={router.pathname === '/blog'}
                href="/blog"
                text="Blog"
              />
              <NavItem
                fullWidth
                active={router.pathname === '/contacts'}
                href="/contacts"
                text="Contacts"
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
          <div className="sticky bottom-0 md:hidden">
            <motion.nav
              key="mobileNav"
              transition={{ duration: 0.5 }}
              initial={{ y: 3000 }}
              animate={{ y: 0 }}
              exit={{ y: 3000 }}
              className="w-full h-24 text-white bg-gray-800 shadow-md"
            >
              <ul className="flex flex-row items-center justify-between h-full">
                <NavItem
                  fullWidth
                  active={router.pathname === '/about_me'}
                  href="/about_me"
                  text="About me"
                />
                <NavItem
                  fullWidth
                  active={router.pathname === '/blog'}
                  href="/blog"
                  text="Blog"
                />
                <NavItem
                  fullWidth
                  active={router.pathname === '/contacts'}
                  href="/contacts"
                  text="Contacts"
                />
              </ul>
            </motion.nav>
          </div>
        )}
      </div>
    </>
  )
}

export default Layout
