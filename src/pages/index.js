import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout';
import styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  
  return (
    <Layout>
      <section className={styles.header}>
          <h2>Hello, I'm Zahra Jana Behfarshad</h2>
          <h3>A Web Developer | Front-End Dev</h3>
          <Link className={styles.btn} to="/projects">View Work</Link>
        {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
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