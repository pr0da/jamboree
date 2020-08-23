import React from 'react'
import Header from './Header/Header'

const Layout: React.FC = props => {
  const { children } = props
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  )
}

export default Layout
