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
        borderBottom: '1px solid #261E59',
        '&:hover': {
            color: '#F2A057',
            borderBottom: '1px solid #E56F15',
        }   
    }
}));