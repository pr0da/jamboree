import React from 'react'
import Layout from '../components/Layout'
import Link from '../components/Link'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl">Home</h1>
      <p>Hello Budapest</p>
      <Link to="/about">Learn about me &rarr;</Link>
    </Layout>
  )
}
