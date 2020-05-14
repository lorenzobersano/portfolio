import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <html lang="it" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#1a202c" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Lorenzo Bersano" />
          <meta name="application-name" content="Lorenzo Bersano" />
          <meta
            name="description"
            content="Hi! I'm Lorenzo, a fullstack developer based in Turin, here you can find info about my skills and read about my thoughts"
          />
          <meta name="author" content="Lorenzo Bersano" />
          <meta
            name="keywords"
            content="Lorenzo, Bersano, Lorenzo Bersano, lorenzo bersano, lorenzo, bersano, lobersano, software engineer, fullstack developer, Turin, Torino, lorenzobersano"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <link rel="shortcut icon" href="/favicon.ico" />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `var _paq = window._paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                  var u="//analytics.lorenzobersano.com/";
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '1']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                })();`,
            }}
          />
        </Head>
        <body className="bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
