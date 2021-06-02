import { useStaticQuery, graphql } from "gatsby";
import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import useStyles from './style';
import Navbar from '../Navbar/Navbar';
import '../../styles/global.css';
import { useSiteMetadata } from "../../hooks/use-site-metadata";


export default function Layout({ children }) {
  const { copyright } = useSiteMetadata()
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="classes.layoutContainer">
          <Navbar />
          <div className="content">
            { children }
          </div>
          <footer className={classes.footer}>
            <p className={classes.footerDetails}>{ copyright }</p>
          </footer>
      </Container>
    </React.Fragment>
  )
}