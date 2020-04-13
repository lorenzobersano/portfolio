import Link from 'next/link'

const Post = ({ title, slug, description }) => (
  <li key={slug} className="w-full">
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <a>
        <div className="py-8 hover:bg-gray-700">
          <h3>{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  </li>
)

export default Post
