import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ReadLink from '../components/ReadLink'
import { MDXRenderer } from 'gatsby-plugin-mdx'

interface PostProps {
  pageContext: {
    slug: string
  }
  data: {
    mdx: {
      frontmatter: {
        title: string
        author: string
      }
      body: string
    }
  }
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`

const Post: React.FC<PostProps> = props => {
  const { data } = props
  const post = data.mdx
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p className="text-xs">Posted by ({post.frontmatter.author})</p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
  )
}

export default Post
