import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Grid, Typography } from '@material-ui/core';
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <Layout>
      <Box className={styles.aboutSection}>
        <Grid container>
          <Grid item xs="4">
            <Typography variant="h2">About</Typography>
          </Grid>
          <Grid item xs="8">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsum corrupti nostrum iure ipsam, unde eveniet temporibus eaque distinctio porro, accusamus, cum officia! Numquam, quam dolores praesentium quae sapiente tenetur minima officia reprehenderit cupiditate minus ad animi, sit, cumque omnis earum totam sint maxime? Eveniet voluptatum officiis minus, debitis consectetur voluptas numquam animi magni sequi corporis ipsum odio voluptatibus nulla tempora, sunt aliquid? Ea qui recusandae eius nostrum dolorum saepe laboriosam dolorem molestiae, blanditiis expedita odit obcaecati, amet quia deserunt! Repellat at suscipit expedita vel nam, odit molestiae quo pariatur quod alias, explicabo quibusdam nostrum illo eum fugiat iusto corporis doloremque tempore! Eum molestias fuga dolor praesentium vitae, quaerat doloribus, aspernatur quas fugiat illo voluptate reiciendis amet aperiam ratione vero? A expedita, recusandae laboriosam deserunt aperiam nostrum, temporibus corrupti hic vero atque numquam nobis sed, magnam id ipsa quis animi quos pariatur alias quae! Accusamus labore non incidunt quasi debitis perspiciatis fugiat, excepturi exercitationem perferendis quas similique culpa impedit natus facilis hic dicta dolorum qui quis molestiae? Aperiam non delectus reprehenderit modi ipsa, necessitatibus fugit consequuntur maiores neque nihil velit provident, voluptates eius soluta accusamus ipsum harum id architecto sapiente, nemo ad rerum expedita? Quasi dolore dolores id omnis a.</p>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
 
export default About;