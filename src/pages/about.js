import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Grid, Typography } from '@material-ui/core';
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <Layout>
      <Box className={styles.aboutSection}>
        <Grid container>
          <Grid item xs={5}>
            <Typography variant="h2">About</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h5">I'm a freelance developer located at Vancouver, BC. </Typography>
            <Typography variant="h5">I'm passionate about creating <span className={styles.bold}>fast, responsive, creative and dynamic user experience.</span></Typography>
            <Typography variant="h5" className={styles.skills}>Skills</Typography>
            <Typography variant="body" className={styles.skillset}>HTML5, CSS3, SASS, JavaScript, Material-UI, BootStrap, React, Redux, Node, Express, WordPress, MySQL</Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
 
export default About;