import React from 'react'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import usePosts from '../hooks/usePosts'
import Hero from '../components/Hero'

export default function Home() {
  const posts = usePosts()
  return (
    <>
      <Hero />
      <Layout>
        <h2 className="text-4xl my-6 font-bold">Read my blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} {...{ post }} />
        ))}
      </Layout>
    </>
  )
}
