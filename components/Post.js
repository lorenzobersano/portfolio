import Link from 'next/link'

const Post = ({ title, slug, description, date }) => (
  <li key={slug} className="w-full">
    <Link href="/blog/[slug]" as={`/blog/${slug}`}>
      <a>
        <div className="py-8 hover:bg-gray-800">
          <div className="container mx-auto">
            <h3 className="font-bold">{title}</h3>
            <p className="text-gray-400">{description}</p>
            <p className="text-sm">{new Date(date).toLocaleDateString()}</p>
          </div>
        </div>
      </a>
    </Link>
  </li>
)

export default Post
