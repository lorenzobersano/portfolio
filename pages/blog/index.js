import Head from 'next/head'

import * as postsMetadata from '../../posts'
import Post from '../../components/Post'

const Blog = ({ posts }) => (
  <>
    <Head>
      <title>Lorenzo Bersano | Blog</title>

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

    <div className="h-screen text-white">
      <h1 className="container mx-auto mb-8 text-3xl">My blog</h1>
      <ul>
        {posts.map((post) => (
          <Post key={post.slug} {...post} />
        ))}
      </ul>
    </div>
  </>
)

// This function gets called at build time in the Node.js environment.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: Object.values(postsMetadata),
    },
  }
}

export default Blog
