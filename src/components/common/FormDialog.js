import React, { Component } from 'react'
import { Form,Field,withFormik } from 'formik';
import * as Yup from 'yup';
import { MenuItem, Button,Dialog,FormControl,InputLabel,FormControlLabel,Checkbox} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import useStyles from './useStyles';
import { TextField as formikField,Select as formikSelect } from 'formik-material-ui';

////////////////Dialog
const   FormDialog =(props)=> {
    // const [open, setOpen] = React.useState(false);
  
    // function handleClickOpen() {
    //   setOpen(true);
    // }
  
    // function handleClose() {
    //   setOpen(false);
    // }
    const classes = useStyles();
    return (
      <div>
       
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" color="primary">
            
          <Typography variant="inherit" color='primary' className={classes.title} >
              File Layout Configuration
            </Typography>
            
            </DialogTitle>
            {/* <MySnackbarContentWrapper
              variant="info"
              className={classes.margin}
              message="Layout configuration for Billing InputFile etc.additonal Information here..."
            /> */}
          <DialogContent>
        
           
            <BillingInputForm/>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary" variant="contained">
              Save
            </Button>
            <Button onClick={props.handleClose} color="secondary"  variant="contained">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }




  
const BillingFormTemplate =props =>{
    const {
      values,
      touched,
      errors,
      isSubmitting
      
      
    } = props;
    // console.log(props);
    
    
  const classes = useStyles();
  return (
    // <Paper className={classes.root}>
    <div>
       {/* <Typography color="primary" variant="h5">
                        Add Post
                </Typography> */}
              <Form >
                        {/* <Field  component={formikField} label="Starts at Line"   fullWidth name="startingLine"   /> */}
                        
                        <Field  component={formikField} label="Field Name"   fullWidth name="fieldname"   />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="type-simple">Type</InputLabel>
                           
                            <Field component={formikSelect} name="type" id="type-simple">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Numeric</MenuItem>
                            <MenuItem value={20}>Alpha Numeric</MenuItem>
                            <MenuItem value={30}>DateTime</MenuItem>
                            <MenuItem value={40}>Decimal</MenuItem>
                            {/* <MenuItem value={50}></MenuItem>
                            <MenuItem value={60}>Transaction Date</MenuItem> */}
                          </Field>
                        </FormControl>
                        <Field component={formikField} label="Size"   fullWidth multiline rows="2" rowsMax="2"  name="size" />
                        <Field component={formikField} label="Format"   fullWidth multiline rows="2" rowsMax="2"  name="format" />
                      
                        <FormControlLabel
                            control={
                            <Checkbox checked={false}  value="checkedA" />
                            }
                            label="Mapp to System Field"
                        />

                        <FormControl className={classes.formControl}>
                            {/* <InputLabel htmlFor="age-simple">System Field</InputLabel> */}
                            <Field component={formikSelect} name="systemField">
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Record Type</MenuItem>
                            <MenuItem value={20}>Name</MenuItem>
                            <MenuItem value={30}>Card Number</MenuItem>
                            <MenuItem value={40}>Amount</MenuItem>
                            <MenuItem value={50}>Card Number</MenuItem>
                            <MenuItem value={60}>Transaction Date</MenuItem>
                            </Field>
                        </FormControl>      


                        {/* <Grid container spacing={2}>
                            <Grid item>
                            <Button type="submit" variant="contained" color="primary" className={classes.submitButton} disabled={!isEmpty(errors) || isSubmitting} >
                              {isSubmitting? <Box display="flex" flexDirection="row"  flexWrap="nowrap">
                                <Box ><CustomProgress size={20} /></Box> <Box ><Typography  color="primary">Please wait...</Typography></Box></Box>:"Submit"
                              }
                            </Button>
                            </Grid>
                           
                            
                          </Grid> */}
                    
               
      
      </Form>

     </div>
  
  );
  }



  //Validation Schema
const SignupSchema=Yup.object().shape({
title:Yup.string()
.min(2,"Minimum of two Characters")
.max(20,"Maximum of 20 Characters")
.required('Title is Required'),
body:Yup.string()
.min(2,"Minimum of two Characters")
.max(500,"Maximum of 500 Characters")
.required('Body is Required'),



});

  //Form Configuration
export const BillingInputForm = withFormik({

    mapPropsToValues: () => ({filedName:'',type:'',size:'',format:'',systemField:''})
    ,
    
    
    // Custom sync validation
    validationSchema:SignupSchema
    ,
    
    handleSubmit: (values,{props,resetForm,setSubmitting}) => {
      setSubmitting(true);
      
      console.log(props);
     
      setTimeout(() => {
        resetForm();
       
        setSubmitting(false);
      }, 2000);
       
    },
    
    displayName: 'BasicForm',
    })(BillingFormTemplate);
    

export default FormDialog;