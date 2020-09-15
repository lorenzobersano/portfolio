import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function ExternalLink({ href, children }) {
  const [isHovering, setIsHovering] = useState(false)

  const variants = {
    hidden: { width: 0, opacity: 0 },
    visible: { opacity: 0.5, width: '100%' },
    exit: { width: 0, opacity: 0 },
  }

  return (
    <span className="relative inline-flex items-center">
      <a
        target="_blank"
        href={href}
        className="z-10 flex items-start"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onFocus={() => setIsHovering(true)}
        onBlur={() => setIsHovering(false)}
      >
        {children}{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-3 w-3"
        >
          <path
            className="fill-current text-yellow-500"
            d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"
          />
          <path
            className="fill-current text-yellow-300"
            d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"
          />
        </svg>
      </a>
      <AnimatePresence>
        {isHovering && (
          <motion.span
            key="underline"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.2 }}
            className="absolute left-0 h-2 mt-3 bg-yellow-400"
          />
        )}
      </AnimatePresence>
    </span>
  )
}

export default ExternalLink
