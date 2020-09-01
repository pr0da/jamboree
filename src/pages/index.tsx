import React from 'react'
import Layout from '../components/Layout'
import Link from '../components/Link'
import PostPreview from '../components/PostPreview'
import usePosts from '../hooks/usePosts'

export default function Home() {
  const posts = usePosts()
  return (
    <Layout>
      <h1 className="text-3xl">Home</h1>
      <p>Hello Budapest</p>
      <Link to="/about">Learn about me &rarr;</Link>
      {posts.map(post => (
        <PostPreview key={post.slug} {...{ post }} />
      ))}
    </Layout>
  )
}
