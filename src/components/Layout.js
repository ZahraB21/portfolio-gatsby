import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import { useSiteMetadata } from "../hooks/use-site-metadata"

export default function Layout({ children }) {
  const { copyright } = useSiteMetadata()
  console.log(copyright);

  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>{ copyright }</p>
      </footer>
    </div>
  )
}