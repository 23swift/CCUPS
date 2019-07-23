import React from 'react'
import { Typography, Paper, TextField, Toolbar, Button, Box } from '@material-ui/core';
import useStyles from './useStyles'
import { Send } from '@material-ui/icons';
import { orange } from '@material-ui/core/colors';
import { Formik, Form, Field } from 'formik';
import { TextField as formikField,Select as formikSelect } from 'formik-material-ui';
import { CircularProgress } from '@material-ui/core';
import { styled } from '@material-ui/styles';
const CustomProgress=styled(CircularProgress)({

 
    marginLeft: "3px",
    color: "orange",
   
  
  
  });
export default function ConfigTestArea(props) {
    const classes=useStyles();
    return (
        <>
           
            <Paper className={classes.root}>
        
            <Formik
      initialValues={{ testData: '' }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setTimeout(() => {
          
            // alert(JSON.stringify(values, null, 2));
            props.getMatchingInfo(values).then(()=>{

                actions.setSubmitting(false);
            });

          
        }, 1000);
      }}
      render={props => (
        <Form  noValidate autoComplete="off">
        <Field component={formikField}
            id="filled-multiline-static"
            label="Test Area"
            fullWidth
            multiline
            rows="10"
            variant="outlined"
            name="testData"
            // defaultValue="Default Value"
            // className={classes.textField}
            margin="normal"
            // variant="filled"
          /> 
          <Toolbar>
              <Box style={{flexGrow:1}}>
              {props.isSubmitting && <Box display="flex" flexDirection="row"  flexWrap="nowrap" mx={1} justifyContent="space-between" width={130}>
                                                        <Box ><CustomProgress size={20} /></Box> <Box ><Typography  color="primary">Please wait...</Typography>
                                                        </Box></Box>} 
              </Box>
              {!props.isSubmitting &&  <Button variant="outlined" type="submit" color="primary">Submit Test Data <Send style={{marginLeft:3, color:orange[300]}}/></Button>}
          </Toolbar> 
    </Form>
      )}
    />
        
        
        
       
          
          </Paper>
        </>
    )
}


