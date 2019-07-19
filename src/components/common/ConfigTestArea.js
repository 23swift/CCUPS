import React from 'react'
import { Typography, Paper,TextField, Toolbar, Button } from '@material-ui/core';
import useStyles from './useStyles'
import { Send } from '@material-ui/icons';
import { orange } from '@material-ui/core/colors';
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
                <Toolbar>
                    <Typography style={{flexGrow:1}}>

                    </Typography>
                    <Button variant="outlined" type="submit" color="primary">Submit Test Data <Send style={{marginLeft:3, color:orange[300]}}/></Button>
                </Toolbar> 
          </form>
          
          </Paper>
        </>
    )
}


