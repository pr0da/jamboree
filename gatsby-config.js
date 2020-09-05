/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.tsx'),
        },
      },
    },
  ],
  siteMetadata: {
    title: 'FM Gatsby Workshop',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate sequi odit libero praesentium, voluptas at consequatur dignissimos? Voluptas blanditiis repellendus omnis! Iste dolore nihil aperiam? Nemo possimus accusantium natus eaque.',
  },
}
