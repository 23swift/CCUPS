import  React  from 'react';
import { Paper, Typography, makeStyles, Box, FormControlLabel, Checkbox, Grid, Button, AppBar, Toolbar } from '@material-ui/core';
import { Form, Field, withFormik } from 'formik';
import { TextField as formikField,Select as formikSelect } from 'formik-material-ui';
import blue from '@material-ui/core/colors/blue';
import { Save, Send, Cancel } from '@material-ui/icons';
import { red, pink, orange } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(1, 1),
        padding: theme.spacing(2, 2),
     
    },
    button: {
        color:theme.palette.background.default,
        backgroundColor:theme.palette.primary.light
       
      },
      cancelButton: {
        color:orange[400],
        // '&:hover':{
        //     // color:theme.palette.primary.dark,
        //     backgroundColor:theme.palette.secondary.main
        // },
        borderColor:orange[400],
       
      },
      
      submitButton: {
        color:theme.palette.primary.light,
        // '&:hover':{
        //     // color:theme.palette.primary.dark,
        //     backgroundColor:theme.palette.primary.light
        // },
        borderColor:theme.palette.primary.light
       
      },
}));


const FormToolBar=()=>{
    const classes = useStyles();
    return(

        <AppBar position="static">
        <Toolbar color="white">
        <Typography variant="h6" color="secondary" style={{flexGrow:1}}>
                     Product
        </Typography>
        <Box mx={1}>
        <Button type="submit" size="small" variant="text" className={classes.button}>
        <Send style={{margin:"2px"}}/>
                    Submit
        
        </Button >
        </Box>
        <Box>
        <Button type="submit" size="small" variant="text" className={classes.button}>
        <Cancel style={{margin:"2px"}}/>
       
                    Cancel
       
        
        </Button >
        </Box>
        
        </Toolbar>
       
    </AppBar>
    );
}

const ProductFormTemplate=(props)=>{
    const classes = useStyles();
    const {
        values,
        touched,
        errors,
        isSubmitting
        
        
      } = props;
    return(
        <div style={{margin:"3px"}}>
        
       
        <Form>
                    {/* <FormToolBar/> */}
                    <Box m={1} display="flex"   flexDirection="row" >
                   <Box>
                   <Field  component={formikField} label="Merchant ID"   fullWidth name="merchantId"   />
                                <Field  component={formikField} label="Institution Code"   fullWidth name="institutionCode"   />
                                <Field  component={formikField} label="Institution Description"   fullWidth name="institutionDesc"   />
                                <Field  component={formikField} label="Default Payment Allowed"   fullWidth name="institutionDesc"   />
                                <Field  component={formikField} label="Billing File Type"   fullWidth name="merchantId"   />
                                <Field  component={formikField} label="Padding Possition"   fullWidth name="institutionCode"   />
                                <Field  component={formikField} label="Padding Character"   fullWidth name="institutionDesc"   />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={false}  value="checked" />
                                    }
                                    label="Is Standard Institution?"
                                />
                   </Box>
                               
                   <Box mx={2}>
                        <Field  component={formikField} label="Batch Number Max Value"   fullWidth name="merchantId"   />
                        <Field  component={formikField} label="Batch Numnber Initial value"   fullWidth name="institutionCode"   />
                        <Field  component={formikField} label="Batch Number Lenght Limit"   fullWidth name="institutionDesc"   />
                        <Field  component={formikField} label="Current Batch Number"   fullWidth name="institutionDesc"   />
                        <Field  component={formikField} label="Decline Code Max Lenght"   fullWidth name="merchantId"   />
                        <Field  component={formikField} label="Padding Possition"   fullWidth name="institutionCode"   />
                      
                        <FormControlLabel
                            control={
                            <Checkbox checked={false}  value="checked" />
                            }
                            label="Is Counter Reset Allowed?"
                        />
                    </Box>

                    </Box>
                    <Toolbar>
                    <Typography variant="h6" color="secondary" style={{flexGrow:1}}>
                     
                     </Typography>
                                 <Box mx={1}>
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

                    </Toolbar>
                    
                    </Form>
              
              
        </div>
    );
}

export const ProductForm=withFormik({

    mapPropsToValues: () => ({merchantId:'',institutionCode:'',institutiondesc:''})
    ,
    
    
    // Custom sync validation
    // validationSchema:SignupSchema
    // ,
    
    handleSubmit: (values,{props,resetForm,setSubmitting}) => {
      setSubmitting(true);
      
      console.log(props);
     
      setTimeout(() => {
        resetForm();
       
        setSubmitting(false);
      }, 2000);
       
    },
    
    displayName: 'BasicForm',
    })(ProductFormTemplate);

export default ProductForm;