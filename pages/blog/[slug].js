import fs from 'fs'
import MDX from '@mdx-js/runtime'
import ReactDOM from 'react-dom/server'
import path from 'path'

import * as postsMetadata from '../../posts'
import components from '../../components'

const BlogPost = ({ post }) => {
  return (
    <div className="max-w-lg mx-auto text-lg">
      <div dangerouslySetInnerHTML={{ __html: post }} />
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

  let postContent = fs.readFileSync(path.join('posts', `${slug}.mdx`), 'utf8')
  postContent = postContent.substring(postContent.indexOf('#'))

  // Provide variables that might be referenced by JSX
  const scope = {
    some: 'value',
  }

  const post = ReactDOM.renderToStaticMarkup(
    <MDX components={components} scope={scope}>
      {postContent}
    </MDX>
  )

  return { props: { post } }
}

export default BlogPost
