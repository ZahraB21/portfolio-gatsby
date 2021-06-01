import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    layoutContainer: { 
        '@media (max-width:424px)': {
            maxWidth: '250px'
        },
        '@media (max-width:600px)': {
           maxWidth: '400px',
        },
        margin: '0 auto',
    }
}));