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
    <nav className={classes.nav}>
      <div className={classes.links}>
        <Link to="/" className={classes.pageLink}>Home</Link>
        <Link to="/about" className={classes.pageLink}>About</Link>
        <Link to="/projects" className={classes.pageLink}>Portfolio</Link>
        <Link to='/contact' className={classes.pageLink}>Contact</Link>
      </div>
    </nav>
  )
}
