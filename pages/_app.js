import Router from 'next/router'

import '../tailwind.css'
import '../svgLinks.css'
import Layout from '../components/Layout'

Router.events.on('routeChangeStart', (url) => {
  if (window && window._paq) {
    window._paq.push(['setCustomUrl', url])
    window._paq.push(['setDocumentTitle', document.title])
    window._paq.push(['trackPageView'])
  }
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}
