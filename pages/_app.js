import Layout from '../components/Layout'
import Head from 'next/head'

import '../tailwind.css'
import '../svgLinks.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {process.browser && (
          <script
            async
            defer
            data-domain="lorenzobersano.com"
            src="https://plausible.io/js/plausible.js"
          ></script>
        )}
      </Head>

      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  )
}
