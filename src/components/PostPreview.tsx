import React from 'react'
import { Post } from '../hooks/usePosts'
import Link from './Link'
import ReadLink from './ReadLink'

interface PostPreviewProps {
  post: Post
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <article className="border-gray-500 border-b pb-4 first:mt-4">
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </article>
  )
}

export default PostPreview
