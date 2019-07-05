

import React from 'react'
import {Box,Typography} from '@material-ui/core';
import bdoLogo from '../img/bdoLogo2.png'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme =>({
    // root: {
    //   flexGrow: 1,
    // },
    // sectionDesktop: {
    //     display: 'none',
    //     [theme.breakpoints.up('sm')]: {
    //       display: 'flex',
    //       color:'white'
    //     },
    //   },
    //   sectionMobile: {
    //     display: 'flex',
    //     color: theme.palette.secondary.main,
    //     [theme.breakpoints.up('sm')]: {
    //       display: 'none',
    //       color:'white'
    //     }
    //   }
  }));
function PageHeader() {
    const classes = useStyles();
    var diStyle={
         marginTop:'0',
         width:'100%'
    }
    return (
        <div style={diStyle} >
            <Box display="flex" flexDirection="column" p={0} m={0} >
               <Box p={0}>
                {/* <img  className={classes.sectionMobile} src={bdoLogo} alt="" width="150" height="70"/>
               <img  className={classes.sectionDesktop} src={bdoLogo} alt="" width="150" height="70" /> */}
               <img   src={bdoLogo} alt="" width="150" height="70"/>
               </Box>
                       <Box p={1}>
                       {/* <div className={classes.sectionMobile}> */}
                       <Typography color="primary"  variant="subtitle1">
                       Manila Water Company Inc.
                        </Typography>
                       {/* </div> */}
                       {/* <div className={classes.sectionDesktop}>
                       <Typography variant="h4"color="primary">
                       Credit Card Utility Payment System
                        </Typography>
                       </div> */}
                       
                      
                 
                   </Box>
               </Box>
               
        </div>
    )
}

export default PageHeader
