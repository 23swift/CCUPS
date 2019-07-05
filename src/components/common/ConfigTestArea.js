import React from 'react'
import { Typography, Paper,TextField } from '@material-ui/core';
import useStyles from './useStyles'
export default function ConfigTestArea() {
    const classes=useStyles();
    return (
        <>
           
            <Paper className={classes.root}>
                     <form  noValidate autoComplete="off">
              <TextField
                  id="filled-multiline-static"
                  label="Test Area"
                  fullWidth
                  multiline
                  rows="10"
                  variant="outlined"
                  // defaultValue="Default Value"
                  // className={classes.textField}
                  margin="normal"
                  // variant="filled"
                />  
          </form>
          
          </Paper>
        </>
    )
}


