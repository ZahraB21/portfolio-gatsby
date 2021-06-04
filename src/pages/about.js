import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Grid, Typography } from '@material-ui/core';
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <Layout>
      <Box className={styles.aboutSection}>
        <Grid container>
          <Grid item xs={5} className={styles.about}>
            <Box className={styles.img}></Box>
          </Grid>
          <Grid item xs={7}>
          <Typography variant="h2" className={styles.aboutTitle}>About</Typography>
            <Typography variant="h5">I'm a freelance developer located at Vancouver, BC. </Typography>
            <Typography variant="h5">I'm passionate about creating <span className={styles.bold}>fast, responsive, creative and dynamic user experience.</span></Typography>
            <Typography variant="h5" className={styles.skills}>Skills</Typography>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="body" className={styles.skillset}>HTML5</Typography>
                <Typography variant="body" className={styles.skillset}>CSS3</Typography>
                <Typography variant="body" className={styles.skillset}>SASS</Typography>
                <Typography variant="body" className={styles.skillset}>JavaScript</Typography>
                <Typography variant="body" className={styles.skillset}>React</Typography>
                <Typography variant="body" className={styles.skillset}>Redux</Typography>
                <Typography variant="body" className={styles.skillset}>Material-UI</Typography>
                <Typography variant="body" className={styles.skillset}>Bootstrap</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body" className={styles.skillset}>Node.JS</Typography>
                <Typography variant="body" className={styles.skillset}>Express</Typography>
                <Typography variant="body" className={styles.skillset}>PHP</Typography>
                <Typography variant="body" className={styles.skillset}>MySQL</Typography>
                <Typography variant="body" className={styles.skillset}>C#</Typography>
                <Typography variant="body" className={styles.skillset}>WordPress</Typography>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
 
export default About;