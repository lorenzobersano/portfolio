import { AnimatePresence } from 'framer-motion'

import '../tailwind.css'
import '../svgLinks.css'
import Layout from '../components/Layout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
