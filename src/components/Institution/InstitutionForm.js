import  React  from 'react';
import { Paper, Typography, makeStyles, Box, FormControlLabel, Checkbox, Grid, Button, AppBar, Toolbar } from '@material-ui/core';
import { Form, Field, withFormik } from 'formik';
import { TextField as formikField,Select as formikSelect } from 'formik-material-ui';
import blue from '@material-ui/core/colors/blue';
import { Save, Send, Cancel, AccountBalance } from '@material-ui/icons';
import { red, pink, orange } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(1, 1),
        padding: theme.spacing(2, 2),
     
    },
    button: {
        color:theme.palette.background.default,
        '&:hover':{
            // color:theme.palette.primary.dark,
            backgroundColor:theme.palette.secondary.main
        },
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
      appBar:{
        backgroundColor:theme.palette.background.default,
      }
}));


const FormToolBar=()=>{
    const classes = useStyles();
    return(

        <AppBar position="static" className={classes.appBar}>
        <Toolbar  >
            <AccountBalance style={{color:orange[500]}}  /> 
             <Typography variant="h6" color="primary" style={{flexGrow:1}} >
                                         Institution
                                        </Typography>
       
                   
                                        <Box  mx={1}>
                                         <Button type="submit" size="small" variant="outlined" color="secondary" className={classes.cancelButton}>
                                         <Cancel style={{margin:"2px"}}/>
                                     
                                                     Cancel
                                     
                                         
                                         </Button >
                                         </Box>
                                         <Box>
                                         <Button type="submit" size="small" variant="outlined"  color="primary"  >
                                         <Send style={{margin:"2px"}}/>
                                                     Submit
                                         
                                         </Button >
                                         </Box>
                                        
       
        
       
        
        </Toolbar> 
       
     </AppBar>
    );
}

const InstitutionFormTemplate=(props)=>{
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
                                <Field  component={formikField} label="Default Payment Allowed"   fullWidth name="paymentAllowed"   />
                                <Field  component={formikField} label="Billing File Type"   fullWidth name="billingFileType"   />
                                <Field  component={formikField} label="Padding Possition"   fullWidth name="paddingPossition"   />
                                <Field  component={formikField} label="Padding Character"   fullWidth name="paddingChar"   />
                                <FormControlLabel
                                    control={
                                    <Checkbox checked={true}   name="isStandardInstitution"  />
                                    }
                                    label="Is Standard Institution?"
                                />
                   </Box>
                               
                   <Box mx={2}>
                        <Field  component={formikField} label="Batch Number Max Value"   fullWidth name="batchMaxVal"   />
                        <Field  component={formikField} label="Batch Numnber Initial value"   fullWidth name="batchinitVal"   />
                        <Field  component={formikField} label="Batch Number Lenght Limit"   fullWidth name="batchLeghtLimit"   />
                        <Field  component={formikField} label="Current Batch Number"   fullWidth name="currentbatchNum"   />
                        <Field  component={formikField} label="Decline Code Max Lenght"   fullWidth name="declineCodeMaxLenght"   />
                      
                        <FormControlLabel
                            control={
                            <Checkbox checked={true}   name="isResetAllowed" />
                            }
                            label="Is Counter Reset Allowed?"
                        />
                    </Box>

                    </Box>
                    <hr/>
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

export const InstitutionForm=withFormik({

    mapPropsToValues: () => ({merchantId:'',institutionCode:'',institutionDesc:'',paymentAllowed:'',billingFileType:'',
    paddingPossition:'',paddingChar:'',batchMaxVal:'',batchinitVal:'',batchLeghtLimit:'',currentbatchNum:'',declineCodeMaxLenght:'',isStandardInstitution:true,
    isResetAllowed:true})
    ,
    
    
    // Custom sync validation
    // validationSchema:SignupSchema
    // ,
    
    handleSubmit: (values,{props,resetForm,setSubmitting}) => {
      setSubmitting(true);
      
      console.log(values);
     
      setTimeout(() => {
        // resetForm();
       
        setSubmitting(false);
      }, 2000);
       
    },
    
    displayName: 'BasicForm',
    })(InstitutionFormTemplate);

export default InstitutionForm;