import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Home = () => {
  const router = useRouter()

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const variantsSvg = {
    hidden: { opacity: 0, y: 20, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <>
      <Head>
        <title>Lorenzo Bersano | Home</title>
        <meta property="og:title" content="Lorenzo Bersano | Home" />
        <meta property="og:site_name" content="Lorenzo Bersano" />
        <meta property="og:description" content="Welcome to my website!" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lobersano" />
        <meta
          property="og:image"
          content="https://lorenzobersano.com/og/home.png"
        />
      </Head>

      <motion.main
        className="flex flex-col items-center justify-between w-full h-screen px-10 pt-10 bg-radial-bc-home"
        exit={{ opacity: 0 }}
      >
        <div className="flex flex-col items-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
            className="text-xl font-thin text-white sm:text-2xl md:text-3xl lg:text-4xl"
          >
            Hi! My name is
          </motion.h2>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Lorenzo Bersano
          </motion.h1>
        </div>

        <div className="flex flex-col items-center">
          <motion.svg
            initial="hidden"
            animate="visible"
            variants={variantsSvg}
            style={{ originX: '50%', originY: '100%' }}
            transition={{ delay: 3 }}
            viewBox="-30 -50 860 450"
            className="z-10 max-w-sm -mb-20"
          >
            <path
              fill="transparent"
              id="curve"
              d="M0,400 C0,179.0861 179.0861,0 400,0 C620.9139,0 800,179.0861 800,400 L1.42108547e-14,400 Z"
            />
            <text className="text-5xl text-white fill-current">
              <textPath xlinkHref="#curve" startOffset="0">
                <Link href="/blog">
                  <a
                    style={{ fill: 'white' }}
                    className="focus:underline hover:underline"
                  >
                    My blog
                  </a>
                </Link>
              </textPath>
              <textPath xlinkHref="#curve" startOffset="540">
                <Link href="/about_me">
                  <a
                    style={{ fill: 'white' }}
                    className="focus:underline hover:underline"
                  >
                    About me
                  </a>
                </Link>
              </textPath>
              <textPath xlinkHref="#curve" startOffset="1050">
                <Link href="/contacts">
                  <a
                    style={{ fill: 'white' }}
                    className="focus:underline hover:underline"
                  >
                    Contacts
                  </a>
                </Link>
              </textPath>
            </text>
          </motion.svg>

          <motion.img
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, delay: 2 }}
            style={{ height: '50vh', objectFit: 'cover' }}
            className="ml-12"
            src="/lorenzob_bew_cut.png"
            alt="A picture of Lorenzo Bersano"
          ></motion.img>
        </div>
      </motion.main>
    </>
  )
}

export default Home
