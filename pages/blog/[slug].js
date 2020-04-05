import dynamic from 'next/dynamic'
import * as postsMetadata from '../../posts'

const BlogPost = ({ slug }) => {
  const PostComponentMDX = dynamic(() => import(`../../posts/${slug}.mdx`))

  return (
    <div className="container mx-auto">
      <PostComponentMDX />
    </div>
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

  return { props: { slug } }
}

export default BlogPost
