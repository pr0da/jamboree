import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Link from './Link'
import styles from './Hero.module.css'

interface Props {}

export const Hero: React.FC<Props> = props => {
  const {} = props

  const { image } = useStaticQuery(graphql`
    query {
      image: file(
        relativePath: { eq: "viktor-kern-0gLH1kqRldc-unsplash.jpg" }
      ) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="section"
      fluid={[
        'linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00)',
        image.sharp.fluid,
      ]}
      className={styles.hero}
      fadeIn="soft"
    >
      <div className="flex h-full justify-end flex-col container mx-auto pb-10">
        <h1 className="text-5xl font-bold">
          Frontend Masters + Gatsby &hearts;
        </h1>
        <p className="text-gray-800 text-2xl">
          Hello Budapest{' '}
          <Link
            className="text-gray-800 underline hover:text-gray-700"
            to="/about"
          >
            Learn about me &rarr;
          </Link>
        </p>
      </div>
    </BackgroundImage>
  )
}

export default Hero
