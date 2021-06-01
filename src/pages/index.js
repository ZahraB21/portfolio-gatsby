import React from "react"
import { Link, graphql } from 'gatsby';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Layout from '../components/Layout/Layout';
import styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  
  return (
    <Layout>
      <section className={styles.header}>
          <h2>Hello, I'm Zahra Jana Behfarshad</h2>
          <h3>A Web Developer | Front-End Dev</h3>
          <Link to="/projects" className={styles.btn} >View Work <ArrowForwardIcon className={styles.forwardIcon} /></Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 80){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`