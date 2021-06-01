import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import useStyles from './style';
export default function Navbar() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}
