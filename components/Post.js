import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Post = ({ title, slug, description, date }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <li key={slug} className="w-full">
      <Link href={`/blog/${slug}`}>
        <a>
          <motion.div
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            whileHover={{ y: -5 }}
            className="py-8 text-xl rounded-lg"
          >
            <div className="container mx-auto">
              <h3
                className={`font-bold ${isHovering ? 'text-yellow-400' : ''}`}
              >
                {title}
              </h3>
              <p className={`${isHovering ? 'text-yellow-200' : ''}`}>
                {new Date(date).toLocaleDateString()}
              </p>
              <p
                className={`${
                  isHovering ? 'text-yellow-100' : 'text-gray-400'
                }`}
              >
                {description}
              </p>
            </div>
          </motion.div>
        </a>
      </Link>
    </li>
  )
}

export default Post
