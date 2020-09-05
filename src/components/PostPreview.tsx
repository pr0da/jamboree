import React from 'react'
import Image from 'gatsby-image'
import { Post } from '../hooks/usePosts'
import Link from './Link'
import ReadLink from './ReadLink'

interface PostPreviewProps {
  post: Post
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <article className="border-gray-500 border-b pb-4 my-4 flex">
      <Link to={post.slug}>
        <Image
          className="w-32 h-32"
          fluid={post.image.sharp.fluid}
          alt={post.title}
        />
      </Link>
      <div className="ml-4 flex flex-col">
        <h3 className="text-3xl">
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p className="mb-auto">{post.excerpt}</p>
        <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
      </div>
    </article>
  )
}

export default PostPreview
