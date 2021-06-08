import React from 'react'
import Layout from '../components/Layout/Layout';
import { Button, Grid, Typography, TextField, FormControlLabel, Link, TextareaAutosize } from '@material-ui/core';
import styles from '../styles/contact.module.css';

const Contact = () => {
    return (
        <Layout>
            <Grid container className={styles.contactContainer}>
                <Grid item xs={4}>
                    <Typography variant="h3">Want to grab coffee and discuss your idea?</Typography>
                </Grid>
                <Grid item xs={8}>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                        />
                        <TextareaAutosize label="Message" aria-label="minimum height" fullWidth rowsMin={3} placeholder="Minimum 3 rows" />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={styles.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Contact;