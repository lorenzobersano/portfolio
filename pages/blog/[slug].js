import fs from 'fs'
import MDX from '@mdx-js/runtime'
import ReactDOM from 'react-dom/server'
import path from 'path'
import Head from 'next/head'

import * as postsMetadata from '../../posts'
import components from '../../components'

const BlogPost = ({ post, slug, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Lorenzo Bersano" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lobersano" />
        <meta
          property="og:image"
          content={`https://lorenzobersano.com/og/${slug}.png`}
        />

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            var _paq = window._paq || [];
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

      <div className="h-screen max-w-lg mx-auto text-lg">
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.values(postsMetadata).map(({ slug }) => `/blog/${slug}`)

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  let [metadata, content] = fs
    .readFileSync(path.join('posts', `${slug}.mdx`), 'utf8')
    .split('<!-- START POST -->')

  let title = metadata
    .split('title:')[1]
    .split(',\n')[0]
    .replace(/'/g, '')
    .replace(/"/g, '')

  let description = metadata
    .split('description:')[1]
    .split(',\n')[0]
    .replace(/'/g, '')
    .replace(/"/g, '')

  // Provide variables that might be referenced by JSX
  const scope = {
    some: 'value',
  }

  const post = ReactDOM.renderToStaticMarkup(
    <MDX components={components} scope={scope}>
      {content}
    </MDX>
  )

  return { props: { post, slug, title, description } }
}

export default BlogPost
