import React from 'react'
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'

function Link<TState>(props: Omit<GatsbyLinkProps<TState>, 'ref'>) {
  return (
    <GatsbyLink<TState>
      className="text-blue-500 hover:text-blue-800 inline-block text-sm"
      {...props}
    />
  )
}

export default Link
