import React from 'react'
import Layout from '../components/Layout'
import Link from '../components/Link'

export default () => (
  <Layout>
    <h1 className="text-3xl">About Me</h1>
    <p>This is my personal website</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
)
