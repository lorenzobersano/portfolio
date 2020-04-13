import * as postsMetadata from '../../posts'
import Post from '../../components/Post'

const Blog = ({ posts }) => (
  <div className="container h-screen mx-auto text-white">
    <h1 className="text-3xl">My thoughts</h1>
    <ul>
      {posts.map((post) => (
        <Post
          title={post.title}
          key={post.slug}
          slug={post.slug}
          description={post.description}
        />
      ))}
    </ul>
  </div>
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
