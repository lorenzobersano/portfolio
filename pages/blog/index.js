import Head from 'next/head'

import { posts as postsMetadata } from 'posts.json'
import Post from 'components/Post'

const Blog = ({ posts }) => (
  <>
    <Head>
      <title>Lorenzo Bersano | Blog</title>
    </Head>

    <div className="h-screen text-white">
      <h1 className="container mx-auto mb-8 font-mono text-3xl text-blue-200">
        My blog
      </h1>
      <ul>
        {posts.map((post, i) => (
          <Post key={i} {...post} />
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
      posts: postsMetadata,
    },
  }
}

export default Blog
