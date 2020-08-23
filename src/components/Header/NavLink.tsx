import React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'

function NavLink<TState>(props: Omit<GatsbyLinkProps<TState>, 'ref'>) {
  return (
    <Link<TState>
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      activeClassName="border-b-2 border-teal-200"
      {...props}
    />
  )
}

export default NavLink
