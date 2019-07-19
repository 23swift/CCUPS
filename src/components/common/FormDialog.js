import React, { Component } from 'react'
import { Form,Field,withFormik } from 'formik';
import * as Yup from 'yup';
import { MenuItem, Button, Dialog, FormControl, InputLabel, FormControlLabel, Checkbox, Grid, Box, Toolbar, Typography,TextField } from '@material-ui/core';

import { DialogContent } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import useStyles from './useStyles';
import { TextField as formikField,Select as formikSelect } from 'formik-material-ui';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styled } from '@material-ui/styles';
import { Send, Cancel, Edit, Add, AddCircleOutline } from '@material-ui/icons';
import { keys } from '@material-ui/core/styles/createBreakpoints';
import { AddIcon } from '@material-ui/icons/Add';
import { orange } from '@material-ui/core/colors';

const CustomProgress=styled(CircularProgress)({

 
  margin: "5px",
  color: "orange",
 


});


////////////////Dialog
const   FormDialog =(props)=> {
    
    
    const classes = useStyles();
    return (
      <div>
       
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" disableBackdropClick>
          <DialogTitle id="form-dialog-title" color="primary">
            
          <Typography variant="inherit" color='primary' className={classes.title} >
                  {props.updateFunction && <><Edit style={{color:orange[500]}}/> Update Field</>} {props.addFunction && <><Add style={{color:orange[500]}}/> Add Field</>} Definition
            </Typography>
            
          
            </DialogTitle>
            {/* <MySnackbarContentWrapper
              variant="info"
              className={classes.margin}
              message="Layout configuration for Billing InputFile etc.additonal Information here..."
            /> */}
          <DialogContent>
        
           
            <InputForm addFunction={props.addFunction} cancelFunc={props.handleClose} values={props.currentItem}
              updateFunction={props.updateFunction}  dataTypeList={props.dataTypeList} />
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={props.handleClose} color="primary" variant="contained">
              Save
            </Button>
            <Button onClick={props.handleClose} color="secondary"  variant="contained">
              Cancel
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }



  
  
const InputFormTemplate =props =>{
  

    const {
      values,
      touched,
      errors,
      isSubmitting,
      addFunction,
      cancelFunc,
      currentItem,
      updateFunction,
      dataTypeList
      
    } = props;
    
    
    
    
  const classes = useStyles();
  return (
    // <Paper className={classes.root}>
    <div>
       {/* <Typography color="primary" variant="h5">
                        Add Post
                </Typography> */}
              <Form >
                         <Field component={formikField}  type="hidden"  name="id"   />
                         <Field component={formikField}  type="hidden"  name="sequenceNum"   />
                         
                        <FormControl className={classes.formControl}>
                        <Field  component={formikField} label="Field Name" value={values.fieldName}  fullWidth name="fieldName"   />
                        </FormControl>
                        
                        
                        

                        <FormControl className={classes.formControl}>
                           
                           
                            <Field component={formikField} select  label="Data Type"  name="dataType" id="type-simple">
                            {dataTypeList &&
                              dataTypeList.map(item => (

                                <MenuItem value={item.id} key={item.id}>{item.desc}</MenuItem>
                              ))
                              }
                            <MenuItem  value="24">
                                <em>selected</em>
                            </MenuItem>
                           
                          </Field>
                        </FormControl>

                        <Field component={formikField} label="Size"   fullWidth multiline rows="2" rowsMax="2"  name="size" />
                        {/* <Field component={formikField} label="Format"   fullWidth multiline rows="2" rowsMax="2"  name="format" /> */}
                      
                        <FormControlLabel
                            control={
                            <Checkbox checked={false}  value="checkedA" />
                            }
                            label="Mapp to System Field"
                        />

                      


                        <Toolbar>
                          <Typography className={classes.title}>

                          </Typography>
                      
                                            {isSubmitting? 
                                                      <Box display="flex" flexDirection="row"  flexWrap="nowrap">
                                                        <Box ><CustomProgress size={20} /></Box> <Box ><Typography  color="primary">Please wait...</Typography>
                                                        </Box></Box>:
                                                     
                                                     <>
                                                     <Button type="submit"  variant="outlined"  className={classes.submitButton} >
                                                      <Send style={{margin:"2px"}}/>Submit</Button>
                                                       <Box mx={1}>
                                                       <Button className={classes.cancelButton}   variant="outlined" onClick={()=>props.cancelFunc()} >
                                                       <Cancel style={{margin:"2px"}} />
                                                         Cancel</Button>                      
                                                       </Box>
                                                       </>
                                          }
                          
                         
                          
                                            
                        </Toolbar>
                            
                    
               
      
      </Form>

     </div>
  
  );
  }



  //Validation Schema
const SignupSchema=Yup.object().shape({
  fieldName:Yup.string()
.min(2,"Minimum of two Characters")
.max(20,"Maximum of 20 Characters")
.required('Title is Required'),
// body:Yup.string()
// .min(2,"Minimum of two Characters")
// .max(500,"Maximum of 500 Characters")
// .required('Body is Required'),



});

  //Form Configuration
export const InputForm = withFormik({

    mapPropsToValues:  (props)=>{
      //  console.log(props.values)
      
      return{fieldName:props.values?props.values.fieldName:'',
      dataType:props.values?props.values.dataType.id: 0,
      size:props.values?props.values.size:'',id:props.values?props.values.id:0
      ,sequenceNum:props.values?props.values.sequenceNum:0}
      
    }

    ,
    
    
    // Custom sync validation
    validationSchema:SignupSchema
    ,
    
    handleSubmit: (values,{props,resetForm,setSubmitting}) => {
      setSubmitting(true);
      
      
     let selectedType = props.dataTypeList.find((e)=> e.id==values.dataType);
     values.dataType=selectedType;
    
     if(props.updateFunction){
      
      
      setTimeout(() => {
        props.updateFunction(values);
        resetForm();
        props.cancelFunc();
        setSubmitting(false);
      }, 2000);
     }
     if(props.addFunction){
      setTimeout(() => {
        props.addFunction(values);
        resetForm();
       
        setSubmitting(false);
      }, 2000);
     }
      
       
    },
    
    displayName: 'BasicForm',
    })(InputFormTemplate);
    

export default FormDialog;