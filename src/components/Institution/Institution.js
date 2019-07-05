import React from 'react'
import { Typography, AppBar, Toolbar, Button, Box, makeStyles } from '@material-ui/core';
import { WorkOutline, AccountBalance, Cancel, Send } from '@material-ui/icons';
import { Save } from '@material-ui/icons';
import InstitutionForm from './InstitutionForm';
import { orange } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    button: {
      color:theme.palette.background.default,
     
    },
}));


export default function Institution() {
    const classes = useStyles();
    return (
        <>
        <AppBar position="static">
            <Toolbar color="white">
            <AccountBalance color="secondary"/>
            <Typography variant="h6" style={{flexGrow:1}}>
           
                         Institution
            </Typography>
            {/* <Box mx={1}>
                                         <Button type="submit" size="small" variant="outlined" color="primary" >
                                         <Send style={{margin:"2px"}}/>
                                                     Submit
                                         
                                         </Button >
                                         </Box>
                                         <Box>
                                         <Button type="submit" size="small" variant="outlined" color="secondary" className={classes.cancelButton}>
                                         <Cancel style={{margin:"2px"}}/>
                                     
                                                     Cancel
                                     
                                         
                                         </Button >
                                 </Box>
            <Box>
            <Button   className={classes.button}>
            <Typography  style={{marginLeft:"3px"}}>
                        Save
            </Typography>
                
            </Button >
            </Box>
            <Box ml={1}>
                <Button   className={classes.button} >
                    <Typography style={{marginLeft:"3px"}}>
                                Cancel
                    </Typography>
                
            </Button>
            </Box> */}
            
            </Toolbar>
           
        </AppBar>
            
             <InstitutionForm/>
        </>
            
    )
}
