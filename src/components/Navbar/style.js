import { makeStyles } from '@material-ui/core';

export default makeStyles( theme => ({
    nav: {
        marginTop: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    links: { 
        width: '30%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.25rem',
        
    },
    pageLink: {
        '&:hover': {
            color: '#d42991',
            borderBottom: '1px solid #d42991',
            fontWeight: 'bold'
        }   
    }
}));