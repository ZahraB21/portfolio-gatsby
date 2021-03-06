import React from 'react'
import Layout from '../components/Layout/Layout';
import { Button, Grid, Typography, TextField, TextareaAutosize } from '@material-ui/core';
import styles from '../styles/contact.module.css';

const Contact = () => {
    return (
        <Layout>
            <Grid container className={styles.contactContainer}>
                <Grid item xs={4}>
                    <Typography variant="h3">Want to grab coffee and discuss your idea?</Typography>
                </Grid>
                <Grid item xs={7}>
                    <form className={styles.form}>
                        <TextField
                            className={styles.textField}
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
                            className={styles.textField}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="email"
                        />
                        <TextareaAutosize className={styles.textArea} label="Message" aria-label="minimum height" rowsMin={10} placeholder="Enter your message here ..." />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={styles.submit}
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Contact;