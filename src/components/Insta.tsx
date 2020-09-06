import React from 'react'
import Image from 'gatsby-image'
import useInstagram from '../hooks/useInstagram'

interface Props {}

export const Insta: React.FC<Props> = props => {
  const {} = props
  const instaPhotos = useInstagram()
  return (
    <>
      <h2>Instagram posts from @slowbudapest</h2>
      <div className="flex flex-wrap justify-between">
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            className="shadow-xs block m-2 w-48 hover:shadow-2xl focus:shadow-2xl transition-shadow duration-200 ease-in-out"
            href={`https://instagram.com/p/${photo.id}`}
          >
            <Image fluid={photo.fluid} alt={photo.caption} className="w-full" />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${instaPhotos[0].username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  )
}

export default Insta
