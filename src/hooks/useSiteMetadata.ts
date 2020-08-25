import { graphql, useStaticQuery } from 'gatsby'

interface SiteMetadata {
  site: {
    id: string
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<SiteMetadata>(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
