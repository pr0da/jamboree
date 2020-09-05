import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

interface RawPost {
  excerpt: string
  frontmatter: {
    title: string
    slug: string
    author: string
    image: {
      sharp: {
        fluid: FluidObject
      }
    }
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
  image: {
    sharp: {
      fluid: FluidObject
    }
  }
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
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                  duotone: { shadow: "#663399", highlight: "#ddbbff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
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
