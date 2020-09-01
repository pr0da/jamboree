import { graphql, useStaticQuery } from 'gatsby'

interface RawPost {
  excerpt: string
  frontmatter: {
    title: string
    slug: string
    author: string
  }
}

interface SiteMetadata {
  allMdx: {
    nodes: RawPost[]
  }
}

export interface Post {
  excerpt: string
  title: string
  slug: string
  author: string
}

const usePosts = (): Post[] => {
  const data = useStaticQuery<SiteMetadata>(graphql`
    query Posts {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            author
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(({ excerpt, frontmatter }) => ({
    excerpt,
    ...frontmatter,
  }))
}

export default usePosts
