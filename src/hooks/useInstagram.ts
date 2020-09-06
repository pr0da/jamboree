import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

interface InstaNode {
  id: string
  caption: string
  username: string
  localFile: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

interface SiteMetadata {
  allInstaNode: {
    nodes: InstaNode[]
  }
}

const useInstagram = () => {
  const data = useStaticQuery<SiteMetadata>(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(quality: 90, maxWidth: 192, maxHeight: 192) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allInstaNode.nodes.map(({ localFile, ...rest }) => ({
    ...localFile.childImageSharp,
    ...rest,
  }))
}

export default useInstagram
