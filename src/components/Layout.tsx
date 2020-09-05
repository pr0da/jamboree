import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header/Header'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Layout: React.FC = props => {
  const { children } = props
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Header />
      <Helmet>
        <html lang="en"></html>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default Layout
