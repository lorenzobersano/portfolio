import Head from 'next/head'

import { posts as postsMetadata } from 'posts.json'

import H1 from 'components/H1'
import H2 from 'components/H2'
import P from 'components/P'
import PostContentLayout from 'components/PostContentLayout'

function HelloWorld({ metadata }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content="Lorenzo Bersano" />
        <meta property="og:description" content={metadata.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lobersano" />
        <meta
          property="og:image"
          content={`https://lorenzobersano.com/og/${metadata.slug}.png`}
        />
        <link
          rel="canonical"
          href={`https://lorenzobersano.com/blog/${metadata.slug}`}
        />
      </Head>

      <PostContentLayout>
        <H1>Hello world!</H1>
        <P>This is my first post</P>
        <H2>What&rsquo;s this blog about</H2>
        <P>
          Expect me to write about anything I know and find interesting,
          especially code tutorials, UI/UX design tips and website redesigns.
        </P>
      </PostContentLayout>
    </>
  )
}

export async function getStaticProps() {
  let metadata = postsMetadata.filter(({ slug }) => slug === 'hello-world')[0]

  return { props: { metadata } }
}

export default HelloWorld
